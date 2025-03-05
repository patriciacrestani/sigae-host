import { Component, Inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../service/layout.service';
import { Select } from 'primeng/select';
import { FloatLabel } from "primeng/floatlabel"
import { FormsModule } from '@angular/forms';
import { EscolaService } from '../../services/escola.service';
import { PessoaService } from '../../services/pessoa.service';
import { LocalStorageService } from '../../services/local-storage.service';
import { MenuMaster } from '../../models/menu-master';
import { Escola } from '../../models/escola';
import { Pessoa } from '../../models/pessoa';
import { ButtonModule } from 'primeng/button';
import { AutenticacaoService } from 'autenticacao';
import { User } from '@auth0/auth0-angular';

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule, StyleClassModule, Select, FloatLabel, ButtonModule],
    template: ` <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" (click)="layoutService.onMenuToggle()">
                <i class="pi pi-bars"></i>
            </button>
            <a class="layout-topbar-logo" routerLink="/">
                <img src="assets/images/favicon.png"  width="54" height="11" title="Logo Instituto Unibanco.">
                <span>SIGAE</span>
            </a>
        </div>

        <div class="layout-topbar-actions">
            <div class="layout-config-menu">
                <button type="button" class="layout-topbar-action" (click)="toggleDarkMode()">
                    <i [ngClass]="{ 'pi ': true, 'pi-moon': layoutService.isDarkTheme(), 'pi-sun': !layoutService.isDarkTheme() }"></i>
                </button>
                <!-- <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div> -->
            </div>

            <button class="layout-topbar-menu-button layout-topbar-action" pStyleClass="@next" enterFromClass="hidden" enterActiveClass="animate-scalein" leaveToClass="hidden" leaveActiveClass="animate-fadeout" [hideOnOutsideClick]="true">
                <i class="pi pi-ellipsis-v"></i>
            </button>

            <div class="layout-topbar-menu hidden lg:block">
                <div class="layout-topbar-menu-content">
                    <p-floatlabel class="w-full md:w-56" variant="on">
                        <p-select [(ngModel)]="escolaSelecionada" inputId="on_label" [options]="escolas" optionLabel="nome" styleClass="w-full" [filter]="true" filterBy="nome" (onChange)="changeEscola($event)" [showClear]="true" />
                        <label for="on_label">Escola</label>
                    </p-floatlabel>

                    
                    <p-floatlabel class="w-full md:w-56" variant="on">
                        <p-select [(ngModel)]="pessoaSelecionada" inputId="on_label" [options]="pessoas" optionLabel="nome" styleClass="w-full" [filter]="true" filterBy="nome" (onChange)="changePessoa($event)" [showClear]="true" />
                        <label for="on_label">Pessoa</label>
                    </p-floatlabel>
                </div>
            </div>

            @if(this.isAuthenticated) {
                <p class="m-auto">Olá, {{ this.getName() }}</p>
                <p-button label="Sair" variant="text" (onClick)="logout()" />
            } 
            @else {
                <p-button label="Entrar" variant="text" (onClick)="login()" />
            }
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];
    escolas: Escola[];
    escolaSelecionada: Escola | null;
    pessoas: Pessoa[];
    pessoaSelecionada: Pessoa | null;

    isAuthenticated: boolean;
    usuario: User | null | undefined;

    constructor(
        public layoutService: LayoutService,
        private escolaService: EscolaService,
        private pessoaService: PessoaService,
        private localStorageService: LocalStorageService,
        private autenticacaoService: AutenticacaoService
    ) {
        this.obterEscolas();
        this.obterPessoas();
        this.checkLocalStorage();
        this.checkUsuarioLogado();
    }

    async checkUsuarioLogado() {
        // if(this.autenticacaoService.isAuthenticated) {
        //     this.usuario = this.autenticacaoService.user;
        //     this.isAuthenticated = true;
        // }
        // this.isAuthenticated = false;

        
        await this.autenticacaoService.isAuthenticated.subscribe({ next:(v) => this.isAuthenticated = v, error: (e) => this.isAuthenticated = false});
        await this.autenticacaoService.user.subscribe({ next:(v) => this.usuario = v, error: (e) => console.error(e)});
        console.log("isAuthenticated", this.isAuthenticated);
        console.log("usuario", this.usuario);
    }

    getName(): string {
        if(!!this.usuario && !!this.usuario.name) {
            let names = this.usuario?.name.split('@');
            return names[0];
        }
        return "";
    }

    checkLocalStorage() {
        if(this.localStorageService.possuiItem()) {
            let menuMaster = this.localStorageService.getItem();
            if(!!menuMaster && !!menuMaster.escola && !!menuMaster.escola.id) this.escolaSelecionada = new Escola(menuMaster.escola);
            if(!!menuMaster && !!menuMaster.pessoa && !!menuMaster.pessoa.id) this.pessoaSelecionada = new Pessoa(menuMaster.pessoa);
        }
    }

    toggleDarkMode() {
        this.layoutService.layoutConfig.update((state) => ({ ...state, darkTheme: !state.darkTheme }));
    }

    obterEscolas() {
        this.escolaService.obterEscolas().subscribe({ next:(v) => this.escolas = v, error: (e) => console.error(e)});
    }

    obterPessoas(escolaFilter?) {
        this.pessoaService.obterPessoas().subscribe({ 
            next:(v) => {
                this.pessoas = v;
                if(!!escolaFilter) this.pessoas = this.pessoas.filter(p => p.escola.id == escolaFilter);
            }, 
            error: (e) => console.error(e)
        });
    }

    checkEscolaVinculadaPessoa(escolaSelecionada): boolean {
        if(!!this.pessoaSelecionada && this.pessoaSelecionada.escola.id == escolaSelecionada.id) return true;

        return false;
    }

    checkPessoaVinculadaEscola(pessoaSelecionada): boolean {
        if(!!this.escolaSelecionada && this.escolaSelecionada.id == pessoaSelecionada.escola.id) return true;

        return false;
    }

    changeEscola(escolaEvent) {
        if(!!escolaEvent.value && !this.checkEscolaVinculadaPessoa(escolaEvent.value)) {
            this.pessoaSelecionada = null;
            this.obterPessoas(escolaEvent.value.id);
            this.preencheEscola(escolaEvent.value.id);
        }
        this.atualizaLocalStorage();
    }

    preencheEscola(escolaId) {
        this.escolaSelecionada = new Escola(this.escolas.find(e => e.id == escolaId));
    }

    preenchePessoa(pessoaId) {
        this.pessoaSelecionada = new Pessoa(this.pessoas.find(e => e.id == pessoaId));
    }

    changePessoa(pessoaEvent) {
        if(!!pessoaEvent.value && !this.checkPessoaVinculadaEscola(pessoaEvent.value)) {
            this.preencheEscola(pessoaEvent.value.escola.id);
            this.preenchePessoa(pessoaEvent.value.id);
        }
        this.atualizaLocalStorage();
    }

    atualizaLocalStorage() {
        this.localStorageService.setItem(new MenuMaster({'escola': this.escolaSelecionada, 'pessoa': this.pessoaSelecionada}));
    }


    login() {
        this.autenticacaoService.loginWithRedirect();
    }

    logout() {
        this.autenticacaoService.logout();
    }
}

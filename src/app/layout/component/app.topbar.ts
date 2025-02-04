import { Component } from '@angular/core';
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

@Component({
    selector: 'app-topbar',
    standalone: true,
    imports: [RouterModule, CommonModule, FormsModule, StyleClassModule, Select, FloatLabel],
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
        </div>
    </div>`
})
export class AppTopbar {
    items!: MenuItem[];
    escolas: any;
    escolaSelecionada;
    pessoas: any;
    pessoaSelecionada;

    constructor(
        public layoutService: LayoutService,
        private escolaService: EscolaService,
        private pessoaService: PessoaService,
        private localStorageService: LocalStorageService,
    ) {
        this.obterEscolas();
        this.obterPessoas();
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
        }
        this.atualizaLocalStorage();
    }

    preencheEscola(escolaId) {
        this.escolaSelecionada = this.escolas.find(e => e.id == escolaId);
    }

    changePessoa(pessoaEvent) {
        if(!!pessoaEvent.value && !this.checkPessoaVinculadaEscola(pessoaEvent.value)) {
            this.preencheEscola(pessoaEvent.value.escola.id);
        }
        this.atualizaLocalStorage();
    }

    atualizaLocalStorage() {
        this.localStorageService.setItem(new MenuMaster(this.escolaSelecionada, this.pessoaSelecionada));
    }
}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { AutenticacaoService } from 'autenticacao';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [ButtonModule, CheckboxModule, InputTextModule, PasswordModule, FormsModule, RouterModule, RippleModule],
    template: `
        <div class="bg-surface-50 dark:bg-surface-950 flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <div class="flex flex-col items-center justify-center">
                <div style="border-radius: 56px; padding: 0.3rem; background: linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)">
                    <div class="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20" style="border-radius: 53px">
                        <div class="text-center mb-8">
                            <object data="assets/images/logo-unibanco-azul.svg" width="100" height="100" class="mb-8 shrink-0 mx-auto"> </object>

                            <div class="text-surface-900 dark:text-surface-0 text-3xl font-medium mb-4">Bem-vindo ao SIGAE!</div>
                            <span class="text-muted-color font-medium">Faça login para continuar.</span>
                        </div>

                        <div class="flex justify-center">
                            <p-button label="Login" icon="pi pi-arrow-right" iconPos="right" (onClick)="login()" />
                        </div>

                        <!-- <div>
                            <label for="email1" class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2">Login</label>
                            <input pInputText id="email1" type="text" placeholder="Login" class="w-full md:w-[30rem] mb-8" [(ngModel)]="email" />

                            <label for="password1" class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2">Senha</label>
                            <p-password id="password1" [(ngModel)]="password" placeholder="Senha" [toggleMask]="true" styleClass="mb-4" [fluid]="true" [feedback]="false"></p-password>

                            <div class="flex items-center justify-between mt-2 mb-8 gap-8">
                                <div class="flex items-center">
                                    <p-checkbox [(ngModel)]="checked" id="rememberme1" binary class="mr-2"></p-checkbox>
                                    <label for="rememberme1">Lembrar meu login e senha.</label>
                                </div>
                                <span class="font-medium no-underline ml-2 text-right cursor-pointer text-primary">Esqueceu sua senha?</span>
                            </div>
                            <p-button label="Entrar" styleClass="w-full" routerLink="/"></p-button>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    `
})
export class Login {
    // email: string = '';
    // password: string = '';
    // checked: boolean = false;

    constructor(private autenticacaoService: AutenticacaoService) { }

    login() {
        this.autenticacaoService.loginWithRedirect();
    }
}

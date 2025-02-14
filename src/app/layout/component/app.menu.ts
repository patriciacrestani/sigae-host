import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

    ngOnInit() {
        this.model = [
            {
                items: [
                    { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: ['/'] },
                    { label: 'Agenda', icon: 'pi pi-fw pi-calendar', routerLink: ['/agenda'] },
                    { label: 'Planos de ação', icon: 'pi pi-fw pi-file-edit', routerLink: ['/plano-acao'] }
                ]
            },
            {
                label: 'Cadastros',
                items: [
                    { label: 'Escolas', icon: 'pi pi-fw pi-building-columns', routerLink: ['/cadastros/escolas'] },
                    { label: 'Pessoas', icon: 'pi pi-fw pi-user', routerLink: ['/pessoas'] }
                ]
            }
        ];
    }
}

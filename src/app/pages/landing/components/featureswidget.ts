import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'features-widget',
    standalone: true,
    imports: [CommonModule],
    template: ` <div id="features">
        <div class="grid grid-cols-12 gap-4 justify-center">
            <div class="col-span-12 md:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(251, 199, 145, 0.2)), linear-gradient(180deg, rgba(253, 228, 165, 0.2), rgba(172, 180, 223, 0.2))">
                    <div class="flex flex-column items-center p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-cyan-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-building-columns !text-2xl text-cyan-700"></i>
                        </div>
                        <div class="block ml-6">
                            <h5 class="mb-2 text-surface-900 dark:text-surface-0"><span class="text-2xl">{{ qtdEscolas }}</span> escolas cadastradas!</h5>
                            <a class="text-surface-600 dark:text-surface-200" href="/escolas">Ir para escolas <i class="pi pi-external-link !text-sm pl-1"></i></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-4 p-0 lg:pr-8 lg:pb-8 mt-6 lg:mt-0">
                <div style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 226, 237, 0.2), rgba(172, 180, 223, 0.2)), linear-gradient(180deg, rgba(172, 180, 223, 0.2), rgba(246, 158, 188, 0.2))">
                    <div class="flex flex-column items-center p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-indigo-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-user !text-2xl text-indigo-700"></i>
                        </div>
                        <div class="block ml-6">
                            <div class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold"><span class="text-2xl">{{ qtdPessoas }}</span> pessoas cadastradas!</div>
                            <span class="text-surface-600 dark:text-surface-200" href="/pessoas">Ir para pessoas <i class="pi pi-external-link !text-sm pl-1"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(160, 210, 250, 0.2)), linear-gradient(180deg, rgba(187, 199, 205, 0.2), rgba(145, 210, 204, 0.2))">
                    <div class="flex flex-column items-center p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-teal-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-file-edit !text-2xl text-teal-700"></i>
                        </div>
                        <div class="block ml-6">
                            <div class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold"><span class="text-2xl">{{ qtdPlanosAcao }}</span> planos de ação cadastrados!</div>
                            <span class="text-surface-600 dark:text-surface-200" href="/planos-acao">Ir para planos de ação <i class="pi pi-external-link !text-sm pl-1"></i></span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-span-12 md:col-span-4 p-0 lg:pr-8 mt-6 lg:mt-0">
                <div style="padding: 2px; border-radius: 10px; background: linear-gradient(90deg, rgba(145, 210, 204, 0.2), rgba(212, 162, 221, 0.2)), linear-gradient(180deg, rgba(251, 199, 145, 0.2), rgba(160, 210, 250, 0.2))">
                    <div class="flex flex-column items-center p-4 bg-surface-0 dark:bg-surface-900 h-full" style="border-radius: 8px">
                        <div class="flex items-center justify-center bg-blue-200" style="width: 3.5rem; height: 3.5rem; border-radius: 10px">
                            <i class="pi pi-fw pi-calendar !text-2xl text-blue-700"></i>
                        </div>
                        <div class="block ml-6">
                            <div class="mb-2 text-surface-900 dark:text-surface-0 text-xl font-semibold"><span class="text-2xl">{{ qtdEventos }}</span> eventos hoje.</div>
                            <span class="text-surface-600 dark:text-surface-200" href="/agenda">Ir para agenda <i class="pi pi-external-link !text-sm pl-1"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`
})
export class FeaturesWidget {
    qtdEscolas: number = 0;
    qtdPlanosAcao: number = 0;
    qtdPessoas: number = 0;
    qtdEventos: number = 0;
}

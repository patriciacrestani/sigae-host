import { Component, ElementRef, inject, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FeaturesWidget } from '../landing/components/featureswidget';
import { loadRemoteModule } from '@angular-architects/native-federation';

@Component({
  selector: 'app-home',
  imports: [FeaturesWidget],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit {
  @ViewChild('microfrontend', { read: ViewContainerRef }) viewContainer!: ViewContainerRef;
  
  ngOnInit() {
    // setTimeout(() => {
      this.loadMF();
    // }, 2000);
  }

  async loadMF(): Promise<void> {
    const m = await loadRemoteModule({
      remoteName: 'plano-acao',
      exposedModule: './Total'
    });

    const ref = this.viewContainer.createComponent(m.TotalComponent);
    // const compInstance = ref.instance;
  }
}

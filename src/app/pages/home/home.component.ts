import { Component } from '@angular/core';
import { FeaturesWidget } from '../landing/components/featureswidget';

@Component({
  selector: 'app-home',
  imports: [FeaturesWidget],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}

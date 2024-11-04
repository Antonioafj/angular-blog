import { Component } from '@angular/core';
import { TitleComponent } from "../../components/title/title.component";
import { BigCardComponent } from "../../components/big-card/big-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitleComponent, BigCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

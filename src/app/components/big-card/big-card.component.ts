import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent implements OnInit{

  @Input()
  photoCover:string ="https://cdn.britannica.com/49/182849-050-4C7FE34F/scene-Iron-Man.jpg"
  
  @Input()
  cardTitle:string=""
  
  @Input()
  cardDescription:string=""

  @Input()
  Id:string="0"

  constructor(){}

  ngOnInit(): void {}



}

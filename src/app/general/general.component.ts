import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  /*animations: [
    trigger("fadeImg", [
      state("down", style({
        transform: "translateY(30px)"
      })),
      state("up", style({
        transform: "translateY(0)"
      })),
      transition("down => up", [
        animate("0.5s")
      ])
    ])
  ]*/
})
export class GeneralComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}

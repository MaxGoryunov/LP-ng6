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
    let img = document.getElementById("fadeImg");
    let text = document.getElementById("fadeText");
    document.addEventListener("scroll", ():void => {
      img.style.transform = "translateX(" +(-40 + document.documentElement.scrollTop/10) + "px";
      text.style.transform = "translateX(" + (40 - document.documentElement.scrollTop/10) + "px";      
    })
  }

}

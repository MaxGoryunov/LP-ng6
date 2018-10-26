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
    let blockHeight = window.innerHeight + 50;
    let topScroll = document.documentElement.scrollTop;
    document.addEventListener("scroll", ():void => {
      img.style.transform = "translateX(" + ( - 70*document.documentElement.scrollTop/blockHeight) + "px)";
      text.style.transform = "translateX(" + 70*document.documentElement.scrollTop/blockHeight + "px)";
      if (document.documentElement.scrollTop >= (window.innerHeight + 50)/2) {
        text.style.opacity = "0";
        text.style.transform =  "translateX(" + 70*document.documentElement.scrollTop/blockHeight + "px)" + "translateY(-40px)";
      } else {
        text.style.opacity = "1";
        text.style.transform = "translateX(" + 70*document.documentElement.scrollTop/blockHeight + "px)" + "translateY(0px)";        
      }
      if (document.documentElement.scrollTop >= (window.innerHeight + 50)/1.5) {
        img.style.opacity = "0";
        img.style.transform = "translateX(" +( - 70*document.documentElement.scrollTop/blockHeight) + "px)" + "translateY(-40px)";
      } else {
        img.style.opacity = "1";
        img.style.transform = "translateX(" +( - 70*document.documentElement.scrollTop/blockHeight) + "px)" + "translateY(0px)";
      }
    })
  }

}

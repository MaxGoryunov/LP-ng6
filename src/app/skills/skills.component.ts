import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { style, transition } from '@angular/animations/src/animation_metadata';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener("scroll", function ():void {
      let blockHeight = window.innerHeight;
      let scrollTop = document.documentElement.scrollTop;
      if (scrollTop > blockHeight) {
        document.getElementById("2_background").style.backgroundAttachment="fixed";
      } else {
        document.getElementById("2_background").style.backgroundAttachment="scroll";
      }
    })
    document.addEventListener("scroll", ():void => {
      let scrollTop = document.documentElement.scrollTop;
      let blockHeight = window.innerHeight;      
      let s_figures:any = [].slice.call(document.getElementsByClassName("s_figure"));
      for (let s_figure of s_figures) {
        if (scrollTop < blockHeight/4 + s_figures.indexOf(s_figure)*125) {
          s_figure.style.transform = "translateY(40px)";
          s_figure.style.opacity = "0";
        };
        if (scrollTop >= blockHeight/4 + s_figures.indexOf(s_figure)*125) {
          s_figure.style.transform = "translateY(0px)";
          s_figure.style.opacity = "1";
        };
        if (scrollTop >= blockHeight*1.1 + s_figures.indexOf(s_figure)*125) {
          s_figure.style.transform = "translateY(-40px)";
          s_figure.style.opacity = "0"; 
        }
        s_figure.onmouseenter = ():void => {
          s_figure.style.transform = "scale(1.1, 1.1)";
        }
        s_figure.onmouseleave = ():void => {
          s_figure.style.transform = "scale(1, 1)";          
        }
        /*if (scrollTop < 140 + s_figures.indexOf(s_figure)*132) {
          s_figure.style.opacity = "1";
          s_figure.style.animation = "Disappear-Down 1s";
        } else {
          s_figure.style.opacity = "0";
          s_figure.style.animation = "none";
        };
        if (scrollTop > 790 + s_figures.indexOf(s_figure)*132) {
          s_figure.style.animation = "Disappear-Up 1s";
        } else {
          s_figure.style.animation = "none";
        }*/
      }
      
    });
  }

}

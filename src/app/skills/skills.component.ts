import { Component, OnInit } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener("scroll", function ():void {
      if (document.documentElement.scrollTop>593) {
        document.getElementById("2_background").style.backgroundAttachment="fixed";
      } else {
        document.getElementById("2_background").style.backgroundAttachment="scroll";
      }
    })
    document.addEventListener("scroll", ():void => {
      let scrollTop = document.documentElement.scrollTop;
      let s_figures:any = [].slice.call(document.getElementsByClassName("s_figure"));
      for (let s_figure of s_figures) {
        if (scrollTop >= 155 + s_figures.indexOf(s_figure)*132) {
          s_figure.style.animation = "Appear-Up 1s";
          s_figure.style.opacity = "1";
        } else {
          s_figure.style.animation = "none";
          s_figure.style.opacity = "0";   
        };
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

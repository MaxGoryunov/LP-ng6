import { Component, OnInit } from '@angular/core';

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
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.addEventListener("scroll", function ():void {
      if (document.documentElement.scrollTop>0) {
        document.getElementById("header").classList.remove("large");
        document.getElementById("header").classList.add("small");
      } else {
        document.getElementById("header").classList.remove("small");
        document.getElementById("header").classList.add("large");
      }
    })

}

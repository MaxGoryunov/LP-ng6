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
    });

    let anchors = [].slice.call(document.querySelectorAll('a[href*="#"]'));
    
    for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        
        const blockID = anchor.getAttribute('href')
        
        document.querySelector('' + blockID).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    };
    
    document.addEventListener("scroll", function ():void {
      let main = document.getElementById("a_main");
      if (document.documentElement.scrollTop <= 540) {
        main.classList.add("active");
      } else {
        main.classList.remove("active");
      };
      let skills = document.getElementById("a_skills");
      if (document.documentElement.scrollTop > 540 && document.documentElement.scrollTop <= 1190) {
        skills.classList.add("active");
      } else {
        skills.classList.remove("active");
      };
      let callback = document.getElementById("a_callback");
      if (document.documentElement.scrollTop > 1190) {
        callback.classList.add("active");
      } else {
        callback.classList.remove("active");
      };
    })
  };
}

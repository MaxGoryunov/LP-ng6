import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let blockHeight = window.innerHeight;
    let name:any = document.getElementById("name");
    let email:any = document.getElementById("email");
    let phone:any = document.getElementById("phone");
    let checked: Array<HTMLElement> = [].slice.call(document.getElementsByClassName("checked"));
    let canceled: Array<HTMLElement> = [].slice.call(document.getElementsByClassName("canceled"));
    let button = document.getElementById("btn");
    name.addEventListener("change", ():void => {
      if (name.value.length > 1) {
        checked[0].style.opacity = "1";
        checked[0].style.transform = "translateX(" +( - blockHeight*0.462) + "px)";    
        canceled[0].style.opacity = "0";
        button.classList.add("name");
        canceled[0].style.transform = "translateX(" + blockHeight*0.1 + "px)";
      } else {
        checked[0].style.opacity = "0";
        checked[0].style.transform = "translateX(" +( - blockHeight*0.4) + "px)";
        canceled[0].style.opacity = "1";
        canceled[0].style.transform = "translateX(0px)";
        button.classList.remove("name");
      }
    })
    email.addEventListener("change", () => {
      function validateEmail(email) 
      {
          var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          return re.test(email);
      }
      if (validateEmail(email.value)) {
        checked[1].style.opacity = "1";
        checked[1].style.transform = "translateX(" +( - blockHeight*0.462) + "px)";    
        canceled[1].style.opacity = "0";
        button.classList.add("email");
        canceled[1].style.transform = "translateX(" + blockHeight*0.1 + "px)";
      } else {
        checked[1].style.opacity = "0";
        checked[1].style.transform = "translateX(" +( - blockHeight*0.4) + "px)";
        canceled[1].style.opacity = "1";
        canceled[1].style.transform = "translateX(0px)";
        button.classList.remove("email");
      }
    })
    phone.addEventListener("change", ():void => {
      function validatePhone(phone) {
        let re2 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return re2.test(phone);
      }
      if (validatePhone(phone.value)) {
        checked[2].style.opacity = "1";
        checked[2].style.transform = "translateX(" +( - blockHeight*0.462) + "px)";    
        canceled[2].style.opacity = "0";
        canceled[2].style.transform = "translateX(42px)";
        button.classList.add("phone");
      } else {
        checked[2].style.opacity = "0";
        checked[2].style.transform = "translateX(" +( - blockHeight*0.4) + "px)";
        canceled[2].style.opacity = "1";
        canceled[2].style.transform = "translateX(0px)";
        button.classList.remove("phone");
      }
    })
    setInterval(():void => {
      if ((button.classList.contains("name")) && button.classList.contains("email") && button.classList.contains("phone")) {
        button.classList.remove("disabled");
      } else {
        button.classList.add("disabled");
      }
    }, 0)
    
    document.addEventListener("scroll", ():void => {
      let h2 = document.getElementById("h2");
      let contacts = document.getElementById("contacts");
      if (document.documentElement.scrollTop > blockHeight*1.3) {
        h2.style.marginTop = "0";
        h2.style.opacity = "1";
        contacts.style.opacity = "1";
      } else {
        h2.style.marginTop = "40px";
        h2.style.opacity = "0";
        contacts.style.opacity = "0";
      }
    })
  }

}

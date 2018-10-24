import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    let name:any = document.getElementById("name");
    let email:any = document.getElementById("email");
    let phone:any = document.getElementById("phone");
    let checked: Array<HTMLElement> = [].slice.call(document.getElementsByClassName("checked"));
    let canceled: Array<HTMLElement> = [].slice.call(document.getElementsByClassName("canceled"));
    let caption:any = document.getElementById("caption");
    name.addEventListener("change", ():void => {
      if (name.value.length > 1) {
        checked[0].style.opacity = "1";
        checked[0].style.transform = "translateX(-270px)";    
        canceled[0].style.opacity = "0";
        canceled[0].style.transform = "translateX(42px)";
      } else {
        checked[0].style.opacity = "0";
        checked[0].style.transform = "translateX(-233px)";
        canceled[0].style.opacity = "1";
        canceled[0].style.transform = "translateX(0px)";
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
        checked[1].style.transform = "translateX(-270px)";    
        canceled[1].style.opacity = "0";
        canceled[1].style.transform = "translateX(42px)";
      } else {
        checked[1].style.opacity = "0";
        checked[1].style.transform = "translateX(-233px)";
        canceled[1].style.opacity = "1";
        canceled[1].style.transform = "translateX(0px)";
      }
    })
    phone.addEventListener("change", ():void => {
      function validatePhone(phone) {
        let re2 = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
        return re2.test(phone);
      }
      if (validatePhone(phone.value)) {
        checked[2].style.opacity = "1";
        checked[2].style.transform = "translateX(-270px)";    
        canceled[2].style.opacity = "0";
        canceled[2].style.transform = "translateX(42px)";
      } else {
        checked[2].style.opacity = "0";
        checked[2].style.transform = "translateX(-233px)";
        canceled[2].style.opacity = "1";
        canceled[2].style.transform = "translateX(0px)";
        caption.innerHTML = "Слишком короткий номер";
      }
    })
  }

}

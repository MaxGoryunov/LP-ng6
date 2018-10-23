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
    let re1 = new RegExp("/\S+@\S+\.\S+/");
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
      if (phone.value.length > 10) {
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

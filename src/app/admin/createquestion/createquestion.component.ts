import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createquestion',
  templateUrl: './createquestion.component.html',
  styleUrls: ['./createquestion.component.css']
})
export class CreatequestionComponent implements OnInit {
  total=[];
  currentValue=0;
  questionCollection= [];
  flagForFirst:boolean = false
  constructor(private route:Router) { }

  ngOnInit() {
  }

  questionUpdate(fvalue){
      let numberofQuestion  = fvalue.value.qnumber;
      this.total =Array.from(Array(numberofQuestion).keys())
      console.log(this.total)
  }

  questionDetails(f){
    this.currentValue = ++this.currentValue;
    this.questionCollection.push(f.value);
    if(this.total.length==this.currentValue){
      this.route.navigate(['/createquestion']);
      
    }
    if(this.total.length<this.currentValue){
      this.total=[];
      this.currentValue=0;
   }
  }
}

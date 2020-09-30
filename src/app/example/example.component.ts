import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})


export class ExampleComponent implements OnInit {
  constructor() { }

  data=[
    {name:"This is task 1"},
    {name:"This is Task 2"}
  ]

  done=[
    {name:"this task is done"},
    {name:"this task is done"},
  ]

  task:task=new task("")
  taskData:any
  ngOnInit() {
  }

  getData(){
  console.log(this.data)
  }
  postData(data){
   var newData={
     name:data
   }
   this.data.push(newData)
  }


  onDrop(event:CdkDragDrop<string[]>){
    if(event.previousContainer==event.container){
      moveItemInArray(event.container.data,
        event.previousIndex,event.currentIndex)
    }else{
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,event.currentIndex)
    }
  }
}
export class task{
  name:any
  constructor(name:any){}
}

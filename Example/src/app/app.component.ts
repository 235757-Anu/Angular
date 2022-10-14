import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'first_project';
  list:any[]=[];
   add(item:String)
    {
      if(item=" "){
        alert("this field cannot be left empty");
      }
      else{
this.list.push({item});
console.log(this.list)
      }
  }
  remove(i:number)
  {
this.list.splice(i,1);
  }
}

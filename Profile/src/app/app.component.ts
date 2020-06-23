import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private loadingbar: LoadingBarService){

  }


  model: any = {};
  onSubmit() {
    
    this.loadingbar.start();
  }
  url="";
 selectFile(event){
   if(event.target.files){
     var reader = new FileReader()
     reader.readAsDataURL(event.target.files[0])
     reader.onload=(event:any)=>{
       this.url=event.target.result
     }

   }
 }
 
}
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
	
  formdata:any= { };
  
  submitdata()
  {
    alert("Sucess."+JSON.stringify(this.formdata) );
  }

}
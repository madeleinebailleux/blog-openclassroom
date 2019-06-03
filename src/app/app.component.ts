import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 appareils = [
    {
      title: 'Titre 1',
      created_at: new Date(),
      content: 'blablablabla',
      loveIts: '3'
     
    },
    {
      title: 'Titre2',
      content: 'blablablabla',
      created_at: '03/03/2019',
      loveIts: '-5'
    },
    {
      title: 'Titre 3',
      content: 'blablablabla',
      created_at: '09/09/2019',
      loveIts: '8'
    }
  ];
  
}

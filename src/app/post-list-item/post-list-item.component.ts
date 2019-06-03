import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() loveIts: number;
  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;

  
 

  getColor() {
      if(this.loveIts>0) {
      return '#BAEAA7';
    } else if(this.loveIts<0) {
      return '#EAA9A7';
    }

  }
 
    getColor2() {
      if(this.loveIts>0) {
      return '#30B312';
    } else if(this.loveIts<0) {
      return '#E1544F';
    }

  }

  Dislike() {
   this.loveIts-=1;
   
   return this.loveIts;

  }

  Like() {
    this.loveIts = +this.loveIts + 1;

    return this.loveIts;
   
  }

  constructor() { }

  ngOnInit() {
  }

}

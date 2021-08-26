import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
  }



imageObject = [{
  image:  "/assets/images/home.jpg" ,
  thumbImage:  "/assets/images/home.jpg",
  title: ''
}, {
  image: '/assets/images/home4.jpg',
  thumbImage: '/assets/images/home4.jpg'
}, {
  image: '/assets/images/home2.jpg',
  thumbImage: '/assets/images/home2.jpg',
  title: ''
},{
  image: '/assets/images/home3.jpg',
  thumbImage: '/assets/images/home3.jpg',
  title: ''
}];

}



import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trendingreq',
  templateUrl: './trendingreq.page.html',
  styleUrls: ['./trendingreq.page.scss'],
})
export class TrendingreqPage implements OnInit {

  trendingRequest = {
    image: "lalala.jpg",
    name: "Ghost pepper noodle",
    price: "Rp 360.000",
    country: "Malaysia"
  }

  trendingRequests = [
    {
      image: "lalala.jpg",
      name: "Samyang",
      price: "Rp 200.000",
      country: "Korea"
    },
    {
      image:"lalala.jpg",
      name:"Ghost pepper noodle",
      price:"Rp 360.000",
      country:"Malaysia"
    },
    {
      image:"lalala.jpg",
      name:"Ghost pepper noodle",
      price:"Rp 360.000",
      country:"Malaysia"
    }
    ,
    {
      image:"lalala.jpg",
      name:"Ghost pepper noodle",
      price:"Rp 360.000",
      country:"Malaysia"
    },
    {
      image:"lalala.jpg",
      name:"Ghost pepper noodle",
      price:"Rp 360.000",
      country:"Malaysia"
    },
    {
      image:"lalala.jpg",
      name:"Ghost pepper noodle",
      price:"Rp 360.000",
      country:"Malaysia"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}

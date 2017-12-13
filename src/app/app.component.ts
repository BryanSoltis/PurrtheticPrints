import { Component, OnInit } from '@angular/core';

import { DeliveryClient, SortOrder } from 'kentico-cloud-delivery-typescript-sdk';

import { Poster } from './models/poster.class';
import { Testimonial } from 'app/models/testimonial.class';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private readonly posterType = 'poster';
  private readonly testimonialType = 'testimonial';
  
  private title = 'Purrthetic Prints';

  private latestPosters: Poster[];
  private testimonial: Testimonial[];

  constructor(
    private deliveryClient: DeliveryClient
  ) { }

  ngOnInit() {

    // get 'top 3' latest movies
    this.deliveryClient.items<Poster>()
      .type(this.posterType)
      .orderParameter("elements.title", SortOrder.desc)
      .get()
      .subscribe(response => {
        this.latestPosters = response.items;
      });
  }
}

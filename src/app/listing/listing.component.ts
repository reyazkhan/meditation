import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
    console.log(this.router.url);
  }

  addNew()
  {
    this.router.navigate(['add/'+this.router.url]);
  }

}

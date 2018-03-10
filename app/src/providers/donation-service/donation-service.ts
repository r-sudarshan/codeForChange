import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class DonationServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DonationServiceProvider Provider');
  }

  items: any[];

  load() {
    this.items = [];
    for(let i = 0; i < 10; i++) {
      this.items.push({
        text: 'Item ' + i,
        id: i
      });
    }
  }
  
  add() {
    alert('Added');
  }
}

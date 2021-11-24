import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationModel } from './models/reservation.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'appointments-frontend';
  jsonSubscription!: Subscription;
  cards: ReservationModel[] = [];
  constructor(private httpClient: HttpClient) {

  }
  ngOnInit() {
    this.jsonSubscription = this.httpClient.get('assets/jsonproba.json').subscribe((response: any) => {
      console.log(response);
      const reservationsArray = <ReservationModel[]>response['results']['reservation'];
      reservationsArray.forEach((reservation) => {
        this.cards.push(reservation);
      })
    })
  }
  ngOnDestroy() {
    this.jsonSubscription.unsubscribe()
  }
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ReservationModel } from './models/reservation.model';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  token = 'sc16179e91675883';
  jsonSubscription!: Subscription;
  cards: ReservationModel[] = [];
  constructor(private httpService: HttpService) {

  }
  ngOnInit() {
    this.jsonSubscription = this.httpService.getEndpoint('reservation/reservations', { 'idcita': this.token }).subscribe((response: any) => {
      console.log(response);
      const reservationsArray = <ReservationModel[]>response['results']['reservation'];
      reservationsArray.forEach((reservation) => {
        this.cards.push(reservation);
      })
      this.cards = this.cards.reverse()
    })
  }
  ngOnDestroy() {
    this.jsonSubscription.unsubscribe()
  }
  checkIn(index: number) {
    if (index == 0)
      console.log("click");
  }
}

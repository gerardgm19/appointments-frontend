import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ReservationModel } from 'src/app/models/reservation.model';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit, OnDestroy {

  token: any;
  jsonSubscription!: Subscription;
  cards: ReservationModel[] = [];

  constructor(private httpService: HttpService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.token = this.route.snapshot.queryParams['idcita'];

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

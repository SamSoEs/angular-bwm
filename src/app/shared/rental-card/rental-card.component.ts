import { Component, Input } from '@angular/core';
import {Rental} from '../../rental/shared/rental.model';
@Component({
  selector: 'bwm-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent  {

  rental: Rental;
  
  @Input('rentalItem') set rentalItem(rental: Rental){
    
    this.rental = rental;
  }
  



}

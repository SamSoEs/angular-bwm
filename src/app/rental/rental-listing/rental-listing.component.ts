import {Component, OnInit} from '@angular/core'
import { Rental } from '../shared/rental.model'
import { RentalService } from '../shared/rental.service'

import { AppStorage } from '../shared/rental.interface';

@Component({
    selector: 'bwm-rental-listing',
    templateUrl: './rental-listing.component.html',
    styleUrls : ['./rental-listing.component.scss']
})
export class RentalListingComponent implements OnInit{
    rentals: Rental[]= [];
    someData = 'Some Data';
    isLoaded = false;
    parentData = 10;

    constructor(private rentalService: RentalService){}

    ngOnInit(){
        const appStorage = new AppStorage<number>();
        appStorage.addItem(5);

       this.rentalService.getRentals()
        .subscribe((rentals: Rental[]) => {
            this.rentals = rentals;
        })
    }

    changeParentData(value: number){
        this.parentData = value;
    }
    

}
import {Component} from '@angular/core'
import { Rental } from '../shared/rental.model'
import { RentalService } from '../shared/rental.service'
@Component({
    selector: 'bwm-rental-listing',
    templateUrl: './rental-listing.component.html'
})
export class RentalListingComponent {
    rentals: Rental[]= []

    constructor(private rentalService: RentalService){}

    ngOnInit(){
       this.rentalService.getRentals()
        .subscribe((rentals: Rental[]) => {
            this.rentals = rentals;
        })
    }

}
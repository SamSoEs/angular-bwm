import {Component} from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { Rental } from '../shared/rental.model';
import { RentalService } from '../shared/rental.service';

@Component({
    selector: 'bwm-rental-detail',
    templateUrl: './rental-detail.component.html',
    styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent {

    rental: Rental;
    constructor(private route: ActivatedRoute, private rentalService: RentalService){

    }
    ngOnInit(){
        this.route.params.subscribe(params => {
            this.rentalService.getRentalById(params['rentalId']).subscribe(rental => {
                this.rental = rental;
            })
        })
    }

    helloWorld(message?: string) {
        alert(message);
    }
}
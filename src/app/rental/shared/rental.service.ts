import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Rental } from "./rental.model";

@Injectable()
export class RentalService{
    rentals: Rental[] = [
        {
        _id:'1',
        title:'Central Apartment',
        city: 'New York',
        street: 'Times Square',
        category: '',
        image: 'https://placeholder.pics/svg/350x250/3C4062/FF498F-E12161',
        numOfRooms: 3,
        description: 'What a nice apartment',
        dailyPrice: 34,
        shared: false,
        createdAt: '1/1/2020'
    },
    {
        _id: "3",
        title: "Central Apartment 3",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "https://placeholder.pics/svg/350x250/3C4062/FF498F-E12161",
        numOfRooms: 2,
        description: "Very nice apartment",
        dailyPrice: 334,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        _id: "4",
        title: "Central Apartment 4",
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "https://placeholder.pics/svg/350x250/3C4062/FF498F-E12161",
        numOfRooms: 9,
        description: "Very nice apartment",
        dailyPrice: 33,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        _id: "5",
        title: "Central Apartment 4",
        city: "Moscow",
        street: "Haupt strasse",
        category: "Condo",
        image: "https://placeholder.pics/svg/350x250/3C4062/FF498F-E12161",
        numOfRooms: 3,
        description: "Very nice apartment",
        dailyPrice: 33,
        shared: true,
        createdAt: "24/12/2017"
      }

    ];
    getRentals(): Observable<Rental[]> {
        return new Observable(observer => {
            setTimeout (() => {
                observer.next(this.rentals);
            }, 100)
        })
    }

    getRentalById(rentalId: string): Observable<Rental> {
      return new Observable(observer => {
        const rental = this.rentals.find(rental => rental._id === rentalId)
        setTimeout(() => observer.next(rental), 100);
      })
    }
  
}
import {asNativeElements, Component} from '@angular/core'


@Component({
    selector: 'bwm-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
   public counter: number = 0;


   public increment(event: any, incrementor: number) {
    console.log();
    this.counter += incrementor; 
   }

}

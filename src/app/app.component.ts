import { Component, OnInit } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { of, from } from 'rxjs'

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {

  ngOnInit(){
    of(2, 4, 6, 8).subscribe(console.log);

    from([20, 15, 10, 5])
      .pipe(
        tap(item => console.log(`emitted item .... ${item}`)),
        map(item => item * 2),
        map(item => item - 10),
        map(item => {
          if(item === 0){
          throw new Error("Zero detected") 
          }
          return item;
        }),
        take(3)


      ).subscribe(
        item => console.log(`Resulting item .. ${item}`),
        err => console.error(`Error occurred ${err}`),
        () => console.log(`complete`)
      )

      of('Apple1', 'Apple2', 'Apple3')
      .subscribe(
        apple => console.log(`Aplle was emitted ${apple}`),
        err => console.error(`Error ocurred: ${err}`),
        () => console.log("No mor apples")
      );
  }

}

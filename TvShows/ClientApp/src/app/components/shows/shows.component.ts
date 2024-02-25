import { Component } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-shows',
  templateUrl: './shows.component.html',
  styleUrls: ['./shows.component.css']
})
export class ShowsComponent {

  // showId:number = 0;
  allShows:Show[] = [];
  newShow:Show = {} as Show;
  decimalEntered: boolean = false;

  constructor(
    private _showService: ShowService
  ) {}

  ngOnInit():void{
    this.GetAllShows();
  }

  GetAllShows():Show[]{
    this._showService.GetShows().subscribe((response:Show[]) => {
      console.log(response);
      this.allShows = response;
    });
    return this.allShows;
  }

  AddingShow(newShow:Show):void{
    if(this.decimalEntered){
      alert('Whole numbers only, please.');
      return;
    }

    this._showService.addShow(newShow).subscribe((response:Show) => {
      console.log(response);
      this.allShows.push(response);
      newShow.name = "";
      newShow.img = "";
      newShow.genre = "";
      newShow.rating = 0;
    });
  }

  DeletingShow(id:number):void{
    let target:number = this.allShows.findIndex(s => s.id == id);
    this.allShows.splice(target, 1);

    this._showService.deleteShow(id).subscribe((response:Show) => {
      console.log(response);
    });
  }

  checkForDecimal(event: any) {
    const value = event.target.value;
    if (value.includes('.')) {
      this.decimalEntered = true;
    } else {
      this.decimalEntered = false;
    }
  }
}

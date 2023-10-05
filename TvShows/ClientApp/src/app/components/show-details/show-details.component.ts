import { Component } from '@angular/core';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {

  showId:number = 0;
  showDetails:Show = {} as Show;

  constructor(
    private _showService: ShowService
  ) {}

  ngOnInit():void{
    this.GetById(this.showId);
  }

  GetById(id:number):Show{
    this._showService.GetShowById(id).subscribe((response:Show) => {
      console.log(response);
      this.showDetails = response;
    });
    
    return this.showDetails;
  }
}

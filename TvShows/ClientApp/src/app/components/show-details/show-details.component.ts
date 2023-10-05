import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Show } from 'src/app/models/show';
import { ShowService } from 'src/app/services/show.service';

@Component({
  selector: 'app-show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent {

  // showId:number = 0;
  showDetails:Show = {} as Show;

  constructor(
    private _showService: ShowService,
    private _route:ActivatedRoute
  ) {}

  ngOnInit():void{
    const routeParams = this._route.snapshot.paramMap;
  let id: number = Number(routeParams.get("id"));
    this.GetById(id);
    console.log(id)
  }

  GetById(id:number):Show{
    this._showService.GetShowById(id).subscribe((response:Show) => {
      console.log(response);
      this.showDetails = response;
    });
    
    return this.showDetails;
  }
}

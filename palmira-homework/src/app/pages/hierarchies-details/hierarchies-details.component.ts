import { Component, OnInit } from '@angular/core';
import { SubordinatesService } from 'src/app/services/subordinates.service';
import { Subordinate } from 'src/models/subordinate.model';

@Component({
  selector: 'app-hierarchies-details',
  templateUrl: './hierarchies-details.component.html',
  styleUrls: ['./hierarchies-details.component.scss']
})
export class HierarchiesDetailsComponent implements OnInit {
  public subordinatesServiceList : Subordinate[] = [];
  constructor(
    private subordinatesService:SubordinatesService,
  ) { }

  ngOnInit(): void {
    this.subordinatesService.fetchSubordinatesService().subscribe(
      result =>{
        this.subordinatesServiceList = result?.data;
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { MatTableDataSource } from '@angular/material/table';
import { RestfulService } from './../../services/restful.service';
import { CommonModule } from '@angular/common'; 
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';        
import { MatInputModule } from '@angular/material/input';

export interface PERSON_TYPE {
  id: number;
  type: string;
}

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, RouterModule, MatTableModule, MatFormFieldModule, MatInputModule],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {

  personTypes!: PERSON_TYPE[];

  constructor(private router: Router, private route: ActivatedRoute, private restService: RestfulService) { }

  ngOnInit() {
    this.getPersonAll();
    this.getPersonTypes();
  }

  //====== Person List ======//
  //#1. Define variables
  displayedColumn: string[] = ['firstName','lastName','ssn','birthDay','personType','phone','delete'];
  dataSource = new MatTableDataSource();

  //#2. Get data from Rest
  getPersonAll() {
    this.restService.getPersonAllData()
    .subscribe({
      next: value => {
        this.dataSource.data = value;
      },
      error: error => console.error('Error:', error),
      complete: () => console.log('Complete')
    });    
  }

  //#3. Filter
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }  

  getPersonTypes() {
    this.restService.getPersonTypeData()
    .subscribe({
        next: value => {
          this.personTypes = value;
          //console.log('Next:', value);
        },
        error: error => console.error('Error:', error),
        complete: () => console.log('Complete')
    });
  }

  onClickDelete(id: string) {
    console.log("delete id: "+id)
    this.restService.deletePerson(id)
    .subscribe({
      next: value => {
        this.getPersonAll();
        this.getPersonTypes();
      },
      error: error => console.error('Error:', error),
      complete: () => console.log('Complete')
    });    
  }

}

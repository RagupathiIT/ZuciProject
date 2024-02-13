import { Component } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';
import { ColleagueServiceService } from '../shared/colleague-service.service';
import { BootstrapModelComponent } from '../bootstrap-model/bootstrap-model.component';
import { BsModalService } from 'ngx-bootstrap/modal';
import { debounceTime } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { colleagues } from '../shared/colleague';

@Component({
  selector: 'app-colleages',
  templateUrl: './colleages.component.html',
  styleUrl: './colleages.component.scss'
})
export class ColleagesComponent {
  Colleague: any = [];
  isModalOpen = false;
  selectedRow : any;
  searchForm!: FormGroup;
  // originalColleagues: any[] | undefined; 
  originalColleagues: colleagues[] = [];

 
  constructor(public restApi: ColleagueServiceService,private modalService: BsModalService, private fb:FormBuilder){
    this.originalColleagues = [];
    console.log('Original Colleagues:', this.originalColleagues);
  }
  ngOnInit(){
    this.loadColleagues();
    this.searchForm = this.fb.group({
      searchText:[]
    })
  }

  loadColleagues() {
    return this.restApi.getColleagues().subscribe((data: {}) => {
      this.Colleague = data;
      this.originalColleagues = [...this.Colleague]; 
    });
  }

  openBootstrapModal(row: any){
    this.selectedRow = row;
    this.isModalOpen = true;
    const initialState = {name:row.name, role:row.role, id:row.id,image:row.image, location:row.location, reporting:row.reporting,mail:row.mail, phone:row.phone};
    this.modalService.show(BootstrapModelComponent, { initialState});
  }

  closeModal(){
    this.isModalOpen = false;
  }

  onSearchTextChange(event: any) {
    this.searchForm.controls['searchText'].valueChanges
      .pipe(debounceTime(500))
      .subscribe(() => {
        if (this.searchForm.controls['searchText'].value.length > 1) {
          const searchedColleagues = this.originalColleagues?.filter((b: any) => b.name.toLowerCase().startsWith(event.target.value));
          console.log('searchedColleagues', searchedColleagues);
          this.Colleague = searchedColleagues;
        }
        else {
          this.Colleague = [...this.originalColleagues]; 
        }
      });
  }
  
}

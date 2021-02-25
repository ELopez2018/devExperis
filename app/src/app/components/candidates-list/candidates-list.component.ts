import { Component, OnInit } from '@angular/core';
import { CandidateModel } from '@models/candidate.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { CandidatesService } from '@services/candidates.service';


@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss']
})
export class CandidatesListComponent implements OnInit {

  candidatesAll!: CandidateModel[];
  constructor(private candidatesService: CandidatesService, private utilService: UtilsService) { }

  ngOnInit(): void {
    this.readCandidatesAll();
  }
  readCandidatesAll() {
    this.utilService.loading();
    this.candidatesService.readCandidate$().subscribe((response:any) =>{
      this.candidatesAll = response;
      this.utilService.loading(false);
    });
  }

}

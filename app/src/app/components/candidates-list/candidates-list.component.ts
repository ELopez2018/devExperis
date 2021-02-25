import { NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CandidateModel } from '@models/candidate.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { CandidatesService } from '@services/candidates.service';
import { MessageService } from '@services/message.service';
import { switchAll } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-candidates-list',
  templateUrl: './candidates-list.component.html',
  styleUrls: ['./candidates-list.component.scss'],
})
export class CandidatesListComponent implements OnInit {
  candidatesAll!: CandidateModel[];
  constructor(
    private candidatesService: CandidatesService,
    private utilService: UtilsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.readCandidatesAll();
  }
  readCandidatesAll() {
    this.utilService.loading();
    this.candidatesService.readCandidate$().subscribe((response: any) => {
      this.candidatesAll = response;
      this.utilService.loading(false);
    });
  }
  searchByFieldValue(field: string, value: string) {
    console.log(field, value);
    this.utilService.loading();
    this.candidatesService
      .searchCandidate$(field, value)
      .subscribe((response: any) => {
        this.candidatesAll = response;
        this.utilService.loading(false);
      });
  }
  searchByDate(from: any, to: any) {
    console.log(from, to);
    this.utilService.loading();
    this.candidatesService
      .searchByDateCandidate$(from, to)
      .subscribe((response: any) => {
        this.candidatesAll = response;
        this.utilService.loading(false);
      });
  }
  deleteCandidate(candidate: CandidateModel) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.utilService.loading();
        this.candidatesService
          .deleteCandidate$(candidate.id)
          .subscribe((response: any) => {
            if (response.success) {
              this.candidatesAll = this.candidatesAll.filter(
                (i) => i.id !== candidate.id
              );
              this.messageService.showCustom(
                response.message[0],
                null,
                'success'
              );
            } else {
              this.messageService.showCustom(
                response.message[0],
                null,
                'error'
              );
            }
            this.utilService.loading(false);
          });
      }
    });
  }
}

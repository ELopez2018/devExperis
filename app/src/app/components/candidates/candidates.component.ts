import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CandidateModel } from '@models/candidate.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { CandidatesService } from '@services/candidates.service';
import { MessageService } from '@services/message.service';
import { CandidatesModule } from './candidates.module';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  public form!: FormGroup;
  control!: AbstractControl;
  idCandidate!: number;
  candidate!: CandidateModel;
  constructor(
    private fb: FormBuilder,
    private candidateService: CandidatesService,
    private messageService: MessageService,
    private route: ActivatedRoute,
    private utilService: UtilsService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.idCandidate = this.route.snapshot.params.id;
    this.buscarCandidate();
  }
  buscarCandidate() {
    if (this.idCandidate) {
      this.utilService.loading();
      this.candidateService
        .searchCandidateById$(this.idCandidate)
        .subscribe((response: any) => {
          if (response.success) {
            this.utilService.loading(false);
            this.candidate = response.data;
            this.form.get('name')?.setValue(this.candidate.name);
            this.form.get('surname')?.setValue(this.candidate.surname);
            this.form.get('email')?.setValue(this.candidate.email);
            this.form.get('phone')?.setValue(this.candidate.phone);
            this.form
              .get('date_interview')
              ?.setValue(this.candidate.date_interview);
            this.form.get('rating')?.setValue(this.candidate.rating);
          }
        });
        this.utilService.loading(false);
    }
  }

  createForm() {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.email, Validators.required]),
      phone: new FormControl('', Validators.required),
      date_interview: new FormControl('', Validators.required),
      rating: new FormControl('', Validators.required),
    });
  }
  get name() {
    return this.form.get('name') || this.control;
  }
  get surname() {
    return this.form.get('surname') || this.control;
  }
  get email() {
    return this.form.get('email') || this.control;
  }
  get phone() {
    return this.form.get('phone') || this.control;
  }
  get date_interview() {
    return this.form.get('date_interview') || this.control;
  }
  get rating() {
    return this.form.get('rating') || this.control;
  }

  save() {
    let values = this.form.value;

    if (this.idCandidate) {
      this.utilService.loading();
      values.id = this.idCandidate;
      this.candidateService
        .updateCandidate$(values)
        .subscribe((response: any) => {
          if (response.success) {
            this.utilService.loading(false);
            this.messageService.showCustom(
              response.message[0],
              null,
              'success'
            );
            this.form.reset();
          } else {
            this.utilService.loading(false);
            this.messageService.showCustom(response.message[0], null, 'error');
          }
        });
    } else {
      this.candidateService
        .createCandidate$(values)
        .subscribe((response: any) => {
          this.utilService.loading();
          if (response.success) {
            this.utilService.loading(false);
            this.messageService.showCustom(
              response.message[0],
              null,
              'success'
            );
            this.form.reset();
          } else {
            this.utilService.loading(false);
            this.messageService.showCustom(response.message[0], null, 'error');
          }
        });
    }
  }
}

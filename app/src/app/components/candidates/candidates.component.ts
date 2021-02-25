import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CandidatesService } from '@services/candidates.service';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.scss'],
})
export class CandidatesComponent implements OnInit {
  public form!: FormGroup;
  control!: AbstractControl;
  constructor(
    private fb: FormBuilder,
    private candidateService: CandidatesService,
    private messageService: MessageService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}
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
    console.log(values);
    this.candidateService
      .createCandidate$(values)
      .subscribe((response: any) => {
        if (response.success) {
          this.messageService.showCustom(response.message[0], null, 'success');
          this.form.reset();
        } else {
          this.messageService.showCustom(response.message[0], null, 'error');
        }
      });
  }
}

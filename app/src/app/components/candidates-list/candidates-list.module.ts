import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CandidatesListRoutingModule } from './candidates-list-routing.module';
import { CandidatesListComponent } from './candidates-list.component';


@NgModule({
  declarations: [CandidatesListComponent],
  imports: [
    CommonModule,
    CandidatesListRoutingModule
  ]
})
export class CandidatesListModule { }

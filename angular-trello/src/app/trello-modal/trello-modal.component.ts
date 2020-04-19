import { Component, Input, OnInit } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';

@Component({
  selector: 'app-trello-modal',
  templateUrl: './trello-modal.component.html',
  styleUrls: ['./trello-modal.component.scss']
})
export class TrelloModalComponent implements OnInit {

  @Input() title: string;
  @Input() text: string;

  userForm: FormGroup;
  errorMatcher = new CrossFieldErrorMatcher();

  constructor(private fb: FormBuilder) {

  }

  ngOnInit(): void {
    this.userForm = this.fb.group({
      title: '',
      text: '',
    }, {
      validator: this.passwordValidator
    });
  }

  passwordValidator(form: FormGroup) {
    const condition = form.get('text').value === '';
    console.log(condition);
    return condition ? { isEmpty: true } : null;
  }

  onInputChange(input: string): void {
    this.title = input.trim();
  }
}

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    return control.dirty && form.invalid;
  }
}

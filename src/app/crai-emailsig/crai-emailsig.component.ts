import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crai-emailsig',
  templateUrl: './crai-emailsig.component.html',
  styleUrls: ['./crai-emailsig.component.scss']
})
export class CraiEmailsigComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
  emailSubscription: Subscription;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  get email() { return this.loginForm.get('email').value; }
  get name() { return this.loginForm.get('name').value; }
  get position() { return this.loginForm.get('position').value; }
  get phone() { return this.loginForm.get('phone').value; }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: [null, Validators.required],
      position: [null, Validators.required],
      email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      phone: [null, Validators.required]
    });
  }

  ngOnDestroy() {
  this.emailSubscription.unsubscribe();
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }
    console.log(this.loginForm.value);
  }
}

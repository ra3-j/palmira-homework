import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup  = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  public formData = new FormData();
  constructor(

    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  logIn(form:any){
    this.formData.append('email', form.get('email').value);
    this.formData.append('password', form.get('password').value);
    this.authService.logIn(this.formData)
    .subscribe(() => {
      this.router.navigate(['/hierarchies-details']);
    });
  }

}

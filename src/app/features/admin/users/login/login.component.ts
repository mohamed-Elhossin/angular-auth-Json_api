import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UsersService } from '../../../../services/users.service';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userEmail!: string;
  userPassword!: string;

  constructor(private router: Router, private serv: UsersService, private toastr: ToastrService) {


  }





  onSubmit() {
    this.serv.get().subscribe((data: any) => {
      let user = data.find((userData: any) => {
        return userData.email == this.userEmail && userData.password == this.userPassword;
      });

      if (user) {
        this.toastr.success("login Successfully");
        this.router.navigateByUrl("admin/home");
        localStorage.setItem("admin", user);
      } else {
        this.toastr.error("Wrong Password Or Email ");
      }

    })

  }
}

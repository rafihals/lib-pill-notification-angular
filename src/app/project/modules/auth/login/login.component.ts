import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Inisialisasi form
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}


  onNavigateRegister(): void {
    this.router.navigate(['/register']);
  }

  // Fungsi login
  onLogin(): void {
    console.log(this.loginForm.value,'login');

    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      if (username === 'admin' && password === 'password123') {
        const token = 'example-token'; // Token simulasi
        this.authService.login(token); // Simpan token ke localStorage
        this.router.navigate(['/home']); // Redirect ke halaman utama
      } else {
        this.errorMessage = 'Username atau password salah!';
      }
    }
  }
}

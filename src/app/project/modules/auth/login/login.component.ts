import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    // Inisialisasi form
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() { }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Berhasil Login' });
  }

  showWarn() {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: 'Username atau Password Salah' });
  }

  showInfo() {
    this.messageService.add({ severity: 'info', summary: 'Info', detail: 'Username atau Password Harus diisi' });
  }


  onNavigateRegister(): void {
    this.router.navigate(['/register']);
  }

  // Fungsi login
  onLogin(): void {
    if (this.loginForm.valid) {
      console.log('klik login');
      const { username, password } = this.loginForm.value;
      if (username === 'admin' && password === 'password123') {
        const token = 'example-token';
        this.authService.login(token);
        this.showSuccess();
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      } else {
        this.showWarn();
      }
    }
  }
}

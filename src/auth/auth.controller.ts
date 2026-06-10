import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // Menerima data yang dikirim oleh pengguna saat klik tombol "Daftar"
  @Post('register')
  submitRegister(
    @Body('nama') nama: string,
    @Body('email') email: string,
    @Body('sandi') sandi: string,
    @Body('terms_accepted') terms_accepted: boolean,
  ) {
    // Meneruskan data ke otak logika (Service)
    return this.authService.register(nama, email, sandi, terms_accepted);
  }
}
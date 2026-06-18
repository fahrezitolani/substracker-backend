import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  async submitRegister(
    @Body('nama') nama: string,
    @Body('email') email: string,
    @Body('sandi') sandi: string,
    @Body('terms_accepted') terms_accepted: boolean,
  ) {
    // Menambahkan 'await' untuk menunggu hasil dari service
    return await this.authService.register(nama, email, sandi, terms_accepted);
  }
}
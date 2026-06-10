import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  
  // Fungsi ini dibuat persis seperti rancangan Sequence Diagram kita
  register(nama: string, email: string, sandi: string, terms_accepted: boolean) {
    
    // Validasi 1: Syarat dan ketentuan harus dicentang
    if (!terms_accepted) {
      return { 
        status: 'error', 
        message: 'Gagal: Syarat dan ketentuan harus disetujui' 
      };
    }

    // Validasi 2: Email, nama, dan password tidak boleh kosong
    if (!nama || !email || !sandi) {
      return { 
        status: 'error', 
        message: 'Gagal: Semua kolom harus diisi' 
      };
    }

    // Jika semua validasi lolos, simpan ke Database (simulasi)
    // Sesuai ERD kita, data akan dipecah ke tabel 'Users' dan 'Credentials'
    return { 
      status: 'success', 
      message: `Pendaftaran berhasil! Akun dengan email ${email} telah dibuat.` 
    };
  }
}
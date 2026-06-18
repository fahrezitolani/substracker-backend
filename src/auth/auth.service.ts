import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  
  // Menambahkan 'async' karena proses enkripsi membutuhkan waktu
  async register(nama: string, email: string, sandi: string, terms_accepted: boolean) {
    
    // 1. Validasi Syarat & Ketentuan
    if (!terms_accepted) {
      return { 
        status: 'error', 
        message: 'Gagal: Syarat dan ketentuan harus disetujui' 
      };
    }

    // 2. Validasi Kelengkapan Data
    if (!nama || !email || !sandi) {
      return { 
        status: 'error', 
        message: 'Gagal: Semua kolom harus diisi' 
      };
    }

    // 3. Proses Keamanan: Enkripsi Kata Sandi (Hashing)
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(sandi, saltRounds);

    // Simulasi log terminal untuk membuktikan sandi berhasil diacak
    console.log(`[DATABASE MOCK] Menyimpan User: ${email}`);
    console.log(`[DATABASE MOCK] Sandi Tersimpan: ${hashedPassword}`);

    return { 
      status: 'success', 
      message: `Pendaftaran berhasil! Akun dengan email ${email} telah siap digunakan.` 
    };
  }
}
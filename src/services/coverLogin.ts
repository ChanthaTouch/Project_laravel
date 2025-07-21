// src/services/coverLogin.ts
import apiClient from '@/plugins/axios';

interface LoginPayload {
  username: string;
  password: string;
}

export async function login(payload: LoginPayload) {
  return await apiClient.post('/login', payload);
}

// You can add more functions like:
// export async function forgotPassword(email: string) { ... }
// export async function sendOtp(phone: string) { ... }

import api from '@/lib/axios';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData extends LoginCredentials {
  name: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
}

class AuthService {
  async login(credentials: LoginCredentials): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/login', credentials);
    this.setAuthData(response.data);
    return response.data;
  }

  async register(data: RegisterData): Promise<AuthResponse> {
    const response = await api.post<AuthResponse>('/auth/register', data);
    this.setAuthData(response.data);
    return response.data;
  }

  async logout(): Promise<void> {
    await api.post('/auth/logout');
    this.clearAuthData();
  }

  async getCurrentUser(): Promise<AuthResponse['user']> {
    const response = await api.get<AuthResponse['user']>('/auth/me');
    return response.data;
  }

  private setAuthData(data: AuthResponse) {
    localStorage.setItem('token', data.token);
    // Establecer cookie
    document.cookie = `token=${data.token}; path=/; max-age=2592000`; // 30 días
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    // Eliminar cookie
    document.cookie = 'token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
}

export const authService = new AuthService();
// Simple authentication utilities
export interface AdminUser {
  email: string;
  password: string;
}

// In production, use environment variables and hashed passwords
const ADMIN_CREDENTIALS: AdminUser = {
  email: 'mukhsin9@gmail.com',
  password: 'Jlamprang233!!',
};

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
}

export function createSession(): string {
  return Buffer.from(`${Date.now()}-${Math.random()}`).toString('base64');
}

export function validateSession(token: string | null): boolean {
  if (!token) return false;
  // Simple validation - in production use proper JWT or session management
  try {
    const decoded = Buffer.from(token, 'base64').toString();
    const timestamp = parseInt(decoded.split('-')[0]);
    const now = Date.now();
    // Session valid for 24 hours
    return now - timestamp < 24 * 60 * 60 * 1000;
  } catch {
    return false;
  }
}

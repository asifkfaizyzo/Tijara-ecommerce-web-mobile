import { storage } from './storage';

const TOKEN_KEY = 'auth_token';

export const auth = {
  async getToken(): Promise<string | null> {
    return storage.get(TOKEN_KEY);
  },

  async setToken(token: string): Promise<void> {
    await storage.set(TOKEN_KEY, token);
  },

  async clearToken(): Promise<void> {
    await storage.remove(TOKEN_KEY);
  },
};
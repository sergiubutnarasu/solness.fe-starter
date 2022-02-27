export type SessionType = {
  accessToken: string;
  expiresIn: number;
  expireDate: string;
  refreshToken: string;
};

export type SecurityContextProps = {
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  refreshToken: () => Promise<SessionType>;
  getSession: () => Promise<SessionType | undefined>;
  setAuthHandler: (auth: AuthHandler) => void;
};

export type AuthHandler = {
  login: (username: string, password: string) => Promise<any>;
  logout: (refreshToken: string) => Promise<any>;
  refreshToken: (refreshToken: string, accessToken: string) => Promise<any>;
};

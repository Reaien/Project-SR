import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  Children,
} from "react";
import { login, register } from "../services/auth"; //importacion de las fx en auth.ts
import jwtDecode, { JwtPayload } from "jwt-decode";

type AuthContextType = {
  user: JwtPayload | null;
  handleLogin: (username: string, password: string) => Promise<void>;
  handleRegister: (username: string, password: string) => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: Props) => {};

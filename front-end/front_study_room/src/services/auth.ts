import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/";

type AuthResponse = {
  access: string;
  refresh: string;
};

type AuthData = {
  username: string;
  password: string;
};

export const register = async ({
  username,
  password,
}: AuthData): Promise<AuthResponse> => {
  const response = await axios
    .post(`${API_URL}register/`, { username, password });
  return response.data;
};

export const login = async ({
  username,
  password,
}: AuthData): Promise<AuthResponse> => {
  const response = await axios
    .post(`${API_URL}register/`, { username, password });
  return response.data;
};

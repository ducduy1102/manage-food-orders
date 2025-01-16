import http from "@/lib/http";
import {
  LoginBodyType,
  LoginResType,
  LogoutBodyType,
  RefreshTokenBodyType,
  RefreshTokenResType,
} from "@/schemaValidations/auth.schema";

const authApiRequest = {
  refreshTokenRequest: null as Promise<{
    status: number;
    payload: RefreshTokenResType;
  }> | null,
  // server login: sLogin
  sLogin: (body: LoginBodyType) => http.post<LoginResType>("/auth/login", body),
  // client login: login
  login: (body: LoginBodyType) =>
    http.post<LoginResType>("/api/auth/login", body, {
      baseUrl: "",
    }),
  slogout: (body: LogoutBodyType & { accessToken: string }) =>
    http.post(
      "/auth/logout",
      { refreshToken: body.refreshToken },
      {
        headers: {
          Authorization: `Bearer ${body.accessToken}`,
        },
      }
    ),
  logout: () => http.post("/api/auth/logout", null, { baseUrl: "" }), // client gọi đến route hanlder, ko cần truyển accessToken và refreshToken vào body vì AT và RT tự động gửi thông qua cookies rồi
  sRefreshToken: (body: RefreshTokenBodyType) =>
    http.post<RefreshTokenResType>("/auth/refresh-token", body),
  async refreshToken() {
    if (this.refreshTokenRequest) return this.refreshTokenRequest;
    this.refreshTokenRequest = http.post<RefreshTokenResType>(
      "/api/auth/refresh-token",
      null,
      {
        baseUrl: "",
      }
    );
    const result = await this.refreshTokenRequest;
    this.refreshTokenRequest = null;
    return result;
  },
  setTokenToCookie: (body: { accessToken: string; refreshToken: string }) =>
    http.post("/api/auth/token", body, { baseUrl: "" }),
};

export default authApiRequest;

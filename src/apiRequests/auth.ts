import http from "@/lib/http";
import {
  LoginBodyType,
  LoginResType,
  LogoutBodyType,
} from "@/schemaValidations/auth.schema";

const authApiRequest = {
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
};

export default authApiRequest;

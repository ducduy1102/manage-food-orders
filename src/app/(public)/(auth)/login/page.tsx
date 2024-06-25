import LoginForm from "@/app/(public)/(auth)/login/login-form";
import { Suspense } from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}

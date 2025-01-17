import LoginForm from "@/app/[locale]/(public)/(auth)/login/login-form";
import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";

export default function Login({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Suspense>
        <LoginForm />
      </Suspense>
    </div>
  );
}

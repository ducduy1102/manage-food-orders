import LoginForm from "@/app/[locale]/(public)/(auth)/login/login-form";
import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/config";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Login" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

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

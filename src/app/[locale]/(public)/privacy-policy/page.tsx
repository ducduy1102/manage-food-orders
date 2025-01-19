import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/config";
import PrivacyPolicyPage from "@/app/[locale]/(public)/privacy-policy/privacy-policy";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "PrivacyPolicy" });
  return {
    title: t("name"),
  };
}

export default function PrivacyPolicy({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Suspense>
        <PrivacyPolicyPage />
      </Suspense>
    </div>
  );
}

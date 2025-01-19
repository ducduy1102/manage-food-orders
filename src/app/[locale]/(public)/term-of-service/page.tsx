import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/config";
import TermsOfServicePage from "@/app/[locale]/(public)/term-of-service/term-of-service";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "Term" });
  return {
    title: t("name"),
  };
}

export default function TermOfService({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Suspense>
        <TermsOfServicePage />
      </Suspense>
    </div>
  );
}

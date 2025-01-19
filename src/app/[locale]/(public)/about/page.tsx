import { Suspense } from "react";
import { setRequestLocale, getTranslations } from "next-intl/server";
import { Locale } from "@/config";
import AboutPage from "@/app/[locale]/(public)/about/about";
export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: "About" });
  return {
    title: t("name"),
  };
}

export default function About({
  params: { locale },
}: {
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Suspense>
        <AboutPage />
      </Suspense>
    </div>
  );
}

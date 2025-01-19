"use client";

import { useTranslations } from "next-intl";

export default function TermsOfServicePage() {
  const t = useTranslations("Term");
  return (
    <div className='flex flex-col'>
      <section className='bg-secondary py-20 px-4 md:px-6 lg:px-8'>
        <div className='max-w-4xl md:max-w-full xl:w-[1280px] text-center'>
          <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
            {t("name")}
          </h1>
        </div>
      </section>
      <section className='py-12 md:py-20 lg:py-24'>
        <div className='max-w-4xl md:max-w-full xl:w-[1280px] space-y-8'>
          <div>
            <h2 className='text-3xl font-bold'>{t("introduce")}</h2>
            <p className='mt-4 text-muted-foreground leading-8'>{t("desc")}</p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>{t("useOfService.title")}</h2>
            <p className='text-muted-foreground leading-8'>
              {t("useOfService.desc")}
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>
              {t("intellectualPropertyRights.title")}
            </h2>
            <p className='text-muted-foreground leading-8'>
              {t("intellectualPropertyRights.desc")}
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>{t("changesToTerms.title")}</h2>
            <p className='text-muted-foreground leading-8'>
              {t("changesToTerms.desc")}
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>{t("contact.title")}</h2>
            <p className='text-muted-foreground leading-8'>
              {t("contact.desc")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

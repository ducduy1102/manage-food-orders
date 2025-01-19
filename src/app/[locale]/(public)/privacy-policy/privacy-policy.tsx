"use client";

import { useTranslations } from "next-intl";

export default function PrivacyPolicyPage() {
  const t = useTranslations("PrivacyPolicy");
  return (
    <div className='flex flex-col'>
      <section className='bg-secondary  py-20 px-4 md:px-6 lg:px-8'>
        <div className='max-w-4xl md:max-w-full xl:w-[1280px] text-center'>
          <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
            {t("name")}
          </h1>
        </div>
      </section>
      <section className='py-12 md:py-20 lg:py-24'>
        <div className='max-w-4xl md:max-w-full xl:w-[1280px] space-y-8'>
          <div>
            <h2 className='text-3xl font-bold'>{t("dataCollected.title")}</h2>
            <p className='mt-4 text-muted-foreground leading-8'>
              {t("dataCollected.desc")}
            </p>
          </div>
          <div className='space-y-4'>
            <h2 className='text-3xl font-bold'>{t("purpose.title")}</h2>
            <p className=' text-muted-foreground leading-8'>
              {t("purpose.content.introduce")}
            </p>
            <ul className='space-y-4 text-muted-foreground leading-8'>
              <li>{t("purpose.content.firstPurpose")}</li>
              <li>{t("purpose.content.secondPurpose")}</li>
              <li>{t("purpose.content.thirdPurpose")}</li>
              <li>{t("purpose.content.fourthPurpose")}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

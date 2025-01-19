"use client";

import { useTranslations } from "next-intl";

export default function AboutPage() {
  const t = useTranslations("About");
  return (
    <div className='flex flex-col'>
      <section className='bg-secondary py-20 px-4 md:px-6 lg:px-8'>
        <div className='max-w-4xl md:max-w-full xl:w-[1280px] text-center'>
          <h1 className='text-4xl font-bold sm:text-5xl md:text-6xl'>
            {t("title")}
          </h1>
          <p className='mt-4 text-lg md:text-xl'>{t("address")}</p>
        </div>
      </section>
      <section className='py-12 md:py-20 lg:py-24'>
        <div className='max-w-4xl md:max-w-full xl:w-[1280px] space-y-8'>
          <div>
            <h2 className='text-3xl font-bold'>{t("ourStory.title")}</h2>
            <p className='mt-4 text-muted-foreground leading-8'>
              {t("ourStory.desc")}
            </p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>{t("ourValue.title")}</h2>
            <p className='mt-4 text-muted-foreground leading-8'>
              {t("ourValue.desc")}
            </p>
          </div>
          <div>
            <h2 className='text-3xl font-bold'>{t("ourCommitment.title")}</h2>
            <p className='mt-4 text-muted-foreground leading-8'>
              {t("ourCommitment.desc")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

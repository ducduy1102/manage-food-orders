"use client";
import SearchParamsLoader, { useSearchParamsLoader } from "@/components/search-params-loader";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Locale, locales } from "@/config";
import { useLocale, useTranslations } from "next-intl";
import {
  usePathname,
  useRouter,
  useSearchParams,
  useParams,
} from "next/navigation";
import { Suspense } from "react";

export default function SwitchLanguage() {
  return (
    <Suspense>
      <SwitchLanguageMain />
    </Suspense>
  );
}

export function SwitchLanguageMain() {
  const t = useTranslations("SwitchLanguage");
  const locale = useLocale();
  const pathname = usePathname();
  const params = useParams();
  const { searchParams, setSearchParams } = useSearchParamsLoader()
  const router = useRouter();

  return (
    <>
    <SearchParamsLoader onParamsReceived={setSearchParams}/>
        <Select
      value={locale}
      onValueChange={(value: Locale) => {
        const locale = params.locale as Locale;
        const newPathname = pathname.replace(`/${locale}`, `/${value}`);
        const fullUrl = `${newPathname}?${searchParams?.toString()}`;
        router.replace(fullUrl);
        router.refresh();
      }}
    >
      <SelectTrigger className='w-[140px]'>
        <SelectValue placeholder={t("title")} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {locales.map((locale) => (
            <SelectItem value={locale} key={locale}>
              {t(locale)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
    </>

  );
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableTable from "@/app/[locale]/manage/tables/table-table";
import { Suspense } from "react";
import { Metadata } from "next";
import envConfig, { Locale } from "@/config";
import { getTranslations } from "next-intl/server";

type Props = {
  params: { locale: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
  searchParams,
}: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: "Tables",
  });
  const url = envConfig.NEXT_PUBLIC_URL + `/${params.locale}/manage/tables`;
  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: url,
    },
    robots: {
      index: false,
    },
  };
}

export default function TablesPage() {
  return (
    <main className='grid items-start flex-1 gap-4 p-4 sm:px-6 sm:py-0 md:gap-8'>
      <div className='space-y-2'>
        <Card x-chunk='dashboard-06-chunk-0'>
          <CardHeader>
            <CardTitle>Bàn ăn</CardTitle>
            <CardDescription>Quản lý bàn ăn</CardDescription>
          </CardHeader>
          <CardContent>
            <Suspense fallback={<>Loading table table...</>}>
              <TableTable />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

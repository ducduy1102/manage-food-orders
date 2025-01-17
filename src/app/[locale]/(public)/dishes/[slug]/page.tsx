import dishApiRequest from "@/apiRequests/dish";
import DishDetail from "@/app/[locale]/(public)/dishes/[slug]/dish-detail";
import { getIdFromSlugUrl, warpServerApi } from "@/lib/utils";

export default async function DishPage({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const id = getIdFromSlugUrl(slug);

  const data = await warpServerApi(() => dishApiRequest.getDish(Number(id)));
  const dish = data?.payload?.data;
  if (!dish)
    return (
      <h1 className='text-2xl lg:text-3xl font-semibold'>
        Món ăn không tồn tại
      </h1>
    );

  return <DishDetail dish={dish} />;
}

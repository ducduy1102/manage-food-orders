import dishApiRequest from "@/apiRequests/dish";
import DishDetail from "@/app/[locale]/(public)/dishes/[id]/dish-detail";
import { warpServerApi } from "@/lib/utils";

export default async function DishPage({
  params: { id },
}: {
  params: { id: string };
}) {
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

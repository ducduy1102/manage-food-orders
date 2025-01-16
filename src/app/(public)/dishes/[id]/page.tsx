import dishApiRequest from "@/apiRequests/dish";
import { formatCurrency, warpServerApi } from "@/lib/utils";
import Image from "next/image";

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
    
  return (
    <div className='space-y-4'>
      <h1 className='text-2xl lg:text-3xl font-semibold'>{dish.name}</h1>
      <div className='font-semibold'>Giá: {formatCurrency(dish.price)}</div>
      <Image
        src='/banner.png'
        width={700}
        height={700}
        quality={100}
        alt='Banner'
        className='object-cover w-full h-full max-w-[1080px] max-h-[1080px] rounded-md'
      />
      <p>{dish.description}</p>
    </div>
  );
}

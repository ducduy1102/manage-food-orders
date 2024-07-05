"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useGetDishList } from "@/queries/useDish";
import { formatCurrency } from "@/lib/utils";

// fake data
const dishes = [
  {
    id: 1,
    name: "Pizza hải sản",
    description: "Pizza hải sản ngon nhất thế giới",
    price: 100000,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    name: "Pizza thịt bò",
    description: "Pizza thịt bò ngon nhất thế giới",
    price: 150000,
    image: "https://via.placeholder.com/150",
  },
];

export default function MenuOrder() {
  const { data } = useGetDishList();
  //   console.log(data?.payload.data);
  const dishes = data?.payload.data ?? [];
  return (
    <>
      {dishes.map((dish) => (
        <div key={dish.id} className="flex gap-4">
          <div className="flex-shrink-0">
            <Image
              src={dish.image}
              alt={dish.name}
              height={100}
              width={100}
              quality={100}
              className="object-cover w-[80px] h-[80px] rounded-md"
            />
          </div>
          <div className="space-y-1">
            <h3 className="text-sm">{dish.name}</h3>
            <p className="text-xs">{dish.description}</p>
            <p className="text-xs font-semibold">
              {formatCurrency(dish.price)}
            </p>
          </div>
          <div className="flex items-center justify-center flex-shrink-0 ml-auto">
            <div className="flex gap-1 ">
              <Button className="w-6 h-6 p-0">
                <Minus className="w-3 h-3" />
              </Button>
              <Input type="text" readOnly className="w-8 h-6 p-1" />
              <Button className="w-6 h-6 p-0">
                <Plus className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
      ))}
      <div className="sticky bottom-0">
        <Button className="justify-between w-full">
          <span>Giỏ hàng · 2 món</span>
          <span>100,000 đ</span>
        </Button>
      </div>
    </>
  );
}

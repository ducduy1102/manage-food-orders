"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGetDishList } from "@/queries/useDish";
import { formatCurrency } from "@/lib/utils";
import Quantity from "@/app/guest/menu/quantity";
import { useMemo, useState } from "react";
import { GuestCreateOrdersBodyType } from "@/schemaValidations/guest.schema";

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
  const dishes = useMemo(() => data?.payload.data ?? [], [data]);
  const [orders, setOrders] = useState<GuestCreateOrdersBodyType>([]);
  // React 19 hoặc Next.js 15 thì không cần dùng useMemo chỗ này
  const totalPrice = useMemo(() => {
    return dishes.reduce((result, dish) => {
      const order = orders.find((order) => order.dishId === dish.id);
      if (!order) return result;
      return result + order.quantity * dish.price;
    }, 0);
  }, [dishes, orders]);

  const handleQuantityChange = (dishId: number, quantity: number) => {
    setOrders((preOrders) => {
      if (quantity === 0) {
        return preOrders.filter((order) => order.dishId !== dishId);
      }
      const index = preOrders.findIndex((order) => order.dishId === dishId);
      if (index === -1) {
        return [...preOrders, { dishId, quantity }];
      }
      const newOrders = [...preOrders];
      newOrders[index] = { ...newOrders[index], quantity };
      return newOrders;
    });
  };
  //   console.log(orders);

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
            <Quantity
              onChange={(value) => handleQuantityChange(dish.id, value)}
              value={
                orders.find((order) => order.dishId === dish.id)?.quantity ?? 0
              }
            />
          </div>
        </div>
      ))}
      <div className="sticky bottom-0">
        <Button className="justify-between w-full">
          <span>Giỏ hàng · {orders.length} món</span>
          <span>{formatCurrency(totalPrice)}</span>
        </Button>
      </div>
    </>
  );
}

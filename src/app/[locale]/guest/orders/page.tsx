import OrdersCart from "@/app/[locale]/guest/orders/orders-cart";

export default function OrdersPage() {
  return (
    <div className='max-w-[400px] mx-auto space-y-4'>
      <h1 className='text-xl font-bold text-center'>Đơn hàng</h1>
      <OrdersCart />
    </div>
  );
}

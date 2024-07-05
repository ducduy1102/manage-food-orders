import MenuOrder from "@/app/guest/menu/menu-order";

export default async function MenuPage() {
  return (
    <div className="max-w-[400px] mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">🍕 Menu quán</h1>
      <MenuOrder />
    </div>
  );
}

import dishApiRequest from "@/apiRequests/dish";
import Modal from "@/app/(public)/@modal/(.)dishes/[id]/modal";
import DishDetail from "@/app/(public)/dishes/[id]/dish-detail";
import { warpServerApi } from "@/lib/utils";

export default async function DishPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const data = await warpServerApi(() => dishApiRequest.getDish(Number(id)));
  const dish = data?.payload?.data;
  return (
    <Modal>
      <DishDetail dish={dish} />
    </Modal>
  );
}

import Modal from "@/components/core/Modal";
import { getData } from "@/services/products";

type Product = {
  dataDetail: {
    id: number;
    title: string;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  };
};

export default async function DetailProductPage(props: any) {
  const { params } = props;
  const product: Product = await getData(
    "http://localhost:3000/api/product?id=" + params.id
  );
  return (
    <Modal>
      <img
        src={product.dataDetail.image}
        alt={product.dataDetail.name}
        className="object-top object-contain aspect-square col-span-2"
      />
      <div className="bg-white p-4 px-6">
        <h3>{product.dataDetail?.title || product.dataDetail.name}</h3>
        <p>Price : ${product.dataDetail.price}</p>
      </div>
    </Modal>
  );
}

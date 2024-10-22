import { getData } from "@/services/products";

type Product = {
  dataDetail: {
    id: number;
    name: string;
    title: string;
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
  console.log(params);
  return (
    <div className="container mx-auto my-10">
      <div className="w-1/2 mx-auto border border-gray-700">
        <img
          src={product.dataDetail.image}
          alt={product.dataDetail.title}
          className="w-full object-cover aspect-square col-span-2"
        />
        <div className="bg-white p-4 px-6">
          - <h3>{product.dataDetail?.title || product.dataDetail.name}</h3>
          <p>Price : ${product.dataDetail.price}</p>
        </div>
      </div>
    </div>
  );
}

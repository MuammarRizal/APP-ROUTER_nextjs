import { retrieveData, retrieveDataById } from "@/lib/firebase/service";
import { NextRequest, NextResponse } from "next/server";

// const data = [
//   {
//     id: 1,
//     title: "Belajar",
//     price: 123,
//     description: "Belajar Jaringan",
//     category: "belajar",
//     image:
//       "https://mtsn1nganjuk.sch.id/wp-content/uploads/2022/07/Pengertian-Belajar-Ciri-ciri-Belajar-dan-Prinsip-Belajar-626x393-1.jpg",
//     rating: {
//       rate: 12,
//       count: 5,
//     },
//   },
//   {
//     id: 2,
//     title: "Belajar",
//     price: 123,
//     description: "Belajar API",
//     category: "belajar",
//     image:
//       "https://stg.pahamify.com/wp-content/uploads/2021/01/Mengembalikan-Semangat-Belajar-Setelah-Liburan-03-1024x576.png",
//     rating: {
//       rate: 12,
//       count: 5,
//     },
//   },
//   {
//     id: 2,
//     title: "Belajar",
//     price: 123,
//     description: "Belajar API",
//     category: "belajar",
//     image:
//       "https://stg.pahamify.com/wp-content/uploads/2021/01/Mengembalikan-Semangat-Belajar-Setelah-Liburan-03-1024x576.png",
//     rating: {
//       rate: 12,
//       count: 5,
//     },
//   },
// ];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    // const dataDetail = data.find((item) => item.id === Number(id));
    const dataDetail = await retrieveDataById("products", id);
    if (dataDetail) {
      return NextResponse.json({
        codeStatus: 200,
        status: true,
        message: "Get data detail success",
        ok: true,
        dataDetail,
      });
    }
    return NextResponse.json({
      codeStatus: 404,
      status: false,
      message: "Data Not found",
    });
  }

  const products = await retrieveData("products");

  return NextResponse.json({
    codeStatus: 200,
    status: true,
    message: "Success",
    data: products,
  });
}

import { NextRequest, NextResponse } from "next/server";

const data = [
  {
    id: 1,
    nama: "muammarizal",
    npm: 202043502004,
  },
  {
    id: 2,
    nama: "alfina rahmalia",
    npm: 202043502002,
  },
  {
    id: 3,
    nama: "Adlian",
    npm: 202043502001,
  },
  {
    id: 4,
    nama: "Uwan",
    npm: 202043502002,
  },
  {
    id: 5,
    nama: "Rapit",
    npm: 202043502001,
  },
];

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");

  if (id) {
    const dataDetail = data.find((item) => item.id === Number(id));
    if (dataDetail) {
      return NextResponse.json({
        codeStatus: 200,
        status: true,
        message: "Get data detail success",
        dataDetail,
      });
    }
    return NextResponse.json({
      codeStatus: 404,
      status: false,
      message: "Data Not found",
    });
  }

  return NextResponse.json({
    codeStatus: 200,
    status: true,
    message: "Success",
    data,
  });
}

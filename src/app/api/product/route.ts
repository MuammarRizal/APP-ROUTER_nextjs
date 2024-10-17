import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const data = [
    {
      nama: "muammarizal",
      npm: 202043502004,
    },
    {
      nama: "alfina rahmalia",
      npm: 202043502002,
    },
    {
      nama: "Adlian",
      npm: 202043502001,
    },
  ];
  return NextResponse.json({ status: 200, message: "Success", data });
}

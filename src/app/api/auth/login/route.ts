import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const requestUser = await req.json();

  return NextResponse.json({
    message: "Toching route login is succesfully",
    status: true,
    statusCode: 200,
    data: requestUser,
  });
}

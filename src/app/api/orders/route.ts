import * as orders from "@/temp-data/orders.json";

import { NextRequest, NextResponse } from "next/server";

export const GET = (req: NextRequest): NextResponse => {
  return NextResponse.json({ data: orders }, { status: 200 });
};

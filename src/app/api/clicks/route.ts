import { NextResponse } from "next/server";
import { getClicksCollection } from "@/lib/mongodb";
import { LINK_IDS } from "@/lib/links";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 한 번에 반환: { github: 3, blog: 0, ... }
export async function GET() {
  try {
    const col = await getClicksCollection();
    const docs = await col.find({ _id: { $in: LINK_IDS } }).toArray();
    const counts: Record<string, number> = Object.fromEntries(
      LINK_IDS.map((id) => [id, 0]),
    );
    for (const d of docs) counts[d._id] = d.count;
    return NextResponse.json(counts);
  } catch {
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 해당 링크의 클릭 수를 1 증가: body { id }
export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const id = body?.id;
  if (typeof id !== "string" || !LINK_IDS.includes(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }
  try {
    const col = await getClicksCollection();
    const result = await col.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: result?.count ?? 1 });
  } catch {
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}

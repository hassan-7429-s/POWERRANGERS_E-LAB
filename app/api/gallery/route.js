import { NextResponse } from "next/server";
import { getGalleryItems, addGalleryItem } from "@/lib/gallery";

export async function GET(request) {
  const url = new URL(request.url);
  const limit = Number(url.searchParams.get("limit")) || undefined;
  const items = await getGalleryItems({ limit });
  return NextResponse.json(items);
}

export async function POST(request) {
  try {
    const payload = await request.json();

    if (!payload?.src || !payload?.alt) {
      return NextResponse.json(
        { error: "src and alt are required to add a gallery item." },
        { status: 400 }
      );
    }

    const created = await addGalleryItem(payload);
    return NextResponse.json(created, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unexpected error" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, message: "missing id" },
        { status: 400 }
      );
    }

    // 🔥 ดึงข้อมูลจาก DB
    const [rows]: any = await db.query(
      "SELECT * FROM topup WHERE id = ?",
      [id]
    );

    const data = rows[0];

    if (!data) {
      return NextResponse.json(
        { success: false, message: "not found" },
        { status: 404 }
      );
    }

    // 🔥 ส่งสถานะกลับไป
    return NextResponse.json({
      success: true,
      id: data.id,
      username: data.username,
      amount: data.amount,
      point: data.point,
      bonus: data.bonus,
      status: data.status, // pending / paid
      qr: data.qr_code,
      created_at: data.created_at,
    });

  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
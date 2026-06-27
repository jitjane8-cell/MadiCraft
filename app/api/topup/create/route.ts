import { NextResponse } from "next/server";
import { db } from "@/app/lib/db";
import { nanoid } from "nanoid";
import { generatePromptPayQR } from "@/lib/promptpay";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { username, amount } = body;

    if (!username || !amount) {
      return NextResponse.json(
        { success: false, message: "missing data" },
        { status: 400 }
      );
    }

    // 🔥 1. กำหนด point + bonus (logic เกม)
    let point = 0;
    let bonus = 0;

    switch (amount) {
      case 20:
        point = 100;
        bonus = 5;
        break;
      case 50:
        point = 250;
        bonus = 10;
        break;
      case 100:
        point = 550;
        bonus = 20;
        break;
      case 300:
        point = 1800;
        bonus = 60;
        break;
      case 500:
        point = 3200;
        bonus = 120;
        break;
      case 1000:
        point = 7000;
        bonus = 300;
        break;
      default:
        point = amount * 5;
        bonus = 0;
    }

    // 🔥 2. สร้าง transaction id
    const id = nanoid(12);

    // 🔥 3. mock QR (ไว้ต่อ PromptPay จริงทีหลัง)
    const qr = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${id}`;

    // 🔥 4. insert ลง database
    await db.query(
      `INSERT INTO topup 
      (id, username, amount, point, bonus, status, qr_code)
      VALUES (?, ?, ?, ?, ?, 'pending', ?)`,
      [id, username, amount, point, bonus, qr]
    );

    // 🔥 5. response กลับไป frontend
    return NextResponse.json({
      success: true,
      id,
      username,
      amount,
      point,
      bonus,
      qr,
      status: "pending",
    });

  } catch (err: any) {
    console.error(err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
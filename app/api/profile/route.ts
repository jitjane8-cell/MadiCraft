import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: NextRequest) {
  const username = req.nextUrl.searchParams.get("username");

  if (!username) {
    return NextResponse.json({ points: 0 });
  }

  const db = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  // หา UUID จากชื่อผู้เล่น
  const [users]: any = await db.execute(
    "SELECT uuid FROM playerpoints_username_cache WHERE username = ?",
    [username]
  );

  if (users.length === 0) {
    await db.end();
    return NextResponse.json({ points: 0 });
  }

  const uuid = users[0].uuid;

  // หา Point จาก UUID
  const [rows]: any = await db.execute(
    "SELECT points FROM playerpoints_points WHERE uuid = ?",
    [uuid]
  );

  await db.end();

  return NextResponse.json({
    points: rows[0]?.points || 0,
  });
}
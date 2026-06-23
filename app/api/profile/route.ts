import { NextRequest, NextResponse } from "next/server";
import mysql from "mysql2/promise";

export async function GET(req: NextRequest) {
  try {
    const username = req.nextUrl.searchParams.get("username");

    if (!username) {
      return NextResponse.json({ points: 0 });
    }
console.log({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});
const db = await mysql.createConnection({
  host: "143.20.142.213",
  port: 3306,
  user: "web",
  password: "051160",
  database: "authme",
});

    const [users]: any = await db.execute(
      "SELECT uuid FROM playerpoints_username_cache WHERE username = ?",
      [username]
    );

    if (users.length === 0) {
      await db.end();
      return NextResponse.json({ points: 0 });
    }

    const uuid = users[0].uuid;

    const [rows]: any = await db.execute(
      "SELECT points FROM playerpoints_points WHERE uuid = ?",
      [uuid]
    );

    await db.end();

    return NextResponse.json({
      points: rows[0]?.points || 0
    });

  } catch (err) {
    console.error("MYSQL ERROR:", err);

    return NextResponse.json({
      error: String(err)
    }, { status: 500 });
  }
}
export const runtime = "nodejs";

import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import crypto from "crypto";

function sha256(input: string) {
  return crypto.createHash("sha256").update(input).digest("hex");
}

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ success: false, message: "missing data" });
    }

    const db = await mysql.createConnection({
      host: "127.0.0.1",
      user: "root",
      password: "",
      database: "authme",
    });

    const [rows]: any = await db.execute(
      "SELECT password FROM authme WHERE username = ? LIMIT 1",
      [username]
    );

    await db.end();

    if (!rows || rows.length === 0) {
      return NextResponse.json({ success: false, message: "user not found" });
    }

    const dbPass = rows[0].password;

    if (!dbPass || !dbPass.includes("$")) {
      return NextResponse.json({ success: false, message: "bad hash format" });
    }

    const parts = dbPass.split("$");
    const salt = parts[2];
    const hash = parts[3];

    const inputHash = sha256(password + salt);

    if (inputHash !== hash) {
      return NextResponse.json({ success: false, message: "wrong password" });
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    console.error("LOGIN ERROR:", err);
    return NextResponse.json(
      { success: false, message: "server error" },
      { status: 500 }
    );
  }
}
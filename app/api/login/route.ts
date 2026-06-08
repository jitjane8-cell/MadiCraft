import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import crypto from "crypto";

function authmeSha(password: string, salt: string) {
  const first = crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");

  return crypto
    .createHash("sha256")
    .update(first + salt)
    .digest("hex");
}

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json();

    const db = await mysql.createConnection({
      host: "143.20.142.213",
      user: "web",
      password: "MadiWeb123!",
      database: "authme",
    });

    const [rows]: any = await db.execute(
      "SELECT password FROM authme WHERE username = ?",
      [username]
    );

    await db.end();

    if (rows.length === 0) {
      console.log(rows[0]);
      return NextResponse.json({
        success: false,
        message: "ไม่พบผู้เล่น",
      });
    }

    const stored = rows[0].password;

    const parts = stored.split("$");

    if (parts.length !== 4) {
      return NextResponse.json({
        success: false,
        message: "รูปแบบรหัสผ่านไม่ถูกต้อง",
      });
    }

    const salt = parts[2];
    const hash = parts[3];

    const testHash = authmeSha(password, salt);

    console.log("username =", username);
    console.log("salt =", salt);
    console.log("stored =", hash);
    console.log("test =", testHash);

    if (testHash !== hash) {
      return NextResponse.json({
        success: false,
        message: "รหัสผ่านไม่ถูกต้อง",
      });
    }

    return NextResponse.json({
      success: true,
      username,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json({
      success: false,
      message: "Server Error",
    });
  }
}
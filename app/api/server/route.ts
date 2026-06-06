import { NextResponse } from "next/server";
import { status } from "minecraft-server-util";

export async function GET() {
  try {
    const result = await status(
      "play.madicraft.online",
      25565
    );

    return NextResponse.json({
      online: result.players.online,
      max: result.players.max,
      version: result.version.name,
    });
  } catch {
    return NextResponse.json({
      online: 0,
      max: 0,
      version: "Offline",
    });
  }
}
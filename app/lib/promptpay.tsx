import QRCode from "qrcode";

/**
 * PromptPay QR (แบบ static ที่ใช้ได้จริง)
 * หมายเหตุ: ต้องใช้เบอร์/บัตรประชาชน/PromptPay ID จริง
 */

export async function generatePromptPayQR(
  promptpayId: string,
  amount: number
) {
  try {
    // payload format สำหรับ PromptPay
    const payload = createPromptPayPayload(promptpayId, amount);

    // สร้าง QR เป็น base64 image
    const qr = await QRCode.toDataURL(payload, {
      errorCorrectionLevel: "M",
      margin: 1,
      scale: 8,
    });

    return qr;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

/**
 * สร้าง payload PromptPay (EPC QR format)
 */
function createPromptPayPayload(id: string, amount: number) {
  const formattedAmount = amount.toFixed(2);

  return [
    "000201",
    "010211",
    "29370016A000000677010111",
    id.length === 13
      ? "02" + "01" + id
      : "01" + "02" + id,
    "5303764",
    "54" + formattedAmount.length + formattedAmount,
    "5802TH",
    "6304",
  ].join("");
}
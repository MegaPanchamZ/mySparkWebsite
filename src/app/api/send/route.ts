import { MySparkBetaEmail } from "../../../components/component/betaemail";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest): Promise<NextResponse> {
  const json = await req.json();

  const { data, error } = await resend.emails.send({
    from: "MySpark <beta@myspark.social>",
    to: [json.toEmail],
    subject: "Thank you for expressing interest in the beta!",
    react: MySparkBetaEmail(),
  });

  if (error) {
    return NextResponse.json({
      success: false,
      message: error.message,
      email: json.toEmail,
    });
  }

  return NextResponse.json({
    success: true,
    message: "Successfully signed up to the waiting list!",
  });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { MySparkBetaEmail } from "../../../components/component/betaemail";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextApiRequest): Promise<any> {
  const email = req.body.email as string;

  const { data, error } = await resend.emails.send({
    from: "MySpark <beta@myspark.social>",
    to: [`${email}`],
    subject: "Thank you for expressing interest in the beta!",
    react: MySparkBetaEmail(),
  });

  if (error) {
    return NextResponse.json({ success: false, message: error.message, email: email });
  }

  return NextResponse.json({
    success: true,
    message: "Successfully signed up to the waiting list!",
  });
}

import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";
import VerificationEmail from "../../emails/verificationEmails";


export async function sendVerificationEmail(
    email: string,
    username: string,
    verifyCode : string
) : Promise<ApiResponse> {
    try {
        await resend.emails.send({
          from: "onboarding@resend.dev",
          to: email,
          subject: "True Message | Verification code",
          react: VerificationEmail({username, otp : verifyCode }),
        });
          return {
            success: true,
            message: "Verification sent successfully",
          };
    } catch (emailError) {
        console.log("Error sending verification Email", emailError)
        return { success : false, message : "Failed to send verification email"}
    }
}

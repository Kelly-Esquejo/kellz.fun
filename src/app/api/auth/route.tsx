//https://nextjs.org/docs/app/api-reference/file-conventions/route
import { google } from "googleapis";

const oauth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_REDIRECT_URI
);

export async function GET() {
    const url = oauth2Client.generateAuthUrl({
        access_type: "offline",
        scope: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    return new Response(JSON.stringify({ url }), {
        status: 200,
        headers: {
            "Content-Type": "application/json",
        },
    });
}

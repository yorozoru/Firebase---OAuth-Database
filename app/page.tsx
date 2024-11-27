"use server"
import OAuthButton from "@/components/OauthButton";
import { checkUserCookie } from "@/lib/persistance";

export default async function Home() {
  await checkUserCookie();
  
  return (
    <div className="flex items-center justify-center min-h-screen">
      <OAuthButton/>
    </div>
  );
}
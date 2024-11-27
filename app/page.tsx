"use server"
import OAuthButton from "@/components/OauthButton";
export default async function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <OAuthButton/>
    </div>
  );
}
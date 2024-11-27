"use server"
import OAuthButton from "@/components/OauthButton";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const cookieStore = cookies();
  const userId = cookieStore.get('userId')?.value;

  if (userId) {
    redirect('/results');
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <OAuthButton/>
    </div>
  );
}
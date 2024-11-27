import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import ClientPage from '@/components/ClientPage'

export default function Page() {
  const cookieStore = cookies()
  const userId = cookieStore.get('userId')?.value

  if (!userId) {
    redirect('/')
  }

  return <ClientPage userId={userId} />
}
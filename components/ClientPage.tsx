"use client"
import { useState, useEffect } from 'react'
import MessageList from '@/components/MessageList'
import MessagesForm from '@/components/MessagesForm'
import { readDB } from '@/lib/database_functions'

interface ClientPageProps {
  userId: string
}

export default function ClientPage({ userId }: ClientPageProps) {
  const [messages, setMessages] = useState<string[]>([])
  
  useEffect(() => {
    readDB(userId).then(data => setMessages(data))
  }, [userId])

  return (
    <div className='flex flex-col items-center justify-center gap-2'>
      <MessagesForm 
        cookie={{val: userId}} 
        messages={messages}
        setMessages={setMessages}
      />
      <MessageList messages={messages} />
    </div>
  )
}
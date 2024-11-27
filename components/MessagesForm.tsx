"use client"
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { updateDB } from '@/lib/database_functions';
import { MessagesFormProps } from '@/types';

export default function MessagesForm({
  cookie,
  messages,
  setMessages
}: MessagesFormProps) {
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !cookie.val) return;

    try {
      await updateDB(cookie.val, message);
      setMessages([...messages, message]);
      setMessage('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton 
        type="submit" 
        color="primary" 
        sx={{ p: '10px' }}
        disabled={!message.trim()}
      >
        <AddIcon />
      </IconButton>
    </Paper>
  );
}
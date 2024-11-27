import { List, ListItem, ListItemText, Paper } from '@mui/material';

export default function MessageList({
  messages
}: {
  messages: string[]
}) {
  return (
    <Paper>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>
            <ListItemText primary={message} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}
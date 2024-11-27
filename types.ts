export interface MessagesFormProps {
    cookie: { val?: string };
    messages: string[];
    setMessages: (messages: string[]) => void;
  }
  
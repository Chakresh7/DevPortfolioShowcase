import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  // Replace this with your WhatsApp number (with country code, no spaces or special chars)
  const WHATSAPP_NUMBER = '1234567890';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedMessage = `*New Portfolio Message*%0A%0A*From:* ${name}%0A*Message:* ${message}`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${formattedMessage}`;
    window.open(whatsappUrl, '_blank');
    setMessage('');
    setName('');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-80">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold">Send me a message</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full"
              />
            </div>
            <div>
              <Textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full min-h-[100px]"
              />
            </div>
            <Button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white">
              Send via WhatsApp
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 bg-green-500 hover:bg-green-600 text-white shadow-lg flex items-center justify-center"
        >
          <MessageCircle size={24} />
        </Button>
      )}
    </div>
  );
} 
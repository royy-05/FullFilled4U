import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  MessageSquareText, 
  User, 
  ArrowRight,
  ShieldCheck,
  Truck,
  Zap
} from 'lucide-react';
import { CONTACT_PHONE, CONTACT_EMAIL } from '../../utils/constants';

export default function Chatbot({ onOpenProposal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(true);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: '👋 Welcome to FULLFILLED 4 YOU! I am your AI Growth Assistant. How can I help scale your store today?',
      time: 'Just now'
    }
  ]);
  const messagesEndRef = useRef(null);

  // Auto-scroll to latest message
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  // Hide popup callout after 12 seconds automatically or when opened
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(false);
    }, 12000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenChat = () => {
    setIsOpen(true);
    setShowPopup(false);
  };

  const quickQuestions = [
    '📦 3PL Shipping Rates',
    '🛍️ Turnkey Shopify Setup',
    '🚀 Performance Meta Ads',
    '📍 Warehouse Locations'
  ];

  const getBotResponse = (userText) => {
    const text = userText.toLowerCase();

    if (text.includes('shipping') || text.includes('3pl') || text.includes('rate') || text.includes('pack')) {
      return `🚚 Our 3PL fulfillment provides same-day dispatch for orders received before 3:00 PM with 99.98% pick accuracy. We offer enterprise discounted rates with DHL, FedEx, and UPS! Would you like a custom shipping rate quote?`;
    }
    if (text.includes('shopify') || text.includes('store') || text.includes('setup') || text.includes('website')) {
      return `🛍️ We build high-converting, turnkey Shopify stores from scratch in 24–48 hours! This includes catalog setup, payment gateways, and automated 3PL order syncing.`;
    }
    if (text.includes('ad') || text.includes('meta') || text.includes('google') || text.includes('ugc') || text.includes('marketing')) {
      return `📈 Our performance marketing agency scales brands with viral UGC ad videos, Meta & Google Ads management targeting 4.8X+ average ROAS!`;
    }
    if (text.includes('location') || text.includes('where') || text.includes('surat') || text.includes('warehouse') || text.includes('address')) {
      return `📍 Our headquarters and primary 3PL fulfillment hub is located at Vesu, Surat, 395007, connecting your brand to 27,000+ Indian pincodes & global express routes.`;
    }
    if (text.includes('contact') || text.includes('phone') || text.includes('email') || text.includes('call')) {
      return `📞 You can reach our team directly at ${CONTACT_PHONE} or email us at ${CONTACT_EMAIL}. Monday–Saturday 9 AM – 9 PM IST!`;
    }

    return `✨ Thanks for your message! Our growth strategists can create a custom plan for your brand. Click "Request Strategy Proposal" below or ask me anything about 3PL rates, store setup, or digital ads!`;
  };

  const handleSend = (textToSend) => {
    const query = textToSend || inputMsg;
    if (!query.trim()) return;

    const userMsgObj = {
      id: Date.now(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsgObj]);
    if (!textToSend) setInputMsg('');

    // Generate Bot Reply
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: getBotResponse(query),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 font-sans">
      
      {/* 1. POPUP GREETING TOAST (Displayed next to trigger button) */}
      <AnimatePresence>
        {showPopup && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.9 }}
            transition={{ duration: 0.4 }}
            onClick={handleOpenChat}
            className="absolute bottom-16 left-0 mb-3 w-72 sm:w-80 p-4 rounded-2xl bg-white border border-[#E5E7EB] shadow-2xl shadow-[#282734]/15 cursor-pointer font-sans group"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E] flex items-center justify-center shrink-0">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#282734] font-sans flex items-center gap-1.5">
                    <span>Growth AI Assistant</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="text-[10px] text-[#6B7280] font-medium">Replies Instantly</div>
                </div>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(false);
                }}
                className="text-[#9CA3AF] hover:text-[#282734] p-1 rounded-lg transition-colors cursor-pointer"
                title="Dismiss"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="mt-2.5 text-xs text-[#4B5563] font-medium leading-relaxed font-sans">
              👋 Hi there! Want custom 3PL shipping rates or store setup details? Click to chat!
            </p>

            <div className="mt-3 flex items-center justify-between text-[11px] font-extrabold text-[#EC2D2E] pt-2 border-t border-[#E5E7EB]">
              <span>Ask a question</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. CHAT MODAL WINDOW */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="absolute bottom-16 left-0 mb-3 w-[340px] sm:w-[380px] h-[520px] rounded-3xl bg-white border border-[#E5E7EB] shadow-2xl flex flex-col overflow-hidden font-sans"
          >
            {/* Modal Header */}
            <div className="bg-[#282734] text-white p-4 sm:p-5 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-2xl bg-[#EC2D2E] text-white flex items-center justify-center font-bold shadow-md">
                  <Bot className="w-5 h-5" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-emerald-400 border-2 border-[#282734]" />
                </div>
                <div>
                  <div className="text-sm font-extrabold flex items-center gap-2">
                    <span>FULLFILLED 4 YOU AI</span>
                    <Sparkles className="w-3.5 h-3.5 text-[#EC2D2E]" />
                  </div>
                  <div className="text-[11px] text-[#9CA3AF] font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>Online 24/7 • Instant Answers</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-[#F8F9FC] font-sans">
              
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex items-start gap-2.5 ${
                    msg.sender === 'user' ? 'flex-row-reverse' : ''
                  }`}
                >
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center shrink-0 text-xs font-bold ${
                      msg.sender === 'user'
                        ? 'bg-[#282734] text-white'
                        : 'bg-[#EC2D2E]/10 border border-[#EC2D2E]/20 text-[#EC2D2E]'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-3.5 h-3.5" /> : <Bot className="w-3.5 h-3.5" />}
                  </div>

                  <div className={`max-w-[80%] space-y-1 ${msg.sender === 'user' ? 'text-right' : ''}`}>
                    <div
                      className={`p-3.5 rounded-2xl text-xs font-medium leading-relaxed shadow-sm font-sans ${
                        msg.sender === 'user'
                          ? 'bg-[#EC2D2E] text-white rounded-tr-none'
                          : 'bg-white border border-[#E5E7EB] text-[#282734] rounded-tl-none'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="text-[9px] text-[#9CA3AF] font-bold px-1">{msg.time}</div>
                  </div>
                </div>
              ))}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggested Questions Chips */}
            <div className="p-3 bg-white border-t border-[#E5E7EB] shrink-0">
              <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#6B7280] mb-2 font-sans">
                Suggested Topics:
              </div>
              <div className="flex flex-wrap gap-1.5">
                {quickQuestions.map((q, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSend(q.replace(/^[^\s]+\s*/, ''))}
                    className="px-2.5 py-1 rounded-xl bg-[#F8F9FC] hover:bg-[#EC2D2E] hover:text-white border border-[#E5E7EB] text-[11px] font-extrabold text-[#282734] transition-all cursor-pointer font-sans"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>

            {/* Input Form Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white border-t border-[#E5E7EB] flex items-center gap-2 shrink-0"
            >
              <input
                type="text"
                placeholder="Ask about 3PL rates, store setup..."
                value={inputMsg}
                onChange={(e) => setInputMsg(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#F8F9FC] border border-[#E5E7EB] text-xs text-[#282734] font-medium focus:outline-none focus:border-[#EC2D2E] focus:bg-white transition-all font-sans"
              />
              <button
                type="submit"
                disabled={!inputMsg.trim()}
                className="p-2.5 rounded-xl bg-[#FD2626] hover:bg-[#D91E1E] disabled:opacity-40 text-white transition-all shadow-none hover:scale-105 cursor-pointer"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            {/* Request Strategy Proposal Footer Action */}
            {onOpenProposal && (
              <div className="px-3 pb-3 bg-white text-center">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenProposal();
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#FD2626] hover:bg-[#D91E1E] text-white text-xs font-extrabold flex items-center justify-center gap-1.5 transition-all shadow-none hover:scale-[1.02] cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5 text-white" />
                  <span>Request Full Strategy Proposal</span>
                </button>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

      {/* 3. MAIN FLOATING CHATBOT TRIGGER BUTTON (Bottom Left) */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setShowPopup(false);
        }}
        title="Open AI Growth Assistant"
        aria-label="Open AI Growth Assistant"
        className="relative w-14 h-14 rounded-full bg-[#282734] hover:bg-[#EC2D2E] text-white shadow-2xl shadow-[#282734]/40 flex items-center justify-center transition-colors cursor-pointer border-2 border-white group"
      >
        {/* Active Online Indicator */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white" />

        {isOpen ? (
          <X className="w-6 h-6 stroke-[2.2]" />
        ) : (
          <MessageSquareText className="w-6 h-6 group-hover:scale-110 transition-transform" />
        )}
      </motion.button>

    </div>
  );
}

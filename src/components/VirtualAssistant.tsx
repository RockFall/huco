"use client";

import { useState, useRef, useEffect } from "react";

const genericResponses = [
  "Excelente pergunta. Acreditamos que você tem potencial. Precisa de mais alguma coisa?",
  "Entendido. Continue assim, você está no caminho certo. Posso ajudar em algo mais?",
  "Obrigado por compartilhar. Lembre-se: todo dia é uma oportunidade. Mais alguma dúvida?",
  "Interessante. Na Hu.Co, valorizamos pessoas como você. Precisa de mais alguma informação?",
  "Anotado. O sucesso é uma jornada, não um destino. Algo mais em que posso ajudar?",
  "Perfeito. Quem busca, encontra. Posso auxiliar em mais alguma coisa?",
  "Compreendido. Cada passo conta. Há algo mais que gostaria de saber?",
  "Ótimo ponto. O futuro pertence aos que se preparam. Mais alguma questão?",
  "Recebido. Acredite no processo. Precisa de mais alguma ajuda?",
  "Certo. Grandes conquistas começam com pequenas ações. Posso ajudar em algo mais?",
  "Entendi perfeitamente. O trabalho dignifica. Algo mais?",
  "Muito bem. Persistência é a chave. Tem mais alguma pergunta?",
  "Notado. Você é capaz de grandes coisas. Mais alguma dúvida?",
  "Claro. Juntos somos mais fortes. Precisa de mais alguma coisa?",
  "Absolutamente. O esforço nunca é em vão. Posso ajudar em algo mais?",
];

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  isTyping?: boolean;
}

export default function VirtualAssistant() {
  const [isVisible, setIsVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: "Olá. Sou o assistente virtual da Hu.Co. Como posso ajudar?",
      isUser: false,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getRandomResponse = () => {
    return genericResponses[Math.floor(Math.random() * genericResponses.length)];
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate typing delay (1.5-3 seconds)
    const typingDelay = 1500 + Math.random() * 1500;

    setTimeout(() => {
      setIsTyping(false);
      const botMessage: Message = {
        id: Date.now() + 1,
        text: getRandomResponse(),
        isUser: false,
      };
      setMessages((prev) => [...prev, botMessage]);
    }, typingDelay);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-2xl w-[calc(100vw-48px)] sm:w-96 max-h-[70vh] sm:max-h-[500px] flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#0a0a0a] text-white px-5 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0a0a0a] font-black text-sm">Hu</span>
              </div>
              <div>
                <p className="font-bold text-sm">Assistente Hu.Co</p>
                <p className="text-xs text-gray-400">Sempre disponível</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors p-1"
              aria-label="Fechar chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm ${
                    message.isUser
                      ? "bg-[#0a0a0a] text-white rounded-br-md"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-md"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 px-4 py-3 rounded-2xl rounded-bl-md">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }}></span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-200">
            <div className="flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Digite sua mensagem..."
                className="flex-1 px-4 py-3 bg-gray-100 border-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#0a0a0a] transition-all"
                disabled={isTyping}
              />
              <button
                onClick={handleSend}
                disabled={!inputValue.trim() || isTyping}
                className="w-10 h-10 bg-[#0a0a0a] text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Enviar mensagem"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      {!isOpen && (
        <div className="relative">
          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute -top-1 -right-1 w-5 h-5 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center z-10 transition-colors shadow-sm"
            aria-label="Fechar assistente"
          >
            <svg className="w-3 h-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Main button */}
          <button
            onClick={() => setIsOpen(true)}
            className="w-14 h-14 sm:w-16 sm:h-16 bg-[#0a0a0a] text-white rounded-full shadow-lg hover:bg-gray-800 transition-all hover:scale-105 flex items-center justify-center group"
            aria-label="Abrir assistente virtual"
          >
            <div className="flex flex-col items-center">
              <span className="font-black text-sm sm:text-base">Hu</span>
              <span className="text-[8px] sm:text-[9px] text-gray-400 group-hover:text-gray-300">Ajuda</span>
            </div>
          </button>

          {/* Tooltip */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-[#0a0a0a] text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
              Precisa de ajuda?
              <div className="absolute top-full right-4 w-2 h-2 bg-[#0a0a0a] rotate-45 -translate-y-1"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

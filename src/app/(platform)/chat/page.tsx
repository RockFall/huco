"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";
import Image from "next/image";

const conversations = [
  {
    id: 1,
    name: "Helena Costa",
    avatar: "HC",
    lastMessage: "Perfeito, obrigada pela atualização!",
    time: "10:45",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Time de Desenvolvimento",
    avatar: "TD",
    isGroup: true,
    lastMessage: "Lucas: Deploy finalizado 🚀",
    time: "09:30",
    unread: 3,
    online: false,
  },
  {
    id: 3,
    name: "Ricardo Mendes",
    avatar: "RM",
    lastMessage: "Vamos discutir isso na 1:1",
    time: "Ontem",
    unread: 0,
    online: true,
  },
  {
    id: 4,
    name: "Amanda Ribeiro",
    avatar: "AR",
    lastMessage: "Você: Enviei o arquivo",
    time: "Ontem",
    unread: 0,
    online: false,
  },
  {
    id: 5,
    name: "RH Hu.Co",
    avatar: "RH",
    isGroup: true,
    lastMessage: "Juliana: Lembrete sobre a pesquisa",
    time: "Seg",
    unread: 0,
    online: false,
  },
];

const messages = [
  {
    id: 1,
    sender: "Helena Costa",
    content: "Oi! Você viu o email que mandei sobre o projeto Alpha?",
    time: "10:30",
    isMe: false,
  },
  {
    id: 2,
    sender: "Você",
    content: "Oi Helena! Vi sim, já estou revisando os documentos.",
    time: "10:32",
    isMe: true,
  },
  {
    id: 3,
    sender: "Helena Costa",
    content: "Ótimo! Preciso que você valide os números do Q3 antes da reunião de amanhã.",
    time: "10:33",
    isMe: false,
  },
  {
    id: 4,
    sender: "Você",
    content: "Pode deixar, vou priorizar isso. Deve conseguir terminar até o final do dia.",
    time: "10:35",
    isMe: true,
  },
  {
    id: 5,
    sender: "Helena Costa",
    content: "Perfeito, obrigada pela atualização!",
    time: "10:45",
    isMe: false,
  },
];

export default function ChatPage() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [messageInput, setMessageInput] = useState("");
  const [showNewChat, setShowNewChat] = useState(false);

  const currentConversation = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopBar 
        title="Chat"
        showSearch={false}
        actions={
          <button
            onClick={() => setShowNewChat(true)}
            className="flex items-center gap-2 bg-[#1e1e1e] text-white px-4 py-2 rounded text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nova conversa
          </button>
        }
      />

      <div className="flex flex-1 overflow-hidden">
        {/* Conversations List */}
        <div className="w-80 border-r border-gray-200 flex flex-col">
          {/* Search */}
          <div className="p-4 border-b border-gray-100">
            <div className="relative">
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Buscar conversas..."
                className="w-full pl-10 pr-4 py-2 bg-gray-100 border-0 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-300"
              />
            </div>
          </div>

          {/* Conversations */}
          <div className="flex-1 overflow-y-auto">
            {conversations.map((conversation) => (
              <button
                key={conversation.id}
                onClick={() => setSelectedConversation(conversation.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                  selectedConversation === conversation.id
                    ? "bg-gray-100"
                    : "hover:bg-gray-50"
                }`}
              >
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                    conversation.isGroup ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-blue-500 to-cyan-500"
                  }`}>
                    {conversation.avatar}
                  </div>
                  {conversation.online && !conversation.isGroup && (
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className={`font-medium truncate ${conversation.unread > 0 ? "text-gray-900" : "text-gray-700"}`}>
                      {conversation.name}
                    </p>
                    <span className={`text-xs ${conversation.unread > 0 ? "text-blue-600 font-semibold" : "text-gray-400"}`}>
                      {conversation.time}
                    </span>
                  </div>
                  <div className="flex items-center justify-between mt-0.5">
                    <p className={`text-sm truncate ${conversation.unread > 0 ? "text-gray-700" : "text-gray-500"}`}>
                      {conversation.lastMessage}
                    </p>
                    {conversation.unread > 0 && (
                      <span className="bg-blue-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                        {conversation.unread}
                      </span>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Chat Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                currentConversation?.isGroup ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-blue-500 to-cyan-500"
              }`}>
                {currentConversation?.avatar}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{currentConversation?.name}</p>
                <p className="text-xs text-gray-500">
                  {currentConversation?.online ? "Online" : "Offline"}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Ligar">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Vídeo">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
              <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors" title="Mais">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50">
            <div className="text-center">
              <span className="text-xs text-gray-400 bg-white px-3 py-1 rounded-full shadow-sm">Hoje</span>
            </div>
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isMe ? "justify-end" : "justify-start"}`}
              >
                <div className={`max-w-[70%] ${message.isMe ? "order-2" : ""}`}>
                  {!message.isMe && (
                    <p className="text-xs text-gray-500 mb-1 ml-1">{message.sender}</p>
                  )}
                  <div
                    className={`px-4 py-2.5 rounded-2xl ${
                      message.isMe
                        ? "bg-blue-600 text-white rounded-br-md"
                        : "bg-white text-gray-800 shadow-sm rounded-bl-md"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <p className={`text-xs text-gray-400 mt-1 ${message.isMe ? "text-right mr-1" : "ml-1"}`}>
                    {message.time}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex items-end gap-3">
              <div className="flex items-center gap-1">
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                  </svg>
                </button>
                <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={messageInput}
                  onChange={(e) => setMessageInput(e.target.value)}
                  placeholder="Digite uma mensagem..."
                  className="w-full px-4 py-3 bg-gray-100 border-0 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                />
              </div>
              <button
                className={`p-3 rounded-full transition-colors ${
                  messageInput.trim()
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "bg-gray-200 text-gray-400"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";
import Image from "next/image";

const upcomingMeetings = [
  {
    id: 1,
    title: "Daily Standup",
    time: "09:00 - 09:15",
    date: "Hoje",
    organizer: "Ricardo Mendes",
    attendees: ["Helena Costa", "Lucas Ferreira", "Amanda Ribeiro", "Fernando Oliveira"],
    isRecurring: true,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Review de Projeto Alpha",
    time: "11:00 - 12:00",
    date: "Hoje",
    organizer: "Helena Costa",
    attendees: ["Ricardo Mendes", "Você Silva"],
    isRecurring: false,
    status: "upcoming",
  },
  {
    id: 3,
    title: "1:1 com Gestor",
    time: "14:30 - 15:00",
    date: "Hoje",
    organizer: "Ricardo Mendes",
    attendees: ["Você Silva"],
    isRecurring: true,
    status: "upcoming",
  },
  {
    id: 4,
    title: "Planning Sprint 24",
    time: "10:00 - 11:30",
    date: "Amanhã",
    organizer: "Lucas Ferreira",
    attendees: ["Time de Desenvolvimento", "+5"],
    isRecurring: false,
    status: "upcoming",
  },
  {
    id: 5,
    title: "Apresentação para Cliente",
    time: "15:00 - 16:00",
    date: "Amanhã",
    organizer: "Você Silva",
    attendees: ["Helena Costa", "Amanda Ribeiro", "Cliente Externo"],
    isRecurring: false,
    status: "upcoming",
  },
];

const pastMeetings = [
  {
    id: 101,
    title: "Retrospectiva Sprint 23",
    time: "14:00 - 15:00",
    date: "Ontem",
    organizer: "Lucas Ferreira",
    hasRecording: true,
  },
  {
    id: 102,
    title: "Treinamento: Novo Sistema",
    time: "10:00 - 11:30",
    date: "Segunda",
    organizer: "RH Hu.Co",
    hasRecording: true,
  },
];

export default function ReunioesPage() {
  const [showNewMeeting, setShowNewMeeting] = useState(false);
  const [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming");

  return (
    <div className="flex flex-col h-screen bg-[#f5f5f5]">
      <TopBar 
        title="Reuniões"
        actions={
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#464775] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#5b5c8a] transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Entrar com ID
            </button>
            <button
              onClick={() => setShowNewMeeting(true)}
              className="flex items-center gap-2 bg-[#6264a7] text-white px-4 py-2 rounded text-sm font-medium hover:bg-[#7375b3] transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Nova reunião
            </button>
          </div>
        }
      />

      <div className="flex-1 overflow-auto">
        <div className="max-w-5xl mx-auto p-6">
          {/* Quick Actions */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <button className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 bg-[#6264a7] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Reunião instantânea</h3>
              <p className="text-sm text-gray-500">Iniciar uma reunião agora</p>
            </button>

            <button className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 bg-[#6264a7] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Agendar reunião</h3>
              <p className="text-sm text-gray-500">Planejar para depois</p>
            </button>

            <button className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-all text-left group">
              <div className="w-12 h-12 bg-[#6264a7] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Compartilhar link</h3>
              <p className="text-sm text-gray-500">Convidar participantes</p>
            </button>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-1 mb-6 bg-white rounded-lg p-1 w-fit border border-gray-200">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "upcoming"
                  ? "bg-[#6264a7] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Próximas
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === "past"
                  ? "bg-[#6264a7] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              Anteriores
            </button>
          </div>

          {activeTab === "upcoming" && (
            <div className="space-y-4">
              {/* Today */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Hoje</h3>
                <div className="space-y-3">
                  {upcomingMeetings.filter(m => m.date === "Hoje").map((meeting) => (
                    <div key={meeting.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-[#6264a7] rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold text-gray-900">{meeting.title}</h4>
                              {meeting.isRecurring && (
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                              )}
                            </div>
                            <p className="text-sm text-gray-500">{meeting.time}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-400">Organizador: {meeting.organizer}</span>
                              <span className="text-xs text-gray-300">•</span>
                              <span className="text-xs text-gray-400">{meeting.attendees.length + 1} participantes</span>
                            </div>
                          </div>
                        </div>
                        <button className="bg-[#6264a7] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#7375b3] transition-colors">
                          Entrar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tomorrow */}
              <div>
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">Amanhã</h3>
                <div className="space-y-3">
                  {upcomingMeetings.filter(m => m.date === "Amanhã").map((meeting) => (
                    <div key={meeting.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{meeting.title}</h4>
                            <p className="text-sm text-gray-500">{meeting.time}</p>
                            <div className="flex items-center gap-2 mt-2">
                              <span className="text-xs text-gray-400">Organizador: {meeting.organizer}</span>
                            </div>
                          </div>
                        </div>
                        <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                          Ver detalhes
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "past" && (
            <div className="space-y-3">
              {pastMeetings.map((meeting) => (
                <div key={meeting.id} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{meeting.title}</h4>
                        <p className="text-sm text-gray-500">{meeting.date} · {meeting.time}</p>
                        <p className="text-xs text-gray-400 mt-1">Organizador: {meeting.organizer}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {meeting.hasRecording && (
                        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm font-medium hover:bg-gray-50 transition-colors">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          Ver gravação
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* New Meeting Modal */}
      {showNewMeeting && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Nova reunião</h2>
              <button onClick={() => setShowNewMeeting(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Título da reunião</label>
                <input
                  type="text"
                  placeholder="Adicionar título"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6264a7] focus:border-transparent"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Data</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6264a7] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Horário</label>
                  <input
                    type="time"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6264a7] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Participantes</label>
                <input
                  type="text"
                  placeholder="Adicionar participantes"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6264a7] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Descrição (opcional)</label>
                <textarea
                  rows={3}
                  placeholder="Adicionar detalhes da reunião"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#6264a7] focus:border-transparent resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button onClick={() => setShowNewMeeting(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                Cancelar
              </button>
              <button className="px-4 py-2 bg-[#6264a7] text-white text-sm font-medium rounded hover:bg-[#7375b3] transition-colors">
                Criar reunião
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

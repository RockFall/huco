"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";

const events = [
  { id: 1, title: "Daily Standup", time: "09:00", duration: 15, color: "bg-purple-500", day: 4 },
  { id: 2, title: "Review de Projeto", time: "11:00", duration: 60, color: "bg-blue-500", day: 4 },
  { id: 3, title: "1:1 com Gestor", time: "14:30", duration: 30, color: "bg-green-500", day: 4 },
  { id: 4, title: "Planning Sprint", time: "10:00", duration: 90, color: "bg-orange-500", day: 5 },
  { id: 5, title: "Apresentação Cliente", time: "15:00", duration: 60, color: "bg-red-500", day: 5 },
  { id: 6, title: "All Hands", time: "16:00", duration: 60, color: "bg-indigo-500", day: 7 },
  { id: 7, title: "Retrospectiva", time: "14:00", duration: 60, color: "bg-pink-500", day: 8 },
];

const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];
const hours = Array.from({ length: 12 }, (_, i) => i + 7);

export default function CalendarioPage() {
  const [view, setView] = useState<"week" | "month" | "day">("week");
  const [showNewEvent, setShowNewEvent] = useState(false);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  
  const getWeekDates = () => {
    const dates = [];
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDay - currentDate.getDay());
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      dates.push(date.getDate());
    }
    return dates;
  };

  const weekDates = getWeekDates();

  return (
    <div className="flex flex-col h-screen bg-white">
      <TopBar 
        title="Calendário"
        actions={
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-gray-100 rounded-lg p-1">
              {(["day", "week", "month"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`px-3 py-1 text-sm font-medium rounded transition-colors ${
                    view === v
                      ? "bg-white text-gray-900 shadow-sm"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {v === "day" ? "Dia" : v === "week" ? "Semana" : "Mês"}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowNewEvent(true)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Novo evento
            </button>
          </div>
        }
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Calendar Navigation */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
              Hoje
            </button>
          </div>
          <h2 className="text-xl font-semibold text-gray-900">
            Outubro 2024
          </h2>
          <div className="w-32"></div>
        </div>

        {/* Week View */}
        <div className="flex-1 overflow-auto">
          <div className="min-w-[800px]">
            {/* Days Header */}
            <div className="grid grid-cols-8 border-b border-gray-200 sticky top-0 bg-white z-10">
              <div className="w-16"></div>
              {weekDays.map((day, index) => (
                <div
                  key={day}
                  className={`py-3 text-center border-l border-gray-100 ${
                    weekDates[index] === currentDay ? "bg-blue-50" : ""
                  }`}
                >
                  <p className="text-xs text-gray-500 uppercase">{day}</p>
                  <p className={`text-2xl font-semibold ${
                    weekDates[index] === currentDay ? "text-blue-600" : "text-gray-900"
                  }`}>
                    {weekDates[index]}
                  </p>
                </div>
              ))}
            </div>

            {/* Time Grid */}
            <div className="relative">
              {hours.map((hour) => (
                <div key={hour} className="grid grid-cols-8 border-b border-gray-100" style={{ height: "60px" }}>
                  <div className="w-16 flex items-start justify-end pr-2 pt-1">
                    <span className="text-xs text-gray-400">
                      {hour.toString().padStart(2, "0")}:00
                    </span>
                  </div>
                  {weekDays.map((_, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`border-l border-gray-100 ${
                        weekDates[dayIndex] === currentDay ? "bg-blue-50/50" : ""
                      }`}
                    ></div>
                  ))}
                </div>
              ))}

              {/* Events */}
              {events.map((event) => {
                const dayIndex = event.day - weekDates[0];
                if (dayIndex < 0 || dayIndex > 6) return null;
                
                const [startHour, startMin] = event.time.split(":").map(Number);
                const top = (startHour - 7) * 60 + startMin;
                const height = event.duration;
                const left = `calc(${(dayIndex + 1) * 12.5}% + 2px)`;
                
                return (
                  <div
                    key={event.id}
                    className={`absolute ${event.color} text-white text-xs rounded px-2 py-1 cursor-pointer hover:opacity-90 transition-opacity overflow-hidden`}
                    style={{
                      top: `${top}px`,
                      height: `${height}px`,
                      left,
                      width: "calc(12.5% - 4px)",
                    }}
                  >
                    <p className="font-medium truncate">{event.title}</p>
                    <p className="opacity-80">{event.time}</p>
                  </div>
                );
              })}

              {/* Current Time Indicator */}
              <div
                className="absolute left-16 right-0 border-t-2 border-red-500 z-20"
                style={{ top: `${(currentDate.getHours() - 7) * 60 + currentDate.getMinutes()}px` }}
              >
                <div className="w-3 h-3 bg-red-500 rounded-full -mt-1.5 -ml-1.5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Event Modal */}
      {showNewEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-4">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <h2 className="text-lg font-semibold">Novo evento</h2>
              <button onClick={() => setShowNewEvent(false)} className="text-gray-400 hover:text-gray-600">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Adicionar título"
                  className="w-full px-0 py-2 text-xl border-0 border-b border-gray-200 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Data</label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Horário</label>
                  <div className="flex items-center gap-2">
                    <input
                      type="time"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <span className="text-gray-400">-</span>
                    <input
                      type="time"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Convidados</label>
                <input
                  type="text"
                  placeholder="Adicionar convidados"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Adicionar link de reunião</label>
                <button className="flex items-center gap-2 text-blue-600 text-sm hover:underline">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                  Adicionar reunião Hu.Co
                </button>
              </div>
              <div>
                <label className="block text-sm text-gray-500 mb-1">Descrição</label>
                <textarea
                  rows={3}
                  placeholder="Adicionar descrição"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                ></textarea>
              </div>
            </div>
            <div className="flex items-center justify-end gap-3 px-6 py-4 border-t border-gray-200 bg-gray-50">
              <button onClick={() => setShowNewEvent(false)} className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded transition-colors">
                Cancelar
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition-colors">
                Salvar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

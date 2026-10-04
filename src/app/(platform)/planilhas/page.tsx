"use client";

import { useState } from "react";
import TopBar from "@/components/platform/TopBar";

const spreadsheets = [
  { id: 1, name: "Orçamento Q4 2024", lastModified: "Há 2 horas", owner: "Você", shared: true },
  { id: 2, name: "Controle de Custos - Projeto Alpha", lastModified: "Ontem", owner: "Helena Costa", shared: true },
  { id: 3, name: "Lista de Fornecedores", lastModified: "3 dias atrás", owner: "Você", shared: false },
  { id: 4, name: "Relatório Mensal - Outubro", lastModified: "1 semana atrás", owner: "Fernando Oliveira", shared: true },
  { id: 5, name: "Métricas de Vendas", lastModified: "2 semanas atrás", owner: "Rafael Silva", shared: true },
];

const sampleData = [
  ["", "A", "B", "C", "D", "E", "F", "G", "H"],
  ["1", "Item", "Categoria", "Jan", "Fev", "Mar", "Abr", "Total", "Status"],
  ["2", "Salários", "Pessoal", "150000", "150000", "155000", "155000", "610000", "✓"],
  ["3", "Aluguel", "Fixo", "25000", "25000", "25000", "25000", "100000", "✓"],
  ["4", "Software", "TI", "8500", "8500", "9200", "9200", "35400", "✓"],
  ["5", "Marketing", "Variável", "15000", "18000", "22000", "20000", "75000", "!"],
  ["6", "Equipamentos", "TI", "5000", "0", "12000", "3000", "20000", "✓"],
  ["7", "Viagens", "Variável", "8000", "12000", "6000", "9000", "35000", "✓"],
  ["8", "Treinamentos", "Pessoal", "3000", "5000", "2000", "4000", "14000", "✓"],
  ["9", "", "", "", "", "", "", "", ""],
  ["10", "Total", "", "214500", "218500", "231200", "225200", "889400", ""],
];

export default function PlanilhasPage() {
  const [selectedCell, setSelectedCell] = useState<string | null>(null);
  const [showNewSheet, setShowNewSheet] = useState(false);
  const [activeSheet, setActiveSheet] = useState<number | null>(null);

  if (activeSheet !== null) {
    return (
      <div className="flex flex-col h-screen bg-white">
        {/* Spreadsheet Header */}
        <div className="border-b border-gray-200">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex items-center gap-4">
              <button onClick={() => setActiveSheet(null)} className="text-gray-500 hover:text-gray-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <input
                    type="text"
                    defaultValue={spreadsheets[activeSheet - 1]?.name || "Nova planilha"}
                    className="font-medium text-lg border-0 focus:outline-none focus:ring-0 p-0"
                  />
                  <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span>Planilhas Hu.Co</span>
                    <span>Salvo automaticamente</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="flex items-center gap-2 px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
                Compartilhar
              </button>
            </div>
          </div>

          {/* Toolbar */}
          <div className="flex items-center gap-1 px-2 py-1 border-t border-gray-100 bg-gray-50 overflow-x-auto">
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Desfazer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>
            </button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Refazer">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 10h-10a8 8 0 00-8 8v2M21 10l-6 6m6-6l-6-6" />
              </svg>
            </button>
            <div className="w-px h-5 bg-gray-300 mx-1"></div>
            <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white">
              <option>Arial</option>
              <option>Times New Roman</option>
              <option>Roboto</option>
            </select>
            <select className="text-sm border border-gray-300 rounded px-2 py-1 bg-white w-16">
              <option>10</option>
              <option>11</option>
              <option>12</option>
              <option>14</option>
            </select>
            <div className="w-px h-5 bg-gray-300 mx-1"></div>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded font-bold" title="Negrito">B</button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded italic" title="Itálico">I</button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded underline" title="Sublinhado">U</button>
            <div className="w-px h-5 bg-gray-300 mx-1"></div>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Cor do texto">
              <span className="border-b-2 border-black">A</span>
            </button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Cor de fundo">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"/>
              </svg>
            </button>
            <div className="w-px h-5 bg-gray-300 mx-1"></div>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Alinhar à esquerda">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h10M4 18h14" />
              </svg>
            </button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Centralizar">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="w-px h-5 bg-gray-300 mx-1"></div>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Mesclar células">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Formatar como moeda">
              R$
            </button>
            <button className="p-1.5 text-gray-600 hover:bg-gray-200 rounded" title="Formatar como porcentagem">
              %
            </button>
          </div>

          {/* Formula bar */}
          <div className="flex items-center gap-2 px-2 py-1 border-t border-gray-200 bg-white">
            <span className="text-sm text-gray-500 w-12 text-center font-mono bg-gray-100 py-1 rounded">{selectedCell || "A1"}</span>
            <span className="text-gray-300">|</span>
            <span className="text-sm text-gray-500 italic">fx</span>
            <input
              type="text"
              className="flex-1 text-sm border-0 focus:outline-none focus:ring-0"
              placeholder="Insira uma fórmula ou valor"
            />
          </div>
        </div>

        {/* Spreadsheet Grid */}
        <div className="flex-1 overflow-auto">
          <table className="w-full border-collapse">
            <tbody>
              {sampleData.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => {
                    const isHeader = rowIndex === 0 || cellIndex === 0;
                    const isFirstRow = rowIndex === 1;
                    const isLastRow = rowIndex === sampleData.length - 1;
                    const cellId = `${String.fromCharCode(64 + cellIndex)}${rowIndex}`;
                    
                    return (
                      <td
                        key={cellIndex}
                        onClick={() => !isHeader && setSelectedCell(cellId)}
                        className={`border border-gray-200 text-sm ${
                          isHeader
                            ? "bg-gray-100 text-gray-600 font-medium text-center"
                            : selectedCell === cellId
                            ? "bg-blue-50 ring-2 ring-blue-500 ring-inset"
                            : "bg-white hover:bg-gray-50"
                        } ${
                          isFirstRow && !isHeader ? "bg-gray-50 font-semibold" : ""
                        } ${
                          isLastRow && !isHeader && cell ? "font-bold bg-yellow-50" : ""
                        } ${
                          cellIndex === 0 ? "w-10" : cellIndex === 1 ? "w-32" : "w-24"
                        } h-7 px-2 cursor-pointer`}
                      >
                        {cellIndex > 2 && cellIndex < 8 && rowIndex > 1 && cell && !isNaN(Number(cell))
                          ? Number(cell).toLocaleString("pt-BR")
                          : cell}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Sheet tabs */}
        <div className="flex items-center gap-1 px-2 py-1 border-t border-gray-200 bg-gray-50">
          <button className="flex items-center gap-1 px-3 py-1 bg-white border border-gray-300 rounded text-sm">
            Planilha1
          </button>
          <button className="px-2 py-1 text-gray-500 hover:bg-gray-200 rounded text-sm">+</button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen">
      <TopBar 
        title="Planilhas" 
        actions={
          <button
            onClick={() => setShowNewSheet(true)}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded text-sm font-medium hover:bg-green-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Nova planilha
          </button>
        }
      />

      <div className="flex-1 overflow-auto p-6">
        {/* Templates */}
        <div className="mb-8">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Iniciar nova planilha</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Em branco", color: "bg-white border-2 border-dashed border-gray-300" },
              { name: "Orçamento", color: "bg-green-100" },
              { name: "Lista de tarefas", color: "bg-blue-100" },
              { name: "Cronograma", color: "bg-purple-100" },
              { name: "Controle de estoque", color: "bg-yellow-100" },
              { name: "Relatório mensal", color: "bg-red-100" },
            ].map((template) => (
              <button
                key={template.name}
                onClick={() => setActiveSheet(1)}
                className={`${template.color} rounded-lg p-4 h-28 flex flex-col items-center justify-center hover:shadow-md transition-all group`}
              >
                <svg className="w-8 h-8 text-gray-400 group-hover:text-gray-600 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span className="text-sm text-gray-600">{template.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Spreadsheets */}
        <div>
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">Planilhas recentes</h3>
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Nome</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Proprietário</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Última modificação</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 w-20"></th>
                </tr>
              </thead>
              <tbody>
                {spreadsheets.map((sheet) => (
                  <tr
                    key={sheet.id}
                    onClick={() => setActiveSheet(sheet.id)}
                    className="border-b border-gray-100 hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center flex-shrink-0">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{sheet.name}</p>
                          {sheet.shared && (
                            <span className="text-xs text-gray-400">Compartilhada</span>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{sheet.owner}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{sheet.lastModified}</td>
                    <td className="px-6 py-4">
                      <button className="p-1 text-gray-400 hover:text-gray-600 rounded hover:bg-gray-100">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

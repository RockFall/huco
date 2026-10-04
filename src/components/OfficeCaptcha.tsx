"use client";

import { useState } from "react";
import Image from "next/image";

type CaptchaType = "chairs" | "monitors" | "mugs" | "meetings" | "keyboards" | "plants";

interface CaptchaConfig {
  title: string;
  subtitle: string;
  correctIndices: number[];
  images: string[];
}

const captchaConfigs: Record<CaptchaType, CaptchaConfig> = {
  chairs: {
    title: "Selecione todas as imagens com",
    subtitle: "cadeiras de escritório vazias",
    correctIndices: [0, 2, 5, 7],
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%234b5563' x='35' y='20' width='30' height='25' rx='3'/%3E%3Crect fill='%236b7280' x='40' y='45' width='20' height='15'/%3E%3Crect fill='%23374151' x='45' y='60' width='10' height='25'/%3E%3Ccircle fill='%23374151' cx='38' cy='88' r='5'/%3E%3Ccircle fill='%23374151' cx='62' cy='88' r='5'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%234b5563' x='30' y='20' width='40' height='30' rx='3'/%3E%3Ccircle fill='%23fbbf24' cx='50' cy='35' r='10'/%3E%3Crect fill='%236b7280' x='35' y='50' width='30' height='20'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%23374151' x='30' y='15' width='40' height='30' rx='5'/%3E%3Crect fill='%234b5563' x='38' y='45' width='24' height='18'/%3E%3Crect fill='%231f2937' x='42' y='63' width='16' height='22'/%3E%3Ccircle fill='%231f2937' cx='35' cy='90' r='6'/%3E%3Ccircle fill='%231f2937' cx='65' cy='90' r='6'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%23d1d5db' x='20' y='70' width='60' height='8'/%3E%3Crect fill='%239ca3af' x='25' y='40' width='50' height='30'/%3E%3Crect fill='%2360a5fa' x='30' y='45' width='40' height='20'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Cellipse fill='%2322c55e' cx='50' cy='60' rx='25' ry='30'/%3E%3Crect fill='%23854d0e' x='47' y='75' width='6' height='20'/%3E%3Crect fill='%236b7280' x='35' y='90' width='30' height='8' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%23ef4444' x='32' y='18' width='36' height='28' rx='4'/%3E%3Crect fill='%23dc2626' x='38' y='46' width='24' height='16'/%3E%3Crect fill='%23b91c1c' x='43' y='62' width='14' height='24'/%3E%3Ccircle fill='%237f1d1d' cx='36' cy='90' r='5'/%3E%3Ccircle fill='%237f1d1d' cx='64' cy='90' r='5'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%23fbbf24' x='30' y='30' width='40' height='50'/%3E%3Crect fill='%23f59e0b' x='35' y='35' width='30' height='15'/%3E%3Crect fill='%23f59e0b' x='35' y='55' width='30' height='15'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%233b82f6' x='28' y='12' width='44' height='32' rx='5'/%3E%3Crect fill='%232563eb' x='36' y='44' width='28' height='20'/%3E%3Crect fill='%231d4ed8' x='42' y='64' width='16' height='24'/%3E%3Ccircle fill='%231e40af' cx='34' cy='92' r='6'/%3E%3Ccircle fill='%231e40af' cx='66' cy='92' r='6'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ccircle fill='%239ca3af' cx='50' cy='50' r='30'/%3E%3Ccircle fill='%23d1d5db' cx='50' cy='50' r='20'/%3E%3Cline stroke='%23374151' x1='50' y1='30' x2='50' y2='50' stroke-width='2'/%3E%3Cline stroke='%23374151' x1='50' y1='50' x2='65' y2='55' stroke-width='2'/%3E%3C/svg%3E"
    ]
  },
  monitors: {
    title: "Selecione todas as imagens com",
    subtitle: "monitores ligados",
    correctIndices: [1, 3, 4, 8],
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%231f2937' x='20' y='20' width='60' height='45' rx='3'/%3E%3Crect fill='%23374151' x='25' y='25' width='50' height='35'/%3E%3Crect fill='%236b7280' x='40' y='65' width='20' height='5'/%3E%3Crect fill='%234b5563' x='30' y='70' width='40' height='8' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%231f2937' x='20' y='20' width='60' height='45' rx='3'/%3E%3Crect fill='%2360a5fa' x='25' y='25' width='50' height='35'/%3E%3Crect fill='%23ffffff' x='30' y='30' width='20' height='10'/%3E%3Crect fill='%23e5e7eb' x='30' y='42' width='40' height='3'/%3E%3Crect fill='%23e5e7eb' x='30' y='48' width='30' height='3'/%3E%3Crect fill='%236b7280' x='40' y='65' width='20' height='5'/%3E%3Crect fill='%234b5563' x='30' y='70' width='40' height='8' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Cellipse fill='%2322c55e' cx='50' cy='50' rx='30' ry='35'/%3E%3Cellipse fill='%2316a34a' cx='35' cy='40' rx='10' ry='12'/%3E%3Cellipse fill='%2315803d' cx='60' cy='55' rx='8' ry='10'/%3E%3Crect fill='%23854d0e' x='47' y='80' width='6' height='15'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%23111827' x='15' y='15' width='70' height='50' rx='4'/%3E%3Crect fill='%2310b981' x='20' y='20' width='60' height='40'/%3E%3Ctext fill='%23ffffff' x='30' y='45' font-size='10' font-family='monospace'%3E%24 npm run%3C/text%3E%3Crect fill='%236b7280' x='38' y='65' width='24' height='6'/%3E%3Crect fill='%234b5563' x='28' y='71' width='44' height='10' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%231f2937' x='18' y='18' width='64' height='48' rx='3'/%3E%3Crect fill='%238b5cf6' x='23' y='23' width='54' height='38'/%3E%3Ccircle fill='%23ffffff' cx='50' cy='42' r='12'/%3E%3Cpolygon fill='%23ffffff' points='47,38 47,46 55,42'/%3E%3Crect fill='%236b7280' x='40' y='66' width='20' height='5'/%3E%3Crect fill='%234b5563' x='30' y='71' width='40' height='8' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%23fbbf24' x='25' y='40' width='20' height='25'/%3E%3Crect fill='%23f59e0b' x='30' y='65' width='10' height='8'/%3E%3Crect fill='%23fbbf24' x='55' y='40' width='20' height='25'/%3E%3Crect fill='%23f59e0b' x='60' y='65' width='10' height='8'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%234b5563' x='25' y='60' width='50' height='30' rx='2'/%3E%3Crect fill='%23d1d5db' x='30' y='65' width='40' height='20' rx='1'/%3E%3Crect fill='%239ca3af' x='35' y='70' width='8' height='5'/%3E%3Crect fill='%239ca3af' x='45' y='70' width='8' height='5'/%3E%3Crect fill='%239ca3af' x='55' y='70' width='8' height='5'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Cellipse fill='%23a78bfa' cx='50' cy='35' rx='25' ry='18'/%3E%3Cellipse fill='%238b5cf6' cx='50' cy='50' rx='30' ry='20'/%3E%3Cellipse fill='%237c3aed' cx='50' cy='65' rx='25' ry='15'/%3E%3Crect fill='%236d28d9' x='47' y='75' width='6' height='15'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%231f2937' x='22' y='22' width='56' height='42' rx='3'/%3E%3Crect fill='%23fef3c7' x='27' y='27' width='46' height='32'/%3E%3Crect fill='%23fbbf24' x='32' y='32' width='15' height='10'/%3E%3Crect fill='%23d1d5db' x='32' y='45' width='36' height='3'/%3E%3Crect fill='%23d1d5db' x='32' y='51' width='28' height='3'/%3E%3Crect fill='%236b7280' x='42' y='64' width='16' height='5'/%3E%3Crect fill='%234b5563' x='32' y='69' width='36' height='8' rx='2'/%3E%3C/svg%3E"
    ]
  },
  mugs: {
    title: "Selecione todas as imagens com",
    subtitle: "canecas de café",
    correctIndices: [0, 3, 6, 8],
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%23ffffff' x='30' y='35' width='30' height='40' rx='3'/%3E%3Crect fill='%23f5f5f4' x='60' y='45' width='12' height='20' rx='6'/%3E%3Crect fill='%23451a03' x='35' y='40' width='20' height='30' rx='2'/%3E%3Cpath d='M35 30 Q40 20 50 30' stroke='%239ca3af' fill='none' stroke-width='2'/%3E%3Cpath d='M45 28 Q50 18 55 28' stroke='%239ca3af' fill='none' stroke-width='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%234b5563' x='25' y='60' width='50' height='30' rx='2'/%3E%3Crect fill='%23374151' x='30' y='65' width='40' height='20' rx='1'/%3E%3Crect fill='%231f2937' x='35' y='70' width='30' height='10' rx='1'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%231f2937' x='20' y='25' width='60' height='40' rx='3'/%3E%3Crect fill='%23374151' x='25' y='30' width='50' height='30'/%3E%3Crect fill='%236b7280' x='40' y='65' width='20' height='5'/%3E%3Crect fill='%234b5563' x='30' y='70' width='40' height='8' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%233b82f6' x='32' y='38' width='28' height='38' rx='4'/%3E%3Crect fill='%2360a5fa' x='60' y='48' width='10' height='18' rx='5'/%3E%3Crect fill='%231d4ed8' x='37' y='43' width='18' height='28' rx='2'/%3E%3Cpath d='M38 32 Q43 22 53 32' stroke='%239ca3af' fill='none' stroke-width='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Cellipse fill='%2322c55e' cx='50' cy='50' rx='28' ry='35'/%3E%3Cellipse fill='%2316a34a' cx='40' cy='40' rx='10' ry='12'/%3E%3Crect fill='%23854d0e' x='47' y='80' width='6' height='15'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%234b5563' x='30' y='20' width='40' height='25' rx='3'/%3E%3Crect fill='%236b7280' x='38' y='45' width='24' height='15'/%3E%3Crect fill='%23374151' x='43' y='60' width='14' height='22'/%3E%3Ccircle fill='%23374151' cx='38' cy='88' r='5'/%3E%3Ccircle fill='%23374151' cx='62' cy='88' r='5'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23fef3c7' width='100' height='100'/%3E%3Crect fill='%23fbbf24' x='35' y='40' width='25' height='35' rx='3'/%3E%3Crect fill='%23f59e0b' x='60' y='50' width='8' height='15' rx='4'/%3E%3Crect fill='%23451a03' x='40' y='45' width='15' height='25' rx='2'/%3E%3Cpath d='M40 35 Q45 25 55 35' stroke='%239ca3af' fill='none' stroke-width='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ccircle fill='%239ca3af' cx='50' cy='50' r='30'/%3E%3Ccircle fill='%23d1d5db' cx='50' cy='50' r='20'/%3E%3Cline stroke='%23374151' x1='50' y1='30' x2='50' y2='50' stroke-width='2'/%3E%3Cline stroke='%23374151' x1='50' y1='50' x2='65' y2='55' stroke-width='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%23ef4444' x='33' y='42' width='26' height='36' rx='3'/%3E%3Crect fill='%23dc2626' x='59' y='52' width='10' height='16' rx='5'/%3E%3Crect fill='%23450a0a' x='38' y='47' width='16' height='26' rx='2'/%3E%3Cpath d='M38 37 Q43 27 53 37' stroke='%239ca3af' fill='none' stroke-width='2'/%3E%3Cpath d='M45 35 Q50 25 55 35' stroke='%239ca3af' fill='none' stroke-width='2'/%3E%3C/svg%3E"
    ]
  },
  meetings: {
    title: "Selecione todas as imagens com",
    subtitle: "reuniões que poderiam ser emails",
    correctIndices: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    images: Array(9).fill("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%23e5e7eb' x='15' y='25' width='70' height='45' rx='3'/%3E%3Ccircle fill='%23d1d5db' cx='30' cy='45' r='8'/%3E%3Ccircle fill='%23d1d5db' cx='50' cy='45' r='8'/%3E%3Ccircle fill='%23d1d5db' cx='70' cy='45' r='8'/%3E%3Crect fill='%239ca3af' x='25' y='55' width='10' height='8'/%3E%3Crect fill='%239ca3af' x='45' y='55' width='10' height='8'/%3E%3Crect fill='%239ca3af' x='65' y='55' width='10' height='8'/%3E%3Crect fill='%236b7280' x='20' y='75' width='60' height='8' rx='2'/%3E%3C/svg%3E")
  },
  keyboards: {
    title: "Selecione todas as imagens com",
    subtitle: "teclados com tecla Enter",
    correctIndices: [1, 2, 4, 7],
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%234b5563' x='20' y='45' width='60' height='35' rx='3'/%3E%3Crect fill='%23d1d5db' x='25' y='50' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='35' y='50' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='45' y='50' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='55' y='50' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='65' y='50' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='25' y='62' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='35' y='62' width='8' height='8' rx='1'/%3E%3Crect fill='%23d1d5db' x='45' y='62' width='30' height='8' rx='1'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%231f2937' x='18' y='42' width='64' height='38' rx='4'/%3E%3Crect fill='%23374151' x='23' y='47' width='7' height='7' rx='1'/%3E%3Crect fill='%23374151' x='32' y='47' width='7' height='7' rx='1'/%3E%3Crect fill='%23374151' x='41' y='47' width='7' height='7' rx='1'/%3E%3Crect fill='%23374151' x='50' y='47' width='7' height='7' rx='1'/%3E%3Crect fill='%23374151' x='59' y='47' width='7' height='7' rx='1'/%3E%3Crect fill='%233b82f6' x='68' y='47' width='10' height='7' rx='1'/%3E%3Crect fill='%23374151' x='23' y='58' width='7' height='7' rx='1'/%3E%3Crect fill='%23374151' x='32' y='58' width='7' height='7' rx='1'/%3E%3Crect fill='%23374151' x='41' y='58' width='24' height='7' rx='1'/%3E%3Crect fill='%2322c55e' x='67' y='56' width='11' height='18' rx='1'/%3E%3Ctext fill='%23ffffff' x='69' y='68' font-size='6' font-family='Arial'%3E↵%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%23f5f5f4' x='20' y='45' width='60' height='35' rx='3'/%3E%3Crect fill='%23e5e7eb' x='25' y='50' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='33' y='50' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='41' y='50' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='49' y='50' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='57' y='50' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='65' y='50' width='10' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='25' y='60' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='33' y='60' width='6' height='6' rx='1'/%3E%3Crect fill='%23e5e7eb' x='41' y='60' width='22' height='6' rx='1'/%3E%3Crect fill='%239ca3af' x='65' y='58' width='10' height='15' rx='1'/%3E%3Ctext fill='%23374151' x='67' y='68' font-size='6' font-family='Arial'%3E↵%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%236b7280' x='30' y='35' width='40' height='8' rx='2'/%3E%3Crect fill='%234b5563' x='25' y='50' width='50' height='35' rx='4'/%3E%3Ccircle fill='%2360a5fa' cx='50' cy='67' r='12'/%3E%3Ccircle fill='%233b82f6' cx='50' cy='67' r='8'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23111827' width='100' height='100'/%3E%3Crect fill='%231f2937' x='15' y='40' width='70' height='40' rx='4'/%3E%3Crect fill='%23374151' x='20' y='45' width='8' height='8' rx='1'/%3E%3Crect fill='%23374151' x='30' y='45' width='8' height='8' rx='1'/%3E%3Crect fill='%23374151' x='40' y='45' width='8' height='8' rx='1'/%3E%3Crect fill='%23374151' x='50' y='45' width='8' height='8' rx='1'/%3E%3Crect fill='%23374151' x='60' y='45' width='8' height='8' rx='1'/%3E%3Crect fill='%23ef4444' x='70' y='45' width='10' height='8' rx='1'/%3E%3Crect fill='%23374151' x='20' y='57' width='8' height='8' rx='1'/%3E%3Crect fill='%23374151' x='30' y='57' width='28' height='8' rx='1'/%3E%3Crect fill='%2310b981' x='60' y='55' width='20' height='20' rx='2'/%3E%3Ctext fill='%23ffffff' x='65' y='69' font-size='8' font-family='Arial'%3E↵%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%23e5e7eb' x='25' y='45' width='50' height='35' rx='3'/%3E%3Ccircle fill='%239ca3af' cx='40' cy='57' r='5'/%3E%3Ccircle fill='%239ca3af' cx='60' cy='57' r='5'/%3E%3Crect fill='%239ca3af' x='35' y='67' width='30' height='5' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Cellipse fill='%2322c55e' cx='50' cy='50' rx='30' ry='35'/%3E%3Cellipse fill='%2316a34a' cx='40' cy='40' rx='10' ry='12'/%3E%3Cellipse fill='%2315803d' cx='60' cy='55' rx='8' ry='10'/%3E%3Crect fill='%23854d0e' x='47' y='80' width='6' height='15'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23fef3c7' width='100' height='100'/%3E%3Crect fill='%23fbbf24' x='18' y='43' width='64' height='38' rx='4'/%3E%3Crect fill='%23fef3c7' x='23' y='48' width='7' height='7' rx='1'/%3E%3Crect fill='%23fef3c7' x='32' y='48' width='7' height='7' rx='1'/%3E%3Crect fill='%23fef3c7' x='41' y='48' width='7' height='7' rx='1'/%3E%3Crect fill='%23fef3c7' x='50' y='48' width='7' height='7' rx='1'/%3E%3Crect fill='%23fef3c7' x='59' y='48' width='7' height='7' rx='1'/%3E%3Crect fill='%23f59e0b' x='68' y='48' width='10' height='7' rx='1'/%3E%3Crect fill='%23fef3c7' x='23' y='59' width='7' height='7' rx='1'/%3E%3Crect fill='%23fef3c7' x='32' y='59' width='24' height='7' rx='1'/%3E%3Crect fill='%23f97316' x='58' y='57' width='20' height='18' rx='2'/%3E%3Ctext fill='%23ffffff' x='63' y='70' font-size='8' font-family='Arial'%3E↵%3C/text%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%239ca3af' x='35' y='30' width='30' height='20' rx='2'/%3E%3Crect fill='%236b7280' x='30' y='52' width='40' height='30' rx='4'/%3E%3Crect fill='%234b5563' x='42' y='58' width='16' height='16' rx='8'/%3E%3C/svg%3E"
    ]
  },
  plants: {
    title: "Selecione todas as imagens com",
    subtitle: "plantas de escritório",
    correctIndices: [2, 4, 5, 7],
    images: [
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%234b5563' x='30' y='20' width='40' height='25' rx='3'/%3E%3Crect fill='%236b7280' x='38' y='45' width='24' height='15'/%3E%3Crect fill='%23374151' x='43' y='60' width='14' height='22'/%3E%3Ccircle fill='%23374151' cx='38' cy='88' r='5'/%3E%3Ccircle fill='%23374151' cx='62' cy='88' r='5'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%231f2937' x='20' y='20' width='60' height='45' rx='3'/%3E%3Crect fill='%2360a5fa' x='25' y='25' width='50' height='35'/%3E%3Crect fill='%236b7280' x='40' y='65' width='20' height='5'/%3E%3Crect fill='%234b5563' x='30' y='70' width='40' height='8' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Cellipse fill='%2322c55e' cx='50' cy='45' rx='25' ry='30'/%3E%3Cellipse fill='%2316a34a' cx='38' cy='35' rx='12' ry='15'/%3E%3Cellipse fill='%2315803d' cx='62' cy='50' rx='10' ry='12'/%3E%3Crect fill='%23854d0e' x='47' y='70' width='6' height='8'/%3E%3Crect fill='%23a16207' x='38' y='78' width='24' height='15' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%23ffffff' x='30' y='35' width='30' height='40' rx='3'/%3E%3Crect fill='%23f5f5f4' x='60' y='45' width='12' height='20' rx='6'/%3E%3Crect fill='%23451a03' x='35' y='40' width='20' height='30' rx='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23e5e7eb' width='100' height='100'/%3E%3Crect fill='%236b7280' x='40' y='75' width='20' height='18' rx='2'/%3E%3Cellipse fill='%234ade80' cx='50' cy='55' rx='20' ry='25'/%3E%3Cellipse fill='%2322c55e' cx='42' cy='48' rx='8' ry='10'/%3E%3Cellipse fill='%2316a34a' cx='58' cy='58' rx='6' ry='8'/%3E%3Crect fill='%23854d0e' x='48' y='72' width='4' height='5'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23fef3c7' width='100' height='100'/%3E%3Crect fill='%23d97706' x='35' y='70' width='30' height='22' rx='3'/%3E%3Cpath fill='%2322c55e' d='M50 30 Q35 45 40 65 L50 60 L60 65 Q65 45 50 30Z'/%3E%3Cpath fill='%2316a34a' d='M50 35 Q40 48 45 62 L50 58 L55 62 Q60 48 50 35Z'/%3E%3Cellipse fill='%234ade80' cx='40' cy='50' rx='8' ry='12'/%3E%3Cellipse fill='%234ade80' cx='60' cy='55' rx='7' ry='10'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Ccircle fill='%239ca3af' cx='50' cy='50' r='30'/%3E%3Ccircle fill='%23d1d5db' cx='50' cy='50' r='20'/%3E%3Cline stroke='%23374151' x1='50' y1='30' x2='50' y2='50' stroke-width='2'/%3E%3Cline stroke='%23374151' x1='50' y1='50' x2='65' y2='55' stroke-width='2'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23d1d5db' width='100' height='100'/%3E%3Crect fill='%23f5f5f4' x='38' y='72' width='24' height='20' rx='2'/%3E%3Cellipse fill='%2386efac' cx='50' cy='52' rx='22' ry='28'/%3E%3Cellipse fill='%234ade80' cx='42' cy='42' rx='10' ry='14'/%3E%3Cellipse fill='%2322c55e' cx='58' cy='55' rx='8' ry='11'/%3E%3Crect fill='%23854d0e' x='48' y='68' width='4' height='6'/%3E%3C/svg%3E",
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3Crect fill='%234b5563' x='25' y='55' width='50' height='30' rx='2'/%3E%3Crect fill='%23d1d5db' x='30' y='60' width='40' height='20' rx='1'/%3E%3Crect fill='%239ca3af' x='35' y='65' width='8' height='5'/%3E%3Crect fill='%239ca3af' x='45' y='65' width='8' height='5'/%3E%3Crect fill='%239ca3af' x='55' y='65' width='8' height='5'/%3E%3C/svg%3E"
    ]
  }
};

const captchaTypes: CaptchaType[] = ["chairs", "monitors", "mugs", "meetings", "keyboards", "plants"];

export default function OfficeCaptcha({
  verified,
  onVerified,
}: {
  verified: boolean;
  onVerified: () => void;
}) {
  const [showCaptcha, setShowCaptcha] = useState(false);
  const [selectedImages, setSelectedImages] = useState<number[]>([]);
  const [captchaType, setCaptchaType] = useState<CaptchaType>("chairs");
  const [captchaError, setCaptchaError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const startCaptcha = () => {
    const randomType = captchaTypes[Math.floor(Math.random() * captchaTypes.length)];
    setCaptchaType(randomType);
    setSelectedImages([]);
    setCaptchaError(false);
    setShowCaptcha(true);
  };

  const toggleImage = (index: number) => {
    setSelectedImages((prev) =>
      prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]
    );
  };

  const verifyCaptcha = () => {
    setIsLoading(true);
    setTimeout(() => {
      const current = captchaConfigs[captchaType];
      const isCorrect =
        selectedImages.length === current.correctIndices.length &&
        selectedImages.every((index) => current.correctIndices.includes(index));

      if (isCorrect || captchaType === "meetings") {
        onVerified();
        setShowCaptcha(false);
      } else {
        setCaptchaError(true);
        const newType = captchaTypes[Math.floor(Math.random() * captchaTypes.length)];
        setCaptchaType(newType);
        setSelectedImages([]);
      }
      setIsLoading(false);
    }, 800);
  };

  const config = captchaConfigs[captchaType];

  return (
    <>
      <div className="border border-gray-300 rounded bg-[#f9f9f9] p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={verified ? undefined : startCaptcha}
              className={`w-7 h-7 border-2 rounded flex items-center justify-center transition-all ${
                verified
                  ? "bg-[#00a651] border-[#00a651]"
                  : "border-gray-400 hover:border-gray-500 bg-white"
              }`}
              aria-label="Não sou um robô"
            >
              {verified && (
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </button>
            <span className="text-sm text-gray-700">Não sou um robô</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' width='32' height='32'%3E%3Cpath fill='%234285f4' d='M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 57.6c-14.1 0-25.6-11.5-25.6-25.6S17.9 6.4 32 6.4 57.6 17.9 57.6 32 46.1 57.6 32 57.6z'/%3E%3Cpath fill='%2334a853' d='M32 12.8c-10.6 0-19.2 8.6-19.2 19.2 0 3.5 1 6.9 2.7 9.8l16.5-16.5V12.8z'/%3E%3Cpath fill='%23fbbc05' d='M32 51.2c10.6 0 19.2-8.6 19.2-19.2 0-3.5-1-6.9-2.7-9.8L32 38.7v12.5z'/%3E%3Cpath fill='%23ea4335' d='M51.2 32c0-3.5-1-6.9-2.7-9.8L32 38.7l16.5 16.5c1.7-2.9 2.7-6.3 2.7-9.8v-13.4z'/%3E%3C/svg%3E"
              alt="reCAPTCHA"
              width={32}
              height={32}
            />
            <span className="text-[10px] text-gray-500 mt-1">reCAPTCHA</span>
            <span className="text-[8px] text-gray-400">Privacidade - Termos</span>
          </div>
        </div>
      </div>

      {showCaptcha && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl w-full max-w-sm overflow-hidden">
            <div className="bg-[#4285f4] text-white p-4">
              <p className="text-sm">{config.title}</p>
              <p className="text-2xl font-medium">{config.subtitle}</p>
              {captchaError && <p className="text-yellow-200 text-sm mt-2">Por favor, tente novamente.</p>}
              {captchaType === "meetings" && (
                <p className="text-blue-100 text-xs mt-2 italic">Dica: todas as reuniões poderiam ser emails.</p>
              )}
            </div>
            <div className="p-1 bg-white">
              <div className="grid grid-cols-3 gap-1">
                {config.images.map((img, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => toggleImage(index)}
                    className={`relative aspect-square overflow-hidden transition-all ${
                      selectedImages.includes(index) ? "ring-2 ring-[#4285f4] ring-inset" : ""
                    }`}
                  >
                    <Image src={img} alt={`Opção ${index + 1}`} width={100} height={100} className="w-full h-full object-cover" />
                    {selectedImages.includes(index) && (
                      <div className="absolute inset-0 bg-[#4285f4]/20 flex items-center justify-center">
                        <div className="w-6 h-6 bg-[#4285f4] rounded-full flex items-center justify-center">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-[#f9f9f9] border-t border-gray-200">
              <button
                type="button"
                onClick={() => {
                  const newType = captchaTypes[Math.floor(Math.random() * captchaTypes.length)];
                  setCaptchaType(newType);
                  setSelectedImages([]);
                  setCaptchaError(false);
                }}
                className="text-gray-600 hover:text-gray-800"
                title="Novo desafio"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </button>
              <button
                type="button"
                onClick={verifyCaptcha}
                disabled={isLoading}
                className="bg-[#4285f4] text-white px-6 py-2 rounded font-medium hover:bg-[#3367d6] transition-colors disabled:opacity-50"
              >
                {isLoading ? "Verificando..." : "Verificar"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

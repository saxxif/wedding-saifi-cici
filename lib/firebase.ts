import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// Config asli dari proyek Firebase Wedding-RSVP kamu
const firebaseConfig = {
  apiKey: "AIzaSyCRRIsGQmR0jL2aDZHy31JxjkFita2EzZE",
  authDomain: "wedding-rsvp-28814.firebaseapp.com",
  projectId: "wedding-rsvp-28814",
  storageBucket: "wedding-rsvp-28814.firebasestorage.app",
  messagingSenderId: "18732512635",
  appId: "1:18732512635:web:035e42a6854fcd82aff9de",
  measurementId: "G-KQ2Q0VNQ6T"
};

// Mencegah instansiasi ganda saat Next.js auto-reload (SSR Safe)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

// 1. Ambil dan EXPORT database Firestore untuk dipakai di RSVP.tsx
export const db = getFirestore(app);

// 2. Inisialisasi Analytics secara aman (Hanya aktif di sisi browser/client)
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) getAnalytics(app);
  });
}
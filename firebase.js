import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth, signInAnonymously, onAuthStateChanged } from "firebase/auth";

// ─── CONFIG ──────────────────────────────────────────────────────────────────

const firebaseConfig = {
  apiKey:            "AIzaSyDnK4pDqn2dKl_vEZmZrla8TxxvIvPbjfM",
  authDomain:        "veoai-learning-english-ae898.firebaseapp.com",
  projectId:         "veoai-learning-english-ae898",
  storageBucket:     "veoai-learning-english-ae898.firebasestorage.app",
  messagingSenderId: "1044537822266",
  appId:             "1:1044537822266:web:d7a1f3728f898e52773903",
  measurementId:     "G-08W7KPQDYZ",
  databaseURL:       "https://veoai-learning-english-ae898-default-rtdb.firebaseio.com",
};

// ─── INIT ────────────────────────────────────────────────────────────────────

const app  = initializeApp(firebaseConfig);
export const db   = getDatabase(app);
export const auth = getAuth(app);

// ─── AUTO ANONYMOUS AUTH ─────────────────────────────────────────────────────
// Если пользователь не вошёл — логинимся анонимно.
// Анонимный UID сохраняется в браузере — данные не теряются между сессиями.

onAuthStateChanged(auth, (user) => {
  if (!user) {
    signInAnonymously(auth).catch(console.error);
  }
});

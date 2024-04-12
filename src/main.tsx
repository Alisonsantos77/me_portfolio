import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import './global.css'
import '@/lib/i18n.ts'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <React.Suspense fallback="loading...">
      <App />
    </React.Suspense>
  </React.StrictMode>,
)

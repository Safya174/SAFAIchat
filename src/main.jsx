import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeModeProvider } from './context/ThemeContext';
import i18n from "./i18n";

// 2. تغيير اتجاه الصفحة تلقائياً عند تغيير اللغة
i18n.on("languageChanged", (lng) => {
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = lng;
});

// ضبط الاتجاه البدائي عند فتح التطبيق
document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
document.documentElement.lang = i18n.language || "en";
createRoot(document.getElementById('root')).render(
  <StrictMode>
<ThemeModeProvider>
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/SAFAIchat"} >
       <App />
    </BrowserRouter>
    </ThemeModeProvider>
  </StrictMode>
)

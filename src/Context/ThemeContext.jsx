import { createContext, useContext, useState ,useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { darkTheme, lightTheme } from "../theme";
import CssBaseline from "@mui/material/CssBaseline";
// 1. الصندوق نفسه
const ThemeModeContext = createContext();

// 2. الكومبوننت اللي هيحمل الحالة ويوزعها على كل التطبيق
export function ThemeModeProvider({ children }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
  const savedMode = localStorage.getItem("themeMode");

  if (savedMode !== null) {
    return savedMode === "dark";
  }

  return true;
});

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  useEffect(()=>{
    localStorage.setItem("themeMode",isDarkMode ? "dark" : "light")
  },[isDarkMode])

  const activeTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeModeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={activeTheme}>
        <CssBaseline></CssBaseline>
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

// 3. دالة بسيطة أي component يستخدمها عشان ياخد الحالة
export function useThemeMode() {
  return useContext(ThemeModeContext);
}

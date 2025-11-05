import { createContext, useContext } from 'react'

type Theme = 'light' | 'dark'
type Language = 'ru' | 'en'

export const ThemeContext = createContext<Theme>('light')
export const LanguageContext = createContext<Language>('ru')

// Кастомные хуки — чтобы не писать useContext везде
export const useTheme = () => {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error('useLanguage must be used within LanguageProvider')
  return context
}

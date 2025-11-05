import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import ThemeButton from './components/ThemeButton/ThemeButton'
import { LanguageContext, ThemeContext } from './context/ThemeContext'
import { UserContext } from './context/UserContext'
import List from './components/List/List'

type Theme = 'light' | 'dark'
type Language = 'ru' | 'en'

const styleTheme = (theme: Theme) => {
  return {
    background: theme === 'dark' ? '#333' : '#fff',
    color: theme === 'dark' ? '#fff' : '#000',
    minHeight: '100vh',
    padding: '20px',
  }
}

function App() {
  const [theme, setTheme] = useState<Theme>('light')
  const [language, setLanguage] = useState<Language>('ru')
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => {
      login('Дмитрий')
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  const login = (name: string) => setUser(name)
  const logout = () => setUser(null)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleLang = () => {
    setLanguage(language === 'ru' ? 'en' : 'ru')
  }

  return (
    <ThemeContext.Provider value={theme}>
      <LanguageContext.Provider value={language}>
        <UserContext.Provider value={{ user, login, logout }}>
          <div style={styleTheme(theme)}>
            <Header />
            <ThemeButton toggle={toggleTheme} toggleLanguage={toggleLang} />
            <List />
          </div>
        </UserContext.Provider>
      </LanguageContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App

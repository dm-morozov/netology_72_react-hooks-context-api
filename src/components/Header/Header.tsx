import { useLanguage, useTheme } from '../../context/ThemeContext'
import { useUser } from '../../context/UserContext'

const Header = () => {
  // useContext(ThemeContext) - "дай мне, что лежит в ящике"
  const theme = useTheme()
  const language = useLanguage()
  const { user } = useUser()

  const texts = {
    ru: { hello: `Привет ${user || 'Гость'}. Тема:` },
    en: { hello: `Hello ${user || 'Guest'}. Theme:` },
  }

  const text = language === 'ru' ? texts.ru : texts.en

  return (
    <h1 style={{ color: theme === 'dark' ? 'white' : 'black' }}>
      {text.hello} {theme}
    </h1>
  )
}

export default Header

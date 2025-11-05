// Пока кнопка только показывает тему.

import { useLanguage, useTheme } from '../../context/ThemeContext'
import { useUser } from '../../context/UserContext'

// Дальше сделаем переключение.
interface Props {
  toggle: () => void
  toggleLanguage: () => void
}

const ThemeButton: React.FC<Props> = ({ toggle, toggleLanguage }) => {
  const theme = useTheme()
  const language = useLanguage()
  const { user, login, logout } = useUser()
  const name = 'Дмитрий'

  const texts = {
    ru: {
      switchTheme: 'Переключить тему на: ',
      switchLanguage: 'Переключить язык на: ',
      themeLight: 'светлую',
      themeDark: 'темную',
      auth: user ? `Выйти` : 'Войти как ' + name,
    },
    en: {
      switchTheme: 'Switch theme to: ',
      switchLanguage: 'Switch language to: ',
      themeLight: 'light',
      themeDark: 'dark',
      auth: user ? `Logout` : 'Login as ' + name,
    },
  }

  const text = language === 'ru' ? texts.ru : texts.en

  return (
    <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
      <button onClick={toggle}>
        {text.switchTheme}
        {theme === 'light' ? text.themeLight : text.themeDark}
      </button>
      <button onClick={toggleLanguage}>
        {text.switchLanguage}
        {language === 'ru' ? 'en' : 'ru'}
      </button>
      <button onClick={user ? logout : () => login(name)}>{text.auth}</button>
    </div>
  )
}

export default ThemeButton

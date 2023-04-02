import { useTheme } from 'next-themes'
import styles from './styles.module.scss'

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme()
  const isDay = theme === 'light'

  return (
    <div
      data-transition-disabled={isDay}
      data-checked={isDay}
      className={styles['toggle-theme']}>
      <span aria-hidden="true">روز</span>
      <input
        type="checkbox"
        role="switch"
        checked={isDay}
        onChange={() => setTheme(isDay ? 'dark' : 'light')}
      />
      <span aria-hidden="true">شب</span>
    </div>
  )
}

export default ThemeSwitch

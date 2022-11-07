import AppRouter from "./router/AppRouter"
import { AppTheme } from "./themes"

const JournalApp = () => {
  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}

export default JournalApp
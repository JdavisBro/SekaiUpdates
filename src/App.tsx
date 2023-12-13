import { useLocalStorage } from 'react-use'

import styles from './App.module.css'
import Header from './Header'

function App() {
  const lightMode = matchMedia("(prefers-color-scheme: light)").matches;

  const [server = "en", setServer] = useLocalStorage<string>("server", "en", {raw: true})

  const [showPastUpdates = false, setShowPastUpdates] = useLocalStorage("showPastUpdates", false, {raw: false, deserializer: Boolean, serializer: String})

  return (
    <>
      <Header
        lightMode={lightMode}
        setServer={setServer} server={server}
        setShowPastUpdates={setShowPastUpdates} showPastUpdates={showPastUpdates}
      />
      <div className={ styles.content }>
        HELLO!
      </div>
    </>
  )
}

export default App

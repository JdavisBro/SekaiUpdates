import { useCallback } from 'react'
import { useLocalStorage } from 'react-use'

import styles from './App.module.css'
import githubDark from "./assets/github-mark.svg"
import githubLight from "./assets/github-mark-white.svg"

const servers = new Map<string, string>([
  ["jp", "Japanese"],
  ["en", "English/Global"],
  ["tw", "Taiwan"],
  ["kr", "Korean"],
])

function App() {
  const lightMode = matchMedia("(prefers-color-scheme: light)").matches;
  const githubLogo = <img className={styles.headerLogo} src={lightMode ?  githubDark : githubLight} />

  const [server, setServer] = useLocalStorage("server", "en", {raw: true})
  if (typeof server != "string" || !["jp", "en", "tw", "kr"].includes(server)) {setServer("en")}

  const [showPastUpdates, setShowPastUpdates] = useLocalStorage("showPastUpdates", "false", {raw: true})
  console.log(showPastUpdates, typeof showPastUpdates)

  const serverOptions: React.ReactElement[] = []; 
  servers.forEach((value, key) => {
    serverOptions.push(<option key={key} onClick={useCallback(() => {setServer(key)}, [setServer])} value={key}>{value}</option>)
  });

  return (
    <>
      <div className={ styles.header }>
        <div className={`${styles.item} ${styles.valign}`}>Project Sekai Updates</div>
        <div className={`${styles.item} ${styles.middle}`}></div>
        <div className={`${styles.item} ${styles.valign}`}>
          <input onChange={useCallback(() => {setShowPastUpdates(showPastUpdates == "true" ? "false" : "true")}, [showPastUpdates, setShowPastUpdates])} type="checkbox" id="showPastUpdatesBox" checked={showPastUpdates == "true"} />
          <label className={ styles.noselect } htmlFor="showPastUpdatesBox">Show Past Updates</label>
        </div>
        <div className={ styles.item }>
          <label className={ styles.noselect } htmlFor="serverSelect">Server:</label>
          <br />
          <select id="serverSelect" defaultValue={server}>{serverOptions}</select>
        </div>
        <a className={ styles.item } href="https://github.com/JdavisBro/SekaiUpdates" target="_blank">
          {githubLogo}
        </a>
      </div>
      <div className={ styles.content }>
        HELLO!
      </div>
    </>
  )
}

export default App

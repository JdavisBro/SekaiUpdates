import { useRef, useState } from 'react'

import styles from './Content.module.css'
import updates from '../updates/updates'
import Update from './Update'
import { Server } from '../types/ServerType'

type Props = {
    server: Server,
    showPastUpdates: boolean,
}

export default function Content(props: Props): React.ReactElement {
    const [search, setSearch] = useState("")

    const searchRef = useRef<HTMLInputElement>(null)

    return <>
        <div className={ styles.content}>
            <div className={ styles.searchcontainer}>
                <label htmlFor='searchInput'>Filter: </label>
                <input type='text' id="searchInput" value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyUp={(e) => {if (e.key == "Enter" && searchRef.current) {searchRef.current.blur()}}}
                ref={searchRef} />
            </div>
            <div className={ styles.updatecontainer }>
                {updates.map(
                    (update) => <Update key={update.version} server={props.server} showPastUpdates={props.showPastUpdates} search={search} update={update} />
                )}
            </div>
        </div>
    </>
}

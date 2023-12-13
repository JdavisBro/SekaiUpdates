import styles from './Content.module.css'
import updates from '../updates/updates'
import Update from './Update'
import { Server } from '../types/ServerType'

type Props = {
    server: Server,
    showPastUpdates: boolean,
}

export default function Content(props: Props): React.ReactElement {
    return <>
        <div className={ styles.header }>
            {updates.map(
                (update) => <Update key={update.version} server={props.server} showPastUpdates={props.showPastUpdates} update={update} />
            )}
        </div>
    </>
}

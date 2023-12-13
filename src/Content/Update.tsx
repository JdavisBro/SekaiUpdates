import { Server } from '../types/ServerType'
import type { UpdateType } from '../types/UpdateType'
import styles from './Content.module.css'

type Props = {
    server: Server,
    showPastUpdates: boolean,
    update: UpdateType,
}

export default function Update(props: Props): React.ReactElement | null {
    const currentDate = new Date(Date.now())

    if (!props.showPastUpdates) {
        var updateDate = props.update.date[props.server]
        console.log(updateDate, currentDate)
        if (updateDate !== null) {
            if (updateDate < currentDate) {
                return null
            }
        }
    }

    return <>
        <div className={ styles.header }>
            {props.update.version}
        </div>
    </>
}

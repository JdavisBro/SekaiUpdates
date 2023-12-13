import type { FeatureType } from '../types/UpdateType'
import styles from './Content.module.css'

type Props = {
    server: string,
    showPastUpdates: boolean,
    feature: FeatureType,
}

export default function Feature(props: Props): React.ReactElement {
    const currentDate = new Date(Date.now())

    return <>
        <div className={ styles.header }>
            hello :D
        </div>
    </>
}

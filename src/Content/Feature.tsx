import { Server } from '../types/ServerType'
import type { FeatureType } from '../types/UpdateType'
import styles from './Content.module.css'

type Props = {
    server: Server,
    showPastUpdates: boolean,
    search: string,
    feature: FeatureType,
}

export default function Feature(props: Props): React.ReactElement | boolean {
    const currentDate = new Date(Date.now())

    var dateText = "";
    if (props.server != Server.jp) {
        var featureDates = props.feature.date
        if (featureDates !== null) {
            var featureDate = featureDates[props.server]
            if (featureDate !== null) { // only ran if this one is supposed to be visible
                dateText = `Early ${Server[props.server].toUpperCase()}: ${featureDate.toLocaleDateString()}`
            }
        }
    }

    return <>
        <div className={ styles.feature }>
            <div className={ styles.featureheader }>
                <h2 className={styles.left}>{props.feature.name}</h2>
                <h4 className={styles.right}>{dateText}</h4>
            </div>
        </div>
    </>
}

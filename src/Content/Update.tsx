import { Server } from '../types/ServerType'
import type { UpdateType } from '../types/UpdateType'
import styles from './Content.module.css'
import Feature from './Feature'

type Props = {
    server: Server,
    showPastUpdates: boolean,
    search: string,
    update: UpdateType,
}

export default function Update(props: Props): React.ReactElement | null {
    const currentDate = new Date(Date.now())

    if (!props.showPastUpdates) {
        var updateDate = props.update.date[props.server]
        if (updateDate !== null) {
            if (updateDate < currentDate) {
                return null
            }
        }
    }

    var description: React.ReactElement | null = null
    if (props.update.description) {
        description = <div className={ styles.description }>{props.update.description}</div>
    }

    var currentServerDate = ""
    console.log(props.update.date[props.server])
    if (props.server != Server.jp && props.update.date[props.server]) {
        currentServerDate = `${Server[props.server].toUpperCase()}: ${props.update.date[props.server]?.toLocaleDateString()}`
    }

    var anyVisible = false

    var visibleFeatures = props.update.features.map((feature) => {
        if (props.server != Server.jp && !props.showPastUpdates) {
            var featureDates = feature.date
            if (featureDates !== null) {
                var featureDate = featureDates[props.server]
                if (featureDate !== null) {
                    if (featureDate < currentDate) {return null}
                }
            }
        }
        if (props.search != '') {
            var inSearch = false
            if (feature.name.toLowerCase().includes(props.search.toLowerCase())) { inSearch = true}
            feature.tags.forEach((value) => {if (value.toLowerCase().includes(props.search.toLowerCase())) {inSearch = true}})
            if (!inSearch) {return null}
        }
        anyVisible = true
        return <Feature key={feature.name} server={props.server} showPastUpdates={props.showPastUpdates} search={props.search} feature={feature} />
    })

    console.log(anyVisible)
    if (!anyVisible) {return null}

    return <>
        <div className={ styles.update }>
            <div className={ styles.splitline }>
                <h2 className={ styles.left }>Version {props.update.version}</h2>
                <h4 className={ styles.right }>
                    JP: {props.update.date[Server.jp].toLocaleDateString()}
                    <br />
                    {currentServerDate}
                </h4>
            </div>
            { description }
            <div className={ styles.featurelist }>
                {visibleFeatures}
            </div>
        </div>
    </>
}

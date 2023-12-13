import { useSearchParam } from 'react-use';

import styles from './BigFeature.module.css'
import { Server } from './types/ServerType';

function App() {
  const displayFeature = useSearchParam("feature")

    if (!displayFeature) {return null}

  return (
    <>
      <div className={ styles.container }>
      </div>
    </>
  )
}

export default App

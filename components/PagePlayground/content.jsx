
import Styles from '@/styles/modules/playground/content.module.css'

import Sidebar from './sidebar'
import FluxoArea from './fluxoArea'
import FluxoControl from './fluxoControl'
import PlaygroundArea from './playgroundArea'
import SwitchArea from './switchArea'


export default function PlaygroundContent() {
    return (
        <>
            <Sidebar />
            {/* Main Area */}
            < div className={Styles.mainArea} >
                {/* Actions e Run Area */}

                <div className={Styles.mainActionArea} >
                    <FluxoControl />
                    <PlaygroundArea />
                </div>

                <SwitchArea />
                <FluxoArea />
            </div >
        </>

    );
}
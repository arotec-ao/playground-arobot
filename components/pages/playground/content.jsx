
import Styles from '@/styles/modules/playground/content.module.css'

import Sidebar from './sidebar'
import FluxoArea from './fluxoArea'
import FluxoControl from './fluxoControl'
import PlaygroundArea from './playgroundArea'

import { useRef, useEffect } from 'react'

export default function PlaygroundContent() {

    useEffect(() => {

        //para prender o usuário a um único modo de visualização
        if (typeof window !== 'undefined') {
            if (window.screen.orientation.lock) {
                window.screen.orientation.lock('portrait-primary');
            }

        }

    }, []);


    return (
        <div className={Styles.app} >
            <Sidebar />

            <div className={Styles.mainArea} >
                <div className={Styles.mainBlockArea}>
                    <FluxoControl />
                    <PlaygroundArea />
                </div>

                <FluxoArea />

            </div>
        </div>

    );
}
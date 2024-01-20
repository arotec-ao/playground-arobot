
import Styles from '@/styles/modules/playground/content.module.css'

import Sidebar from './sidebar'
import FluxoArea from './fluxoArea'
import FluxoControl from './fluxoControl'
import PlaygroundArea from './playgroundArea'

import {useEffect } from 'react'

export default function PlaygroundContent() {

    return (
        <div className={Styles.app}>
        
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
import Image from 'next/image';
import Styles from '@/styles/modules/playground/playgroundArea.module.css'

import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import { useContext, useEffect, useRef } from 'react';
import ArobotPlayer from '@/components/ui/ArobotPlayer';

export default function PlaygroundArea() {
    const { runState, changeRunState } = useContext(PlaygroundContext);

    const disable_buttons = {
        pause: false,
        play: false,
    };

    switch (runState) {
        case 'run':
            disable_buttons.play = true;
            disable_buttons.pause = false;
            break;
        case 'pause':
            disable_buttons.play = false;
            disable_buttons.pause = true;

    }
    return (
        <div className={Styles.playgroundArea + ' ' + Styles.areaActive} >

            <div className={Styles.panelRunFunctions}>

                <button className={Styles.btnRunFunction} disabled={disable_buttons.play}
                    onClick={() => { changeRunState('play') }}>
                    <Image src='/icons/play.png' width='25' height='25' alt='' />
                </button>

                <button className={Styles.btnRunFunction} disabled={disable_buttons.pause}
                    onClick={() => { changeRunState('pause') }}>
                    <Image src='/icons/pause.png' width='25' height='25' alt='' />
                </button>
            </div>

            <div className={Styles.boardPlayground} >
                <ArobotPlayer />
            </div>
        </div>

    )
}
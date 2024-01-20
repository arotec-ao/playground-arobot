import Image from 'next/image';

import LevelButton from '@/components/ui/LevelButton'
import ItemBlockFluxo from '@/components/ui/ItemBlockFluxo'
import ItemConsoleMessage from '@/components/ui/ItemConsoleMessage'
import PlaygroundContext from '@/components/contexts/PlaygroundContext'

import Styles from '@/styles/modules/playground/fluxoArea.module.css'

import { useContext, useState } from 'react';

export default function FluxoArea() {
    const { niveis, addNivel, currentNivel, setCurrentNivel,
        fluxoMessages, consoleMessages } = useContext(PlaygroundContext);


    const [isConsole, setIsConsole] = useState(false);

    const addLevel = () => {
        setCurrentNivel(niveis.length);
        addNivel([...niveis, { blocks: [] }]);
    }

    return (
        <div className={Styles.FooterPanel}>
            <div className={Styles.switchArea}>
                <button className={Styles.switchAreaButton + ' ' +
                (isConsole  ?  '': Styles.switchAreaButtonActive) }

                onClick={()=>{
                    setIsConsole(false)
                }}>Fluxo</button>
                <button className={Styles.switchAreaButton + ' ' +
                (isConsole  ?  Styles.switchAreaButtonActive: '')} onClick={()=>{
                    setIsConsole(true)
                }}>Console</button>
            </div>

            {
                isConsole ==false ? (<>
                    <div className={Styles.Levels}>
                        <div className={Styles.LevelsContainer}>
                            {niveis.map((nivel, index) => {
                                return (<LevelButton key={index} level={index} active={index == currentNivel} />);
                            })}
                        </div>
                        <button className={Styles.BtnAddLevel} onClick={addLevel}>
                            <Image src='/icons/add.png' width='20' height='20' alt='' />
                        </button>
                    </div>

                    <div className={Styles.FluxoLogic}>
                        <div className={Styles.itemBlockFluxoContainer}>
                            {fluxoMessages.map((fluxo, index) => {
                                return (
                                    <ItemBlockFluxo key={index} current={fluxoMessages.length - 1 == index}>{fluxo}</ItemBlockFluxo>
                                )
                            })}
                        </div>
                    </div></>
                ) : (<>
                      <div className={Styles.Console}>
                        <div className={Styles.itemConsoleMessageContainer}>
                            {consoleMessages.map((message, index) => {
                                return (
                                    <ItemConsoleMessage key={index}>{message}</ItemConsoleMessage>
                                )
                            })}
                        </div>
                    </div>
                </>)
            }

        </div>

    )
}
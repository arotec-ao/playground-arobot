import LevelButton from '@/components/LevelButton/LevelButton'
import ItemActionFluxo from '@/components/ItemActionFluxo/ItemActionFluxo'
import Styles from '@/styles/modules/playground/fluxoArea.module.css'
import AppContext from '../AppContext/AppContext'
import Image from 'next/image';
import { useContext } from 'react'

export default function FluxoArea() {
    const {niveis}  = useContext(AppContext);

    const addLevel = ()=>{
        niveis.push ({
            actions: []
        })
    }
    
    return (
        <>
            {/* Fluxo de dados */}
            <div div className={Styles.FooterPanel} >
                <div className={Styles.Levels}>
                    <div className={Styles.LevelsContainer}>
                        { niveis.map((nivel, index)=>{
                            return (<LevelButton level={index+1} active={index == niveis.length-1} />);
                        })}

                    </div>
                    <button className={Styles.BtnAddLevel} onClick={addLevel}>
                        <Image src='/icons/add.png' width='20' height='20' />
                    </button>
                </div>

                <div className={Styles.FluxoLogic}>
                    <div className={Styles.blocksFluxoContainer}>

                        <ItemActionFluxo>Move 3 passos</ItemActionFluxo>

                        <Image src='/icons/next-flux.png' height='34' width='56' />

                        <ItemActionFluxo current={true}>Gire 10 graus</ItemActionFluxo>

                    </div>
                </div>
            </div ></>

    )
}
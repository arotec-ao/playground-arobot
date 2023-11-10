import Image from 'next/image';

import ContainerBlocks from '@/components/Blocks/ContainerBlocks/ContainerBlocks';
import Styles from '@/styles/modules/playground/fluxoControl.module.css'

export default function FluxoControl() {
    return (
        <>
            {/* Controle de dados */}
            <div div className={Styles.FluxoControl} >
                <div className={Styles.FluxoModeSwitch}>
                    Blocos
                    <button className={Styles.FluxoModeSwitchButton}>
                        <Image src='/icons/down.png' width='20' height='20' />
                    </button>
                </div>

                <div className={Styles.fluxo}>
                    <ContainerBlocks type='start' />
                </div>
            </div></>
    )
}
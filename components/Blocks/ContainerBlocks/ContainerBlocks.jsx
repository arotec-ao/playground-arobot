import Styles from './ContainerBlocks.module.css'
import Image from 'next/image'
import { containerBlocksTypes } from './ContainerBlocksTypes';
import Block from '../Block/Block';


export default function ContainerBlocks({type}) {
    const typeContainerBlock = containerBlocksTypes[type];

    return (
        <div className={Styles.containerBlock}>
            <div className={Styles.cbHeader}>
                {typeContainerBlock.title}
                <button className={Styles.cbConfig}>
                    <Image src='/icons/config-play.png' width='15' height='15' />
                </button>
            </div>
            <div className={Styles.cbBlocks}>
                <div className={Styles.cbBlocksContainer}>
                    <Block key='0' type='move' />
                    <Block key='1' type='rotate' />
                </div>
                <button className={Styles.cbAddAction}>
                    <Image src='/icons/add-new.png' width='25' height='25' />
                </button>
            </div>


        </div>

    );
}
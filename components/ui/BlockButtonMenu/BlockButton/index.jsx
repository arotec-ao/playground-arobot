import Styles from './styles.module.css'
import Image from 'next/image'
import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import { useContext } from 'react';

export default function BlockButton({ block_data, children }) {
    const { addBlock } = useContext(PlaygroundContext);
    return (
        <div className={Styles.blockButton} onClick={() => { addBlock(block_data) }}>
            <Image src='/icons/plus.png' width='22' height='22' alt='' />
            {children}
        </div>
    );

}
import Styles from './ActionButton.module.css'
import Image from 'next/image'

export default function ActionButton({actionClick, children}){
    return (
        <button className={Styles.actionButton}>
            <Image src='/icons/plus.png' width='22' height='22' />
            {children}
        </button>
   
    );
    
}
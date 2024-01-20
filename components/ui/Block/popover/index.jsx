import Styles from './styles.module.css';

export default function PopoverBlocks({children}){
    return (
        <div className={Styles.popover} onClick={(ev)=>{
                ev.stopPropagation();
        }}>
            {children}
        </div>
    );
}
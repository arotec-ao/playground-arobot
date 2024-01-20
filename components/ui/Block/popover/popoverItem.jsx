import Styles from './styles.module.css';

export default function PopoverItem({children, action}){
    return (
        <div className={Styles.popoverItem} onClick={action}>
            {children}
        </div>
    );
}
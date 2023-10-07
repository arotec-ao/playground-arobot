import Styles from './ItemActionFluxo.module.css';

export default function ItemActionFluxo({children, current=false}){
return (
    <div className={Styles.itemAction+ ' ' + (current ? Styles.itemActionCurrent : '')}>
        {children}
    </div>
);
}
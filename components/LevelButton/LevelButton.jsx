import Styles from './LevelButton.module.css';

export default function LevelButton({level, active=false}){
 return (
    <button className={Styles.levelButton+ ' ' + (active ? Styles.levelButtonActive:'')}>
        Nível {level}
    </button>
 );
}
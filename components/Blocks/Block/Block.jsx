
import {blockTypes} from './BlockTypes';
import Styles from './Block.module.css';

export default function Block({type}){
    const blockType = blockTypes[type];

    return (<div className={Styles.block}>
 
        {
            blockType.sequence.map((value)=> {
                switch(value.type){
                    case 'text':
                        return    (<span>{value.content}</span>)
                    case 'input':
                        return (<input type={value.typeInput} defaultValue={value.initialValue} tag={value.tag} />)
                }
            })
        }
    </div>);
};
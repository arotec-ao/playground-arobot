import BlockInsideVariavel from "./variavel";
import BlockInsideConstante from "./constante";
import BlockInsideOperacao from './operacao';

export default function BlockInside({block}){
    switch(block.type){
        case 'variavel': 
        return (<BlockInsideVariavel  block={block}/>);
        case 'constante':
            return (<BlockInsideConstante  block={block}/>);
        default:
            return  (<BlockInsideOperacao  block={block}/>)

    }
}
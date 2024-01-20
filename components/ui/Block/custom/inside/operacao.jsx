import { useEffect, useState, useContext, useRef, useMemo } from 'react';
import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import Styles from './styles.module.css';

import Image from 'next/image';

import PopoverBlocks from '../../popover';
import PopoverItem from '../../popover/popoverItem';

import BlockInside from './';

import { convertStringToBoolean, convertBooleanToString , convertAnyToNumber} from '@/utils/tipos';

export default function BlockInsideOperacao({ block }) {

    

    const { niveis, currentNivel, runState } = useContext(PlaygroundContext);

    const [insides, setInsides] = useState([]);

    const [showMenus, setShowMenus] = useState([]);

    block.getValue = () => {

        let f1, f2;

        switch (block.type) {
            case 'somar':

                f1 = insides[0] != null ? insides[0].getValue() : '0';
                f2 = insides[1] != null ? insides[1].getValue() : '0';

                if(!Number.isNaN(f1.toString().trim()) && !Number.isNaN(f2.toString().trim())){
                    f1 = convertAnyToNumber(f1);
                    f2 = convertAnyToNumber(f2);
                }
                return f1 + f2;

            case 'subtrair':

                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);
                return f1 - f2;
            case 'multiplicar':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);
                return f1 * f2;
            case 'dividir':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);
                return f1 / f2;
            case 'modulo':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);
                return f1 % f2;
            case 'maior':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);

                return convertBooleanToString(f1 > f2);


            case 'menor':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);

                return convertBooleanToString(f1 < f2);
            case 'maior_igual':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);

                return convertBooleanToString(f1 >= f2);
            case 'menor_igual':
                f1 = insides[0] != null ? insides[0].getValue() : 0;
                f2 = insides[1] != null ? insides[1].getValue() : 0;

                f1 = convertAnyToNumber(f1);
                f2 = convertAnyToNumber(f2);

                return convertBooleanToString(f1 <= f2);
            case 'igual':
                f1 = insides[0] != null ? insides[0].getValue() :'';
                f2 = insides[1] != null ? insides[1].getValue() : '';

        

                return convertBooleanToString(f1 == f2);
            case 'e':
                f1 = insides[0] != null ? insides[0].getValue() : 'FALSO';
                f2 = insides[1] != null ? insides[1].getValue() : 'FALSO';

                return convertBooleanToString(
                    convertStringToBoolean(f1) && convertStringToBoolean(f2));
            case 'ou':
                f1 = insides[0] != null ? insides[0].getValue() : 'FALSO';
                f2 = insides[1] != null ? insides[1].getValue() : 'FALSO';

                return convertBooleanToString(
                    convertStringToBoolean(f1) || convertStringToBoolean(f2));
            case 'nao':
                f1 = insides[0] != null ? insides[0].getValue() : 'FALSO';

                return convertBooleanToString(
                    !convertStringToBoolean(f1));
        }


    }


    function onClickAdd(index) {
        if (insides.length[index] != null) {
            return;
        }

        setShowMenus(showMenus.map((menu, i) => {
            if (i == index) {
                return true;
            }

            return menu;
        }));
    }
    function leaveButton(index) {
        if (insides.length[index] != null) {
            return;
        }


        setShowMenus(showMenus.map((menu, i) => {
            if (i == index) {
                return false;
            }

            return menu;
        }));
    }

    const addInside = (type, index) => {
        setShowMenus(showMenus.map((menu, i) => {
            if (i == index) {
                return false;
            }

            return menu;
        }));
        setInsides(
            insides.map((inside, i) => {
                if (i == index) {
                    return {
                        type,
                        getValue: () => { },
                        clearInside: () => {
                            setInsides(insides.map((ins, ind) => {
                                if (ind == index) {
                                    return null;
                                }

                                return ins;
                            }))
                        }
                    }
                }

                return inside;
            })
        )
    }


    //para pegar as ordens
    const [ordem, insides_disponiveis] = useMemo(() => {
        const ordem_temp=[];
        const insides_disponiveis_temp =[];

        switch (block.type) {
            case 'somar':
                ordem_temp.push('input', '+', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'subtrair':
                ordem_temp.push('input', '-', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break
            case 'multiplicar':
                ordem_temp.push('input', '*', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'dividir':
                ordem_temp.push('input', '/', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'modulo':
                ordem_temp.push('input', '//', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'maior':
                ordem_temp.push('input', '>', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });

                break;
            case 'menor':
                ordem_temp.push('input', '<', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'maior_igual':
                ordem_temp.push('input', '>=', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'menor_igual':
                ordem_temp.push('input', '<=', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
                break;
            case 'igual':
                ordem_temp.push('input', '=', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'somar',
                    text: 'Somar'
                },
                    {
                        name: 'subtrair',
                        text: 'Subtrair'
                    }, {
                    name: 'multiplicar',
                    text: 'Multiplicar'
                }, {
                    name: 'dividir',
                    text: 'Dividir'
                }, {
                    name: 'modulo',
                    text: 'Módulo'
                });
            case 'e':
                ordem_temp.push('input', 'e', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'maior',
                    text: 'Maior'
                }, {
                    name: 'menor',
                    text: 'Menor'
                },
                    {
                        name: 'maior_igual',
                        text: 'Maior ou Igual'
                    }, {
                    name: 'menor_igual',
                    text: 'Menor ou Igual'
                }, {
                    name: 'igual',
                    text: 'Igual'
                }, {
                    name: 'e',
                    text: 'E'
                }, {
                    name: 'ou',
                    text: 'Ou'
                }, {
                    name: 'nao',
                    text: 'Não'
                });
                break;
            case 'ou':
                ordem_temp.push('input', 'ou', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'maior',
                    text: 'Maior'
                }, {
                    name: 'menor',
                    text: 'Menor'
                },
                    {
                        name: 'maior_igual',
                        text: 'Maior ou Igual'
                    }, {
                    name: 'menor_igual',
                    text: 'Menor ou Igual'
                }, {
                    name: 'igual',
                    text: 'Igual'
                }, {
                    name: 'e',
                    text: 'E'
                }, {
                    name: 'ou',
                    text: 'Ou'
                }, {
                    name: 'nao',
                    text: 'Não'
                });
                break;
            case 'nao':
                ordem_temp.push('nao', 'input');
                insides_disponiveis_temp.push({
                    name: 'constante',
                    text: 'Constante'
                }, {
                    name: 'variavel',
                    text: 'Variável'
                }, {
                    name: 'maior',
                    text: 'Maior'
                }, {
                    name: 'menor',
                    text: 'Menor'
                },
                    {
                        name: 'maior_igual',
                        text: 'Maior ou Igual'
                    }, {
                    name: 'menor_igual',
                    text: 'Menor ou Igual'
                }, {
                    name: 'igual',
                    text: 'Igual'
                }, {
                    name: 'e',
                    text: 'E'
                }, {
                    name: 'ou',
                    text: 'Ou'
                }, {
                    name: 'nao',
                    text: 'Não'
                });
                break;
        }


        const insides_temp = [];
        const menus_temp = [];
        for (const o of ordem_temp) {
            if (o == 'input') {
                insides_temp.push(null);
                menus_temp.push(false);
            }
        }
        setShowMenus(menus_temp);
        setInsides(insides_temp);

        return [ordem_temp, insides_disponiveis_temp];

    }, []);

    const content = useMemo(() => {

        if(ordem == undefined || ordem == null){
            return '';
        }

        var input_index = 0;
        return ordem.map((item) => {
            if (item == 'input') {
                const i = input_index++;
                return (
                    <button key={i} disabled={runState == 'run' ? true : false} className={(insides[i] != null ?
                        Styles.blockAddInseded : Styles.blockAdd)} onClick={(ev) => {
                            ev.stopPropagation();
                            onClickAdd(i);
                        }} onBlur={(ev) => {
                            ev.stopPropagation();
                            leaveButton(i);
                        }} type='button' >
                        {
                            insides[i] != null ? (<BlockInside block={insides[i]} />) : ''
                        }
                        {showMenus[i] == true ? (<PopoverBlocks>

                            {
                                insides_disponiveis.map((ins) => {
                                    return (<PopoverItem action={() => {
                                        addInside(ins.name, i)
                                    }}>{ins.text}</PopoverItem>)
                                })
                            }
                        </PopoverBlocks>) : ''}
                    </button>
                );
            }

            return ' ' + item + ' ';
        });
    }, [insides, showMenus, ordem, insides_disponiveis]);

    return (<div className={Styles.blockInside} onClick={(ev)=>{
        ev.stopPropagation();
    }}>
        {content}
        <Image onClick={() => {
            block.clearInside();
        }} src='/icons/add.png' width='16' height='16' className={Styles.delete} alt='' />
    </div>);
}
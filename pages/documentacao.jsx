import { useEffect, useMemo, useState } from 'react';

import styles from '@/styles/modules/docs.module.css';

import Image from 'next/image';
import Link from 'next/link';


//sections components
import NocaoGeral from '@/components/pages/docs/nocaoGeral';
import Tutorial from '@/components/pages/docs/tutorial';
import Blocos from '@/components/pages/docs/blocos';
import Execucao from '@/components/pages/docs/execucao';
import Niveis from '@/components/pages/docs/niveis';
import Projectos from '@/components/pages/docs/projectos';



export default function Documentacao() {

    const [showSidebar, setShowSidebar] = useState(false);

    //sections
    const sections = useMemo(() => {
        return [
            {
                title: 'Noção geral',
                element: <NocaoGeral />,
            },
            {
                title: 'Tutorial',
                element: <Tutorial />,
            },
            {
                title: 'Blocos',
                element: <Blocos />,

            }, {
                title: 'Execução',
                element: <Execucao />,
            },
            {
                title: 'Níveis',
                element: <Niveis />,
            }, {
                title: 'Projectos',
                element: <Projectos />,
            }
        ]
    }, []);

    //section atual
    const [sectionCurrent, setSectionCurrent] = useState(0);

    return (
        <div className={styles.docs} onClick={()=>{
            if (showSidebar) {
                setShowSidebar(false);
            }
        }}>
            {/* Header */}
            <div className={styles.docsHeader}>
                <div className={styles.docsHeaderTitle}>
                    <Image src='/icons/icon.png' width='48' height='48' alt='' />
                    Documentação
                </div>

                <div className={styles.docsHeaderRight}>
                    <Link className={styles.linkToHome} href='/'>
                        <Image src='/icons/home.png' width='22' height='22' alt='' />
                        Ir para ínicio
                    </Link>
                </div>
            </div>

            {/* Area principal */}
            <div className={styles.docsMain}>
                {/* Sidebar */}
                <div className={styles.docsSidebar + ' ' +
                    (showSidebar ? styles.docsSidebarShow : '')} onClick={(ev) => {
                        ev.stopPropagation();
                    }}>
                    <div className={styles.sidebarContainer}>
                        {sections.map((section, index) => {
                            return (
                                <div key={index} className={styles.sidebarLink + ' ' +
                                    (index == sectionCurrent ? styles.sidebarLinkCurrent : '')}
                                    onClick={(ev) => {
                                        setSectionCurrent(index);

                                        if (showSidebar) {
                                            setShowSidebar(false);
                                        }
                                    }}>{section.title}</div>
                            )
                        })}
                    </div>
                </div>

                {/* Conteudo */}
                <div className={styles.docsContent}>


                    <div className={styles.contentHeader}>
                        {/* para esconder e mostrar o sidebar */}
                        <button type='button' className={styles.menuButton} onClick={() => {
                            setShowSidebar(true);
                        }}>
                            <Image src='/icons/menu-black.png' width='16' height='16' alt='icon' />
                        </button>

                        {sections[sectionCurrent].title}
                    </div>

                    <div className={styles.contentMain}>
                        {sections[sectionCurrent].element}
                    </div>

                    <div className={styles.contentFooter}>

                        {
                            //secção anterior
                            sectionCurrent > 0 && (
                                <div  className={styles.previousSection}
                                    onClick={(ev) => {
                                        setSectionCurrent(sectionCurrent - 1);
                                    }}>
                                    <Image src='/icons/arrow-left.png' width='20' height='20' alt='' />
                                    Secção Próxima
                                </div>
                            )
                        }

                        {
                            //próxima secção
                            sectionCurrent < sections.length - 1 && (
                                <div className={styles.nextSection} 
                                    onClick={(ev) => {
                                        setSectionCurrent(sectionCurrent + 1);
                                    }}>

                                    Próximo secção
                                    <Image src='/icons/arrow right.png' width='20' height='20' alt='' />

                                </div>
                            )
                        }


                    </div>
                </div>
            </div>
        </div>
    );
}
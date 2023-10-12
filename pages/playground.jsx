import Image from 'next/image'
import Styles from '@/styles/modules/Playground.module.css'
import ActionButtonMenu from '@/components/ActionButtonMenu/ActionButtonMenu'
import TooltipActionButton from '@/components/ActionButtonMenu/Tooltip/TooltipActionButton'
import ContainerBlocks from '@/components/Blocks/ContainerBlocks/ContainerBlocks'
import LevelButton from '@/components/LevelButton/LevelButton'
import ItemActionFluxo from '@/components/ItemActionFluxo/ItemActionFluxo'

export default function Playground() {
    return (

        <div className={Styles.app}>

            {/* Aside Functions */}
            <aside className={Styles.sidebar}>
                <button className={Styles.btnMenu}>
                    <Image className={Styles.btnMenuIcon} src='/icons/four-squares.png' width='40' height='40' />
                </button>

                <div className={Styles.actionsContainer}>
                    <ActionButtonMenu type='robotic' />
                    <ActionButtonMenu type='condition' />
                </div>

            </aside>
            {/* Main Area */}
            <div className={Styles.mainArea}>
                {/* Actions e Run Area */}

                <div className={Styles.mainActionArea}>
                    {/* Controle de dados */}
                    <div className={Styles.FluxoControl}>
                        <div className={Styles.FluxoModeSwitch}>
                            Blocos
                            <button className={Styles.FluxoModeSwitchButton}>
                                <Image src='/icons/down.png' width='20' height='20' />
                            </button>
                        </div>

                        <div className={Styles.fluxo}>
                            <ContainerBlocks type='start' />
                        </div>
                    </div>
                    {/* Area Background */}
                    <div className={Styles.playgroundArea +' '+Styles.areaActive}>

                        <div className={Styles.panelRunFunctions}>
                            <button className={Styles.btnRunFunction}>
                                <Image  src='/icons/pause.png' width='25' height='25' />
                            </button>

                            <button className={Styles.btnRunFunction}>
                                <Image src='/icons/play.png' width='25' height='25' />
                            </button>

                            <button className={Styles.btnRunFunction}>
                                <Image src='/icons/step.png' width='25' height='25' />
                            </button>
                        </div>

                        <div className={Styles.projectoInfo}>
                            Meu teste
                            <button className={Styles.btnChangeProject}>
                                <Image src='/icons/expand-arrow.png' width='25' height='25' />
                            </button>
                        </div>

                        {/* Quadro */}
                        <div className={Styles.boardPlayground}>
                            {/* Box */}
                            <div className={Styles.arobot}></div>

                        </div>
                    </div>
                </div>
                {/* Switch Area em Mobile Styles */}
                <div className={Styles.switchArea}>
                    <button className={Styles.btnSwitchArea}>
                        Estrutura
                    </button>

                    <button className={Styles.btnSwitchArea + ' ' + Styles.btnSwitchAreaCurrent}>
                        Execução
                    </button>
                </div>
                {/* Fluxo de dados */}
                <div className={Styles.FooterPanel}>
                    <div className={Styles.Levels}>
                        <div className={Styles.LevelsContainer}>
                            <LevelButton level='1' active={true} />
                            <LevelButton level='2' />
                            <LevelButton level='3' />

                        </div>
                        <button className={Styles.BtnAddLevel}>
                            <Image src='/icons/add.png' width='20' height='20' />
                        </button>
                    </div>

                    <div className={Styles.FluxoLogic}>
                        <div className={Styles.blocksFluxoContainer}>

                            <ItemActionFluxo>Move 3 passos</ItemActionFluxo>

                            <Image src='/icons/next-flux.png' height='34' width='56' />

                            <ItemActionFluxo current={true}>Gire 10 graus</ItemActionFluxo>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
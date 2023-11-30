import Styles from './styles.module.css';
import PlaygroundContext from '@/components/contexts/PlaygroundContext';
import { useContext, useEffect, useRef, useState } from 'react';



//fórmula de conversão de graus para radiano. ((PI * 2) /360) * graus
function Deg2Rad(deg) {
    return ((Math.PI * 2) / 360) * deg;
}
const pos = { x: 0, y: 0 };
var rot = 0;
const timeUpdate = 15;

var currentAnimation = null;

export default function ArobotPlayer() {
    const { arobotTriggers, runState } = useContext(PlaygroundContext);
    const arobot = useRef(null);
    const [luzActive, setLuzActive] = useState(false);


    useEffect(() => {
        const idInterval = setInterval(() => {
            if (arobot.current) {
                ///   arobot.current.scrollIntoView(true);
            }

        }, 100);

        return () => {
            clearInterval(idInterval);
        }
    }, []);

    useEffect(() => {

        //redefine tua para estado inicial
        if (runState == 'pause') {
            if (arobot.current) {

                if (currentAnimation) {
                    currentAnimation.cancel();
                }

                arobot.current.animate([
                    {
                        left: 0 + 'px',
                        top: 0 + 'px',
                        transform: 'rotate(0deg)'
                    },


                ], {
                    duration: 0,
                    fill: 'forwards'
                })
                pos.x = 0;
                pos.y = 0;
                rot = 0;
                setLuzActive(false);
            }
        }

    }, [runState]);

    //andar
    arobotTriggers.andar = (passos) => {
        passos = parseInt(passos.toString());
        return new Promise((resolve, reject) => {
            currentAnimation = arobot.current.animate([
                {
                    left: pos.x + 'px',
                    top: pos.y + 'px'
                },
                {
                    left: (pos.x + (passos * Math.cos(Deg2Rad(rot)))) + 'px',
                    top: (pos.y + (passos * Math.sin(Deg2Rad(rot)))) + 'px'
                }
            ], {
                duration: timeUpdate * Math.abs(passos),
                easing: 'linear',
                fill: 'forwards'
            });
            currentAnimation.onfinish = () => {
                pos.x = pos.x + (passos * Math.cos(Deg2Rad(rot)));
                pos.y = pos.y + (passos * Math.sin(Deg2Rad(rot)));
                resolve();
            }
        })

    }

    //rotacionar
    arobotTriggers.rotacionar = (graus) => {
        graus = parseInt(graus.toString());
        return new Promise((resolve, reject) => {
            currentAnimation = arobot.current.animate([
                { transform: 'rotate(' + rot + 'deg)' },
                { transform: 'rotate(' + (rot + graus) + 'deg)' }
            ], {
                duration: timeUpdate * Math.abs(graus),
                easing: 'linear',
                fill: 'forwards'
            })
            currentAnimation.onfinish = () => {
                rot = rot + graus;
                resolve();
            }
        })
    }

    //rotacionar exactamente os graus
    arobotTriggers.rotacionarExato = (graus) => {
        graus = parseInt(graus.toString());
        return new Promise((resolve, reject) => {
            currentAnimation = arobot.current.animate([
                { transform: 'rotate(' + rot + 'deg)' },
                { transform: 'rotate(' + (graus) + 'deg)' }
            ], {
                duration: timeUpdate * Math.abs(graus - rot),
                easing: 'linear',
                fill: 'forwards'
            })
            currentAnimation.onfinish = () => {
                rot = graus;
                resolve();
            }
        })
    }

    //ligar o farol
    arobotTriggers.ligarFarol = () => {
        setLuzActive(true);
    }

    //desligar o farol
    arobotTriggers.desligarFarol = () => {
        setLuzActive(false);
    }

    return (<div className={Styles.arobot + ' ' + (luzActive ? Styles.arobotLuzActive : '')} ref={arobot}>
        <img width='70px' height='auto' src="/player.png" alt="" />
    </div>);
}

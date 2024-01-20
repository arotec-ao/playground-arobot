import { createContext } from 'react';
const PlaygroundContext = createContext();

export default PlaygroundContext;


export const allBlockTypes = {
    motion: {
        title: 'Movimentação',
        description: 'Permite definir ações relacionaodos a movimentação, desde mover a rotação',
        iconUrl: '/icons/motion.png',
        blocks: [
            {
                name: 'mover',
                title: 'Mover',
                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Move',

                        },
                        {
                            type: 'input',
                            typeInput: 'number',
                            value: 0
                        },
                        {
                            type: 'text',
                            content: 'passos'
                        }
                    ]
            },


            {
                name: 'rotate',
                title: 'Girar',
                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Gire'
                        },
                        {
                            type: 'input',
                            typeInput: 'number',
                            value: 0
                        },
                        {
                            type: 'text',
                            content: "graus"
                        }
                    ]
            },

            {
                name: 'rotate-exact',
                title: 'Giro exacto',
                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Gire para'
                        },
                        {
                            type: 'input',
                            typeInput: 'number',
                            value: 0
                        },
                        {
                            type: 'text',
                            content: "graus em relação ao plano"
                        }
                    ]
            },
        ]
    },
    sons: {
        title: 'Sons',
        description: 'Permite emissão de sons e efeitos sonoros',
        iconUrl: '/icons/sound.png',

        blocks: [
            {
                name: 'buzinar',
                title: 'Buzinar',

                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Emitir o som da buzina'
                        },
                    ]
            },
        ]

    },

    /* temporariamente indisponivel
    
    controle: {
        title: 'Controle de Fluxo',
        description: 'Permite controlar o fluxo de execução dos seus blocos',
        iconUrl: '/icons/fluxo.png',

        blocks: [

            {
                name: 'se',
                title: 'Se',

                sequence:
                    [
                      
                    ]
            },

            {
                name: 'escolha',
                title: 'Escolha',

                sequence:
                    [
                      
                    ]
            },

            {
                name: 'repita',
                title: 'Repita',

                sequence:
                    [
                      
                    ]
            },

            {
                name: 'enquanto',
                title: 'Enquanto',

                sequence:
                    [
                      
                    ]
            },
          
        ]

    },
    */

    variavel_console: {
        title: 'Variavel e Saída de dados',
        description: 'Permite criar variáveis e enviar informações no console do Playground',
        iconUrl: '/icons/variavel.png',

        blocks: [

            {
                name: 'criar_variavel',
                title: 'Criar variavel',

                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Define',

                        },
                        {
                            type: 'input',
                            typeInput: 'text',
                            value: ''
                        },

                        {
                            type: 'text',
                            content: 'com o valor',

                        },

                        {
                            type: 'input',
                            typeInput: 'text',
                            value: ''
                        },
                    ]
            },
            {
                name: 'console_message',
                title: 'Emitir mensagem',

                sequence:
                    [
                      
                    ]
            },

        ]

    },

    recursos: {
        title: 'Recursos',
        description: 'Permite executar recursos do AROBOT e suas funcionalides extras',
        iconUrl: '/icons/resource.png',
        blocks: [

            {
                name: 'esperar',
                title: 'Esperar',

                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Espere'
                        },
                        {
                            type: 'input',
                            typeInput: 'number',
                            value: 1
                        },
                        {
                            type: 'text',
                            content: 'segundo(s)'
                        },
                    ]
            },
            {
                name: 'acender_luz',
                title: 'Acender farol',

                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Acender o farol'
                        },
                    ]
            },

            {
                name: 'apagar_luz',
                title: 'Apagar farol',

                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Apagar o farol'
                        },
                    ]
            },
        ]
    },
    /*
    niveis: {
        title: 'Transições', 
        description: 'Permite realizar funcionalidades relacionada aos niveis', 
        iconUrl: '/icons/transition.png',
        blocks: [
            {
                name: 'avancar_nivel',
                title: 'Próximo nível',
              
                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Ir para próximo nível'
                        },
                    ]
            },

            {
                name: 'recuar_nivel',
                title: 'Nível Anterior',
              
                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Recuar para nível anterior'
                        },
                    ]
            },

            {
                name: 'nivel_especifico',
                title: 'Nível Específico',
              
                sequence:
                    [
                        {
                            type: 'text',
                            content: 'Vai para nível '
                        },
                        {
                            type: 'input',
                            typeInput: 'number',
                            value: 1
                        },
                    ]
            },
        ]
    },
    */

};

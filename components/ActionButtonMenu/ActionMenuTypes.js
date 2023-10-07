export const actionMenuTypes =   {
    robotic: {
        title: 'Transições', 
        description: 'Permite realizar funcionalidades relacionada aos niveis', 
        iconUrl: '/icons/robotic.png', 
        actions: [
            {
                title: 'Trocar de nível',
                actionClick: ()=>{}
            }, 
            {
                title: 'Próximo nível', 
                actionClick: ()=>{}
            }

        ]
    }, 
    condition: {
        title:'Condições', 
        description: 'Permite realizar controle de fluxo por meio de condições lógicas',
        iconUrl: '/icons/condition.png',
        actions:[
            {
                title:'Se', 
                actionClick:()=>{}
            }, 
            {
                title: 'Escolha', 
                actionClick: ()=>{}
            }
        ]
    }
}
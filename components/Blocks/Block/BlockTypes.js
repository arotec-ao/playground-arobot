export const blockTypes = {
    move: {
        sequence:
        [
            {
                type: 'text',
                content:'Move', 

            }, 
            {
                type: 'input', 
                typeInput: 'number',
                tag: 'move_step_value',
                initialValue: 0
            },
            {
                type: 'text', 
                content: 'passos'
            }
        ]
    }, 

    rotate: {
        sequence:
        [
            {
                type:'text', 
                content:'Gire'
            }, 
            {
                type:'input', 
                typeInput: 'number',
                tag: 'rotate_value', 
                initialValue:0
            }, 
            {
                type:'text', 
                content:"graus"
            }
        ]
    }

}
export function convertStringToBoolean(value){
    if(value == 'VERDADEIRO'){
        return true;
    }
    return false;
}

export function convertBooleanToString(value){
    if(value == true){
        return 'VERDADEIRO';
    }
    else{
        return 'FALSO';
    }
}

export function convertAnyToNumber(value){

    if(typeof value == 'string'){
        value = value.trim();
    }
    if(Number.isNaN(value)){
        return 0;
    }
    else {
        if(Number.isInteger(value)){
            return parseInt(value);
        }
        return parseFloat(value);
    }
}
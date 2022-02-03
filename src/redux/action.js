export const increment=(y)=>{
    return {type:'INCREMENT',payload:y}    
}

export const decrement=(x)=>{
    return {type:'DECREMENT',payload:x}
}

export const incrementAge=()=>{
    return {type:'INCREMENT_AGE'}    
}

export const decrementAge=(x)=>{
    return {type:'DECREMENT_AGE',payload:x}
}

export const changeFriend=(x)=>{
    return {type:'CHANGE',payload:x}
}


const initialState={
    state:{count:0,age:10},
    text:['hello','my','friend']
}

export const reducer=(state=initialState,action)=>{
    switch (action.type) {
        case 'INCREMENT':
            return {...state,state:{...state.state,count:state.state.count+action.payload}}
        case 'DECREMENT':
            return {...state,state:{...state.state,count:state.state.count-action.payload}} 
        case 'INCREMENT_AGE':  
            return {...state,state:{...state.state,age:state.state.age+1}}
        case 'DECREMENT_AGE':
            return {...state,state:{...state.state,age:state.state.age-action.payload}}
        case 'CHANGE':
            // return {...state,text:state.text.map(el=>el==='friend'?action.payload:el)}    
            state.text.splice(2,1,action.payload)  
            return {...state,text:state.text}        

            default:
            return state;
    }
}







import { createContext, useReducer} from "react";

export const  GlobalContext = createContext()

    const changeState = (state,action) => {
        const {type , payload} = action
        switch (type) {
            case "LOG_IN":
                return {...state, user:payload}
            case "LOG_OUT":
                return {...state,user:null}
            default:
                return state
        }
    }

function GlobalContextProvider({children}) {
    const[state,dispatch] = useReducer(changeState, {
        user:null,
        product:[]
    })
    return (
        <GlobalContext.Provider value={{...state}}>
            {children}
        </GlobalContext.Provider>
    )
}
export default GlobalContextProvider

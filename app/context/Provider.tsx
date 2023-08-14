'use client'
import { createContext ,useContext,useReducer} from "react";
import data from "../data/data.json";
import { initialStateProps,dataType,actionProps } from "../components/types";

const initialState:initialStateProps={
    data:data as dataType[],
    index:0,
}
 const QuizContext = createContext<{
    state: initialStateProps;
    dispatch: React.Dispatch<actionProps>;
}>({
    state: initialState,
    dispatch: () => undefined, // Initial dispatch function, will be overridden
  });



const reducer = (state:initialStateProps,action:actionProps) => {
    switch(action.type){
      case 'NEXT':
        return {
          ...state,
          index:state.index + 1
        }
      case 'SKIP':
        return {
          ...state,
          data:state.data.map((item:dataType,index:number) => {
            if(index === action.payload.index){
              return {
                ...item,
                selectedOption:"",
              }
            }
            return item
          })
        }
      case 'ANSWERED':
        return {
          ...state,
          data:state.data.map((item:dataType,index:number) => {
            if(index === action.payload.index){
              return {
                ...item,
                selectedOption:action.payload.selectedValue,
              }
            }
            return item
          })
       
        }
      default:
        return state
    }
  }

export const Provider=({children}:{children:React.ReactNode}) => {

    const [state,dispatch] = useReducer(reducer,initialState)

    return (
        <QuizContext.Provider value={{state,dispatch}}>
            {children}
         </QuizContext.Provider>   
    )
}

export const useQuiz = () => useContext(QuizContext)




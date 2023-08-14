

interface dataType {
    question:string,
    options:string[],
    correctOption:string,
    selectedOption:string,
    difficulty:string,
    marks:number 
  }

  interface initialState {
    data:dataType[],
    index:number,
  }
  
  interface NextAction{
    type:"NEXT",
  }
  interface SkipAction{
    type:"SKIP",
    payload:{
      index:number
    }
  }
  interface AnsweredAction{
    type:"ANSWERED",
    payload:{
      index:number,
      selectedValue:string
    }
  }

type actionProps=NextAction|SkipAction|AnsweredAction

export type {dataType,initialState,actionProps}


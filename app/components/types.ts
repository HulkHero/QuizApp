

interface dataType {
    question:string,
    options:string[],
    correctOption:string,
    selectedOption:string,
    difficulty:string,
    marks:number 
  }

  interface initialStateProps {
    data:dataType[],
    index:number,
  }
  
  interface actionProps {
    type:string ,
    payload?:any
  
  
  }

export type {dataType,initialStateProps,actionProps}


import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface QuestionState {
  name:string,
  type:string,
  user:string
  }

  const initialState: QuestionState ={
    name:"",
    type:"",
    user:""
  } 

 const questionSlice = createSlice({
      name:'questions',
      initialState,
      reducers:{
          addQuestion : (state:any,  action:PayloadAction<string>)=>{
              state=action.payload;
          }
      }
  });

  export const {addQuestion} = questionSlice.actions
  export default questionSlice.reducer;
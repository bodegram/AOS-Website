import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import Axios from 'axios'




const axios = Axios.create({
    baseURL: 'http://localhost:8000/api'
    
   
})

export const loginAsync = createAsyncThunk('auth/authUser', async (credentials, {dispatch,rejectWithValue})=>{
    try{
      const response = await axios.post('/login', credentials)
      
      if(response.data.status == "success"){
        
        dispatch(authActions.setUser({user: response.data.user, balance: response.data.balance, firstname: response.data.fname, lastname: response.data.lname, phoneno: response.data.phoneno, username: response.data.username}))
        localStorage.setItem('accessToken', response.data.accessToken)
        dispatch(authActions.setMesssage(response.data.message))
      }
      else{
        dispatch(authActions.setError(true))
        dispatch(authActions.setMesssage(response.data.message))
      }
    }catch(error){
        dispatch(authActions.setError(true))
        return rejectWithValue(error.response.data)
    }
})

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: '',
        balance: '',
        firstname: '',
        lastname: '',
        username: '',
        error: false,
        message: '',
        phoneno: '',
    },
    reducers: {
        setUser: (state, action)=>{
            state.user = action.payload.user
            state.balance = action.payload.balance
            state.username = action.payload.username
            state.phoneno = action.payload.phoneno
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.isLoggedIn = true
        },
        setError: (state, action)=>{
            state.error = action.payload
        },
        setMesssage: (state, action)=>{
             state.message = action.payload
        },
        clearMessage: (state, action)=>{
            state.message = ''
            state.error = false
        }
      

      
    },
  
})

export const authActions = authSlice.actions


export default authSlice
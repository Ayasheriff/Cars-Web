import {createSlice} from '@reduxjs/toolkit'


const initialState = {
  user:null,
};

export const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{      
      userInfo:(state=initialState,action)=>{   
            state.user = action.payload; 
        },
        logout:(state)=>{  
            state.user=null;
        }
    }
})

export const {userInfo,logout}=userSlice.actions;  

export const selectUser = (state)=>state.user.user; 

export default userSlice.reducer;




// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"



// const  initialState = {
//   username: "",
//   lastname:"",
//   email: "",
//   password:"",
//   isFetching: false,
//   isSuccess: false,
//   isError: false,
//   errorMessage: "",
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     // Reducer comes here
//   },
//   extraReducers: {
//     // Extra reducer comes here
//     [signupUser.fulfilled]: (state, { payload }) => {
//       state.isFetching = false;
//       state.isSuccess = true;
//       state.email = payload.user.email;
//       state.username = payload.user.name;
//     },
//     [signupUser.pending]: (state) => {
//       state.isFetching = true;
//     },
//     [signupUser.rejected]: (state, { payload }) => {
//       state.isFetching = false;
//       state.isError = true;
//       state.errorMessage = payload.message;
//     }
//   },
// })

// export const signupUser = createAsyncThunk(
//   "users/signupUser",
//   async ({ name, email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         "http://127.0.0.1:5173/.com/api/v1/users",
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password,
//           }),
//         }
//       )
//       let data = await response.json()
//       console.log("data", data)
//       if (response.status === 200) {
//         localStorage.setItem("token", data.token)
//         return { ...data, username: name, email: email }
//       } else {
//         return thunkAPI.rejectWithValue(data)
//       }
//     } catch (e) {
//       console.log("Error", e.response.data)
//       return thunkAPI.rejectWithValue(e.response.data)
//     }
//   }
// )
// export const userSelector = state => state.user;













// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   user: null,
//   // token:'',
//   // loading:false,
// }



// export const user = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setUserInfo: (state, user) => {
//         console.log(user);
//       state.user = user.payload;
//     },
    
//   },
// })

// // Action creators are generated for each case reducer function

// export const { setUserInfo } = user.actions

// export default user.reducer


// const loginUser = createAsyncThunk('user',async(body)=>{
//     let res = await fetch('http://127.0.0.1:5173/', {
//         method:'post',
//         headers:{
//             'content-type': 'application/JSON',
//             Authorization: localStorage.getItem('token',)
//         },
//         body:JSON.stringify(body)
//     })
//     return await res.json();
// })


// // import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
// // export const userSlice = createSlice({
// //   name: "user",
// //   initialState: {
// //     name: "",
// //     lastName: "",
// //     email: "",
// //     password: "",
// //     isFetching: false,
// //     isSuccess: false,
// //     isError: false,
// //     errorMessage: "",
// //   },
// //   reducers: {
// //     // Reducer comes here
// //   },
// //   extraReducers: {
// //     // Extra reducer comes here
// //   },
// // })
// // export const userSelector = state => state.user













// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"


// const initialState = {
//   user: null,
//   token:'',
//   loading:false,
// }

// export const userSlice = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     // Reducer comes here
//     name: "",
//     lastname: "",
//     email: "",
//     password: "",
//     isFetching: false,
//     isSuccess: false,
//     isError: false,
//     errorMessage: "",
//   },
//   extraReducers: {
//     [signupUser.fulfilled]: (state, { payload }) => {
//           state.isFetching = false;
//           state.isSuccess = true;
//           state.email = payload.user.email;
//           state.username = payload.user.name;
//         },
//         [signupUser.pending]: (state) => {
//           state.isFetching = true;
//         },
//         [signupUser.rejected]: (state, { payload }) => {
//           state.isFetching = false;
//           state.isError = true;
//           state.errorMessage = payload.message;
//         }
//   },
// })


// export const signupUser = createAsyncThunk(
//   "users/signupUser",
//   async ({ name, lastname, email, password }, thunkAPI) => {
//     try {
//       const response = await fetch(
//         "http://127.0.0.1:5173.com//api/v1/users",
//         {
//           method: "POST",
//           headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({
//             name,
//             email,
//             password,
//           }),
//         }
//       )
//       let data = await response.json()
//       console.log("data", data)
//       if (response.status === 200) {
//         localStorage.setItem("token", data.token)
//         return { ...data, name: name, lastname:lastname, email: email , password:password }
//       } else {
//         return thunkAPI.rejectWithValue(data)
//       }
//     } catch (e) {
//       console.log("Error", e.response.data)
//       return thunkAPI.rejectWithValue(e.response.data)
//     }
//   }
// )

// export const userSelector = state => state.user
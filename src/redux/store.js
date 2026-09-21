import {configureStore} from "@reduxjs/toolkit"
import counterReducer from './feature/countSlice'

export const store = configureStore(
    {
        reducer:{
            counter:counterReducer
        }
    }
)
import {createSlice} from '@reduxjs/toolkit';
import * as icons from "../layout/Header/HeaderIcons";



export const appSlice = createSlice({
    name: 'app',
    initialState: {
        headerInfo: {
            leftIcon: icons.UserIcon,
            title: 'プロファイル',
            hasRightBtn: false,
            rightBtn: null,
        }
    },

    reducers: {
        updateHeaderInfo: (state, action) => {
            console.log("action", action);
            state.headerInfo = action.payload;
        }
      
    }
})


export const 
    {
        updateHeaderInfo,

    } = appSlice.actions;


export default appSlice.reducer;
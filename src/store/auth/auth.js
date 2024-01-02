import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id:1,
        username:"yakupzngn16",
        fullname:"./yakupzengin",
        avatar:"https://pbs.twimg.com/profile_images/1700596692305780736/TLSgDYrX_400x400.jpg"
    },
    accounts: []
}
const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //state manipüle etme metodları
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id != account.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _removeAccount, _setCurrentAccount } = auth.actions
export default auth.reducer
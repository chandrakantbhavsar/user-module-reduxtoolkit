import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    users: []
};

const userSlice = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.users.push(action.payload);
        },
        updateUser: (state, action) => {
            const { id } = action.payload;
            const index = state.users.findIndex(user => user.id === id);
            if (index !== -1) {
                state.users[index] = { ...state.users[index], ...action.payload };
            }
        },
        deleteUser: (state, action) => {
            const id = action.payload;
            state.users = state.users.filter(user => user.id !== id);
        },
    }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;
export default userSlice.reducer;

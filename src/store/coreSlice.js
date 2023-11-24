import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedMenu: 'home',
};

export const coreSlice = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setMenu: (state, action) => {
      return {
        ...state,
        selectedMenu: action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setMenu } = coreSlice.actions;

export default coreSlice.reducer;

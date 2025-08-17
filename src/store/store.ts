import { configureStore } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';


const orderSlice = createSlice({
  name: 'order',
  initialState:{
    orders: [],
    loading: false,
    error: null,
  },
  reducers: { 
    setBookOrders: (state, action) => {
      state.orders = action.payload;
    }
  },
});

export const { setBookOrders} = orderSlice.actions;
export default orderSlice.reducer;

export const store = configureStore({
  reducer: {
    orders: orderSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
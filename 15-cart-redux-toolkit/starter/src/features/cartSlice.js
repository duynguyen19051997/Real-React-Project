import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import cartItems from "../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 4,
  total: 0,
  isLoading: true,
};

const url = "https://course-api.com/react-useReducer-cart-project";

export const getCartItems = createAsyncThunk(
  "cart/getCartItems",
  async (name, thunkAPI) => {
    try {
      const resp = await axios.get(url);
      return resp.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getCartItems.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCartItems.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cartItems = action.payload;
      })
      .addCase(getCartItems.rejected, (state, action) => {
        state.isLoading = false;
        console.log(action.payload);
      });
  },
  reducers: {
    clearCart: () => {
      return { cartItems: [], amount: 0, total: 0, isLoading: false };
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter((x) => x.id !== action.payload);
    },
    increaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((x) => x.id === id);
      item.amount = item.amount + 1;
    },
    decreaseItem: (state, action) => {
      const id = action.payload;
      const item = state.cartItems.find((x) => x.id === id);
      item.amount = item.amount - 1;
    },
    calculateTotals: (state) => {
      const { amount, total } = state.cartItems.reduce(
        (total, item) => {
          total.amount += item.amount;
          total.total += item.amount * item.price;
          return total;
        },
        {
          amount: 0,
          total: 0,
        }
      );
      state.amount = amount;
      state.total = total;
    },
  },
});

export const {
  clearCart,
  removeItem,
  increaseItem,
  decreaseItem,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;

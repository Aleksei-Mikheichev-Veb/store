import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async (_, thunkAPI) => {
        try {
            const response = await fetch('http://localhost:5000/api')

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const productsSlice = createSlice({
    name: "products",
    initialState: {
        items: [

        ],
        loading: false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.items = action.payload.items || [];
                state.error = null;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Произошла ошибка при загрузке товаров"
            })
    }
});

export default productsSlice.reducer;
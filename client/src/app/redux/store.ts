import {configureStore} from "@reduxjs/toolkit";

import authReducer from "./slices/auth-slice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		// home: homeReducer,
		// recipes: recipesReducer,
		// style: styleReducer,
		// newRecipe: newRecipeReducer
	}
})

// @ts-ignore
window.store = store

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
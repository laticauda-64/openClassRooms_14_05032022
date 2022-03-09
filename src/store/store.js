import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employees/employeeSlice";
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
	key: "employeeList",
	version: 1,
	storage,
};

const persistedReducer = persistReducer(persistConfig, employeeReducer);

export default configureStore({
	reducer: { employee: persistedReducer },
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
			},
		}),
});

// В папке shared хранится всё максимально общее для проекта, что в теории,
// может вообще переходить из одного проекта в другой.
// В частности, тут находится настройка стора и типов

import userSlice from "@/features/users/slices/userSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        [userSlice.name]: userSlice.reducer
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
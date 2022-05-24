import { createContext, useReducer } from "react";
import { postsData } from "../../FilePage/data/data";
import postReducer from "./postReducer";

export const PostContext = createContext();

export function PostContextProvider({children}) {
    const [value, dispatch] = useReducer(postReducer, {
        posts: postsData,
        postDetail: {},
    })

    const ContextProvider = PostContext.Provider;

    return (
        <ContextProvider
            value={{
                postContext: value,
                dispatch,
            }}
        >
            {children}
        </ContextProvider>
    )
}
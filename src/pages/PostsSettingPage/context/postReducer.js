import { isFulfilled } from "@reduxjs/toolkit";
import { CREATE_POST, DELETE_POST, GET_DETAIL_POST, UPDATE_POST, UPDATE_STATUS } from "./postTypes";


const postReducer = (state, action) => {
    switch (action.type) {
        case CREATE_POST: {
            state.posts.push(action.payload);
            return {
                ...state,
                posts: state.posts,
            }
        }

        case UPDATE_STATUS: {
            console.log("id", action.payload);

            const updatedPosts = [...state.posts];
            const index = updatedPosts.findIndex(item => item.id === action.payload);
            console.log("index", index);
            if(index >= 0) {
                updatedPosts[index] = {...updatedPosts[index], valid: !updatedPosts[index].valid}
            }
            return {
                ...state,
                posts: updatedPosts,
            }
        }

        case GET_DETAIL_POST: {
            const post = state.posts.find(item => item.id == action.payload);

            if(post) {
                return {
                    ...state,
                    postDetail: post,
                }
            }
        }

        case DELETE_POST: {
            const index = state.posts.findIndex(item => item.id == action.payload);

            return {
                ...state,
                posts: state.posts.splice(index, 1)
            }
        }

        case UPDATE_POST: {
            const updatedPosts = [...state.posts];
            const index = updatedPosts.findIndex(item => item.id == action.payload.id);

            if(index >= 0) {
                updatedPosts[index] = {...updatedPosts[index], content: action.payload.content};
            }

            return {
                ...state,
                posts: updatedPosts,
            }

        }

        default:
            return state;
    }
}

export default postReducer;

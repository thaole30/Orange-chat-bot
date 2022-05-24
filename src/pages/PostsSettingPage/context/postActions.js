import * as types from "./postTypes";
import { nanoid } from "nanoid";
import moment from "moment";


export const createPost = (content) => ({
    type: types.CREATE_POST,
    payload:  {
        id: nanoid(),
        name: "テーマ①",
        status: "無効", 
        content: content,
        valid: false,
        date: moment(new Date()).format("YYYY/MM/DD"),
    },
})


export const updateStatus = (id) => ({
    type: types.UPDATE_STATUS,
    payload: id,
})

export const getDetailPost = (id) => ({
    type: types.GET_DETAIL_POST,
    payload: id,
})


export const deletePost = (id) => ({
    type: types.DELETE_POST,
    payload: id,
})

export const updatePost = (id, content) => ({
    type: types.UPDATE_POST,
    payload: {
        id,
        content,
    }
})
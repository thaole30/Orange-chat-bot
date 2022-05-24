import React, { useContext, useState } from "react";
import AntdButton from "../../components/AntdButton/AntdButton";
import { FaTelegramPlane } from "react-icons/fa";
import { AiOutlineEdit,AiOutlineSave } from "react-icons/ai";
import { RiCamera2Fill } from "react-icons/ri";
import { BsTrash } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { PostContext } from "./context/postContext";
import { createPost, deletePost, updatePost } from "./context/postActions";
import { Space } from "antd";


const SharedTextEditor = ({ children }) => {
  const {postContext, dispatch} = useContext(PostContext);

  const location = useLocation();
  const navigate = useNavigate();
  const {postId} = useParams();



  const [content, setContent] = useState("");
  console.log("content", content);

  const [isEditing, setEditing] = useState(false);



  const isActiveBtn =
    location.pathname.includes("create") || location.pathname.includes("edit");

  const childrenWithAdjustedProps = React.Children.map(children, (child) => {
    return React.cloneElement(child, { newprop: {content, setContent, setEditing} });
  });

  const createNewPost = () => {
    dispatch(createPost(content));
    navigate("/posts-setting");
  }

  return (
    <div className="post-editor-container f f-column">
      <div className="top-editor">
        <h3 className="bold">テーマ</h3>
        <h3 className="text-gray">スターテス</h3>
      </div>
      <>{childrenWithAdjustedProps}</>
      {/* {children} */}
      <div className="btn-actions-wrapper mt-16">
        <div className="f-between">
          <div className="f">
            <AntdButton
              addedClass="f-center"
              size="large"
              disabled={!isActiveBtn}
              icon={<FaTelegramPlane className="mr-8" />}
            >
              今すぐ投稿
            </AntdButton>
            <AntdButton
            size="large"
              disabled={!isActiveBtn}
              icon={<IoMdArrowDropdown style={{ verticalAlign: "middle" }} />}
            ></AntdButton>
          </div>
         
          {
            location.pathname.includes("edit") ? (
              <Space className="edit-section-btn-wrapper">
                <AntdButton
                addedClass={`f-center`}
                size="large"
                disabled={!isActiveBtn}
                icon={
                  <BsTrash
                    style={{ verticalAlign: "middle" }}
                    className="mr-8"
                  />
                }
                onClick={() => {
                  dispatch(deletePost(postId));
                  navigate("/posts-setting");
                }}
              >
                削除
              </AntdButton>
              {
                isEditing ? (
                  <AntdButton
                    addedClass={`f-center ${isActiveBtn ? "bg-orange white" : ""}`}
                    size="large"
                    disabled={!isActiveBtn}
                    icon={
                      <AiOutlineSave
                        style={{ verticalAlign: "middle" }}
                        className="mr-8"
                      />
                    }
                    onClick={() => {
                      dispatch(updatePost(postId, content));
                      navigate("/posts-setting");
                    }}
                  >
                    編集
                  </AntdButton>
                ) : (

                    <AntdButton
                    addedClass={`f-center ${isActiveBtn ? "bg-orange white" : ""}`}
                    size="large"
                    disabled={!isActiveBtn}
                    icon={
                      <AiOutlineEdit
                        style={{ verticalAlign: "middle" }}
                        className="mr-8"
                      />
                    }
                    onClick={() => {
                      dispatch(updatePost(postId, content));
                      navigate("/posts-setting");
                    }}
                  >
                    編集
                  </AntdButton>
                )
              }
              </Space>
            ) : (
              <AntdButton
                addedClass={`f-center ${isActiveBtn ? "bg-orange white" : ""}`}
                size="large"
                disabled={!isActiveBtn}
                icon={
                  <RiCamera2Fill
                    style={{ verticalAlign: "middle" }}
                    className="mr-8"
                  />
                }
                onClick={createNewPost}
              >
                今すぐ投稿
              </AntdButton>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SharedTextEditor;

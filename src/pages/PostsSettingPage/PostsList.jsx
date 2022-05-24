import React, { useContext } from "react";
import searchPostIcon from "../../assets/img/searchPost.png";
import { postsData } from "../FilePage/data/data";
import CustomButton from "./../../components/CustomButton/CustomButton";
import * as svgIcons from "./svg/index";
import { useNavigate } from 'react-router-dom';
import { PostContext } from "./context/postContext";
import { updateStatus } from "./context/postActions";


const posts = [1,2];

const PostsList = () => {

  const {postContext, dispatch} = useContext(PostContext);
  

  const navigate = useNavigate();


  return (
    <div className="posts-list">
      {posts.length === 0 ? (
        <div className="no-posts-container">
          <div className="no-posts-content">
            <img src={searchPostIcon} alt="" />
            <h3 className="desc">
              まだ投稿はありません。 今すぐ投稿を作成しましょう！
            </h3>
          </div>
          <CustomButton isIcon iconSvg={svgIcons.addCircle}
            onClick={() => navigate("/posts-setting/create")}
          >
            新規投稿作成
          </CustomButton>
        </div>
      ) : (
        <div className="have-posts-container h-100 f f-column a-center">
          <table className="posts-table">
            <thead>
              <tr>
                <th>投稿一覧</th>
                <th>スターテス</th>
                <th>作成日</th>
              </tr>
            </thead>

            <tbody>
              {postContext.posts.map((item, index) => {
                return (
                  <tr key={`post-${index}`} className="cursor"
                    onClick={() => navigate(`/posts-setting/edit/${item.id}`)}
                  >
                    <td>{item.name}</td>
                    <td>
                      <CustomButton 
                      isSuccess = {item.valid}
                      onClick={() => dispatch(updateStatus(item.id))}
                      >{item.status}</CustomButton>
                    </td>
                    <td>{item.date}</td>
                  </tr>
                );
              })}
            </tbody>

           
          </table>
          <CustomButton isIcon iconSvg={svgIcons.addCircle}
            addedClass="mt-auto"
            onClick={() => navigate("/posts-setting/create")}
          >
            新規投稿作成
          </CustomButton>
        </div>
      )}
    </div>
  );
};

export default PostsList;

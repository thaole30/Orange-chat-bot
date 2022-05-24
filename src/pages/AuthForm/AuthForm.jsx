import React, { useState } from "react";
import CustomInput from "../../components/FormControl/CustomInput/CustomInput";
import { RecSvg } from "../../layout/SideBar/svg";
import * as FormIcon from "./svg/index";
import "./AuthForm.scss";
import { Checkbox } from 'antd';
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigate } from "react-router-dom";


const AuthForm = () => {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    // const dispatch = useDispatch();
    const navigate = useNavigate();
  

    const handleChange = (e) => {
        console.log("value field", e.target.value);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    function handleChangeCheckbox(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const handleAuth = (e) => {
      e.preventDefault();
      navigate('/profile');
    }


  return (
    <div className="auth-form-container">
      <div className="logo-container">
        <span className="logo-orange">
          <svg
            width="26"
            height="26"
            viewBox="0 0 52 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M45.7102 27.5579C45.4772 31.9895 43.7721 36.3579 40.5843 39.8737L28.1929 27.5579H45.7102Z"
              fill="#FE8D00"
            />
            <path
              d="M26.6996 29.0526L39.0909 41.3684C35.5536 44.5368 31.1584 46.2316 26.6996 46.4632V29.0526Z"
              fill="#FE8D00"
            />
            <path
              d="M24.5814 29.0526V46.4632C20.1227 46.2316 15.7275 44.5263 12.2007 41.3684L24.5814 29.0526Z"
              fill="#FE8D00"
            />
            <path
              d="M23.0881 27.5579L10.6968 39.8737C7.50893 36.3579 5.8038 31.9895 5.5708 27.5684H23.0881V27.5579Z"
              fill="#FE8D00"
            />
            <path
              d="M10.6968 13.1474L23.0881 25.4632H5.5708C5.8038 21.021 7.50893 16.6632 10.6968 13.1474Z"
              fill="#FE8D00"
            />
            <path
              d="M12.2007 11.6526L24.592 23.9684V6.55789C20.1227 6.78947 15.7381 8.48421 12.2007 11.6526Z"
              fill="#FE8D00"
            />
            <path
              d="M40.5843 13.1474C43.7721 16.6632 45.4772 21.0316 45.7102 25.4632H28.2035L40.5843 13.1474Z"
              fill="#FE8D00"
            />
            <path
              d="M9.8707 10.7158C18.6082 2.03157 32.7894 2.03157 41.5268 10.7158C50.2643 19.4 50.2643 33.4947 41.5268 42.1789C32.7894 50.8632 18.6082 50.8632 9.8707 42.1789C1.13322 33.4947 1.13322 19.4105 9.8707 10.7158ZM7.53011 8.38947C5.07303 10.8316 3.17726 13.6737 1.88518 16.8421C0.635453 19.9053 0 23.1368 0 26.4526C0 29.7684 0.635453 33 1.88518 36.0632C3.17726 39.2316 5.07303 42.0737 7.53011 44.5158C9.9872 46.9579 12.8467 48.8421 16.0346 50.1263C19.1165 51.3684 22.3679 52 25.7041 52C29.0402 52 32.2916 51.3684 35.3735 50.1263C38.5614 48.8421 41.4209 46.9579 43.878 44.5158C46.3351 42.0737 48.2309 39.2316 49.5229 36.0632C50.7727 33 51.4081 29.7684 51.4081 26.4526C51.4081 23.1368 50.7727 19.9053 49.5229 16.8421C48.2309 13.6737 46.3351 10.8316 43.878 8.38947C41.4209 5.94736 38.5614 4.06315 35.3735 2.77894C32.2916 1.53684 29.0402 0.905258 25.7041 0.905258C22.3679 0.905258 19.1165 1.53684 16.0346 2.77894C12.8361 4.06315 9.97661 5.94736 7.53011 8.38947Z"
              fill="#FE8D00"
            />
          </svg>
        </span>
        <span className="chat-icon">
          <svg
            width="20"
            height="16"
            viewBox="0 0 39 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.7291 0H1.92133C1.22233 0 0.650421 0.568421 0.650421 1.26316V21.0211C0.650421 21.8737 1.34942 22.5684 2.20728 22.5684H4.0395V30.6737L12.1945 22.5684H37.7185C38.4175 22.5684 38.9894 22 38.9894 21.3053V1.26316C39 0.568421 38.4281 0 37.7291 0ZM10.5847 13.0421C9.3773 13.0421 8.39235 12.0632 8.39235 10.8632C8.39235 9.66316 9.3773 8.68421 10.5847 8.68421C11.792 8.68421 12.777 9.66316 12.777 10.8632C12.777 12.0632 11.792 13.0421 10.5847 13.0421ZM20.0211 13.0421C18.8138 13.0421 17.8288 12.0632 17.8288 10.8632C17.8288 9.66316 18.8138 8.68421 20.0211 8.68421C21.2285 8.68421 22.2134 9.66316 22.2134 10.8632C22.2134 12.0632 21.2285 13.0421 20.0211 13.0421ZM29.447 13.0421C28.2396 13.0421 27.2547 12.0632 27.2547 10.8632C27.2547 9.66316 28.2396 8.68421 29.447 8.68421C30.6544 8.68421 31.6393 9.66316 31.6393 10.8632C31.6393 12.0632 30.665 13.0421 29.447 13.0421Z"
              fill="#FFA940"
            />
          </svg>
        </span>

        <span className="logo-text">Orange Bot</span>
      </div>
      <form className="auth-form" onSubmit={handleAuth}>
        <h2 className="text-center">ログイン</h2>

        <CustomInput
          functionality="auth-form-input"
          name="username"
          label="ユーザー名"
          handleChange={handleChange}
          placeholder="ユーザー名を入力してください。"
          isIcon={true}
          icon={FormIcon.UserSvg}
        />

        <CustomInput
          functionality="auth-form-input"
          name="password"
          label="パスワード"
          handleChange={handleChange}
          placeholder="パースワードを入力してください。"
          isIcon={true}
          type="password"
          icon={FormIcon.LockSvg}
        />

        <div className="bonus-content">
            <div className="left">
                <Checkbox onChange={handleChangeCheckbox}></Checkbox>
                <p>パースワードを保存</p>
            </div>

            <div className="right">
                パスワードをお忘れですか？ 
            </div>
        </div>

        <CustomButton type="submit" addedClass="full-width update-style-hover">サインイン</CustomButton>

      </form>
    </div>
  );
};

export default AuthForm;

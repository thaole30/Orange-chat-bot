import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { updateHeaderInfo } from "../../redux/appSlice";
import "./SideBar.scss";
import * as sidebarSvg from "./svg/index";
import * as icons from "../../layout/Header/HeaderIcons";
import { Space } from "antd";

const navItems = [
  {
    Icon: sidebarSvg.link1icon,
    path: "/profile/",
    text: "プロファイル",
    matchRoutes: ["/profile", "/edit"],
    leftIconHeader: icons.UserIcon,
  },
  {
    Icon: sidebarSvg.link2icon,
    path: "/file/",
    text: "添付",
    matchRoutes: ["/file"],
    leftIconHeader: icons.ClipIcon,
  },
  {
    Icon: sidebarSvg.link3icon,
    path: "/chatbox-setting/",
    text: "チャットボットUIの設定",
    matchRoutes: ["/chatbox-setting"],
    leftIconHeader: icons.PaintsIcon,
  },
  {
    Icon: sidebarSvg.link4icon,
    path: "/posts-setting/",
    text: "投稿の設定",
    matchRoutes: ["/posts-setting", "/edit"],
    leftIconHeader: icons.MarketingIcon,
  },
  {
    Icon: sidebarSvg.link5icon,
    path: "/scenario-setting/",
    text: "シナリオの設定",
    matchRoutes: ["/scenario-setting", "/create", "/edit"],
    leftIconHeader: icons.PageIcon,
  },
  {
    Icon: sidebarSvg.link6icon,
    path: "/chart/",
    text: "集計",
    matchRoutes: [
      "/chart",
      "/scenario-info",
      "/communicate",
      "/graph-scenario",
    ],
    leftIconHeader: icons.DiagramIcon,
  },
];

const childLinks = [
  {
    path: "chart/scenario",
    icons: {
      normal: sidebarSvg.linkchild1,
      active: sidebarSvg.linkchild1Active,
    },
    childText: "シナリオ",
  },
  {
    path: "chart/dialogue",
    icons: {
      normal: sidebarSvg.linkchild2,
      active: sidebarSvg.linkchild2Active,
    },
    childText: "対話履歴",
  },
  {
    path: "chart/graph/table",
    icons: {
      normal: sidebarSvg.linkchild3,
      active: sidebarSvg.linkchild3Active,
    },
    childText: "グラフ",
  },
];

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  console.log("location", location);

  return (
    <div className={`sidebar-container ${!showSidebar ? "fade" : ""}`}>
      <div className="logo-container relative">
        <div
          className="sidebar-toggle absolute"
          onClick={() => {
            setShowSidebar((preState) => !preState);
          }}
        >
          <span className="sidebar-toggle-icon">
            <img src={sidebarSvg.RecSvg} alt="" />
          </span>
        </div>
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

      <ul className="links-list">
        {navItems.map(
          ({ Icon, path, text, matchRoutes, leftIconHeader }, index) => {
            const isSelected = matchRoutes.reduce(
              (isMatch, matchRoute) =>
                location.pathname.includes(matchRoute) || isMatch,
              false
            );
            return (
              <div
                key={index}
                onClick={() => {
                  dispatch(
                    updateHeaderInfo({
                      leftIcon: Icon,
                      title: text,
                      hasRightBtn: text === "添付" ? true : false,
                      rightBtn: null,
                      leftIcon: leftIconHeader,
                    })
                  );
                  navigate(path);
                }}
              >
                <li
                  className={`link-item relative ${isSelected ? "active" : ""}`}
                >
                  <div className="orange-stick"></div>
                  {text === "集計" && (
                    <div className="down-arrow absolute">
                      <span>
                        <svg
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5.00048 3.78134L8.30048 0.481339L9.24315 1.424L5.00048 5.66667L0.757812 1.424L1.70048 0.481339L5.00048 3.78134Z"
                            fill="#434343"
                          />
                        </svg>
                      </span>
                    </div>
                  )}
                  <span>
                    <img src={Icon} alt="" />
                  </span>
                  <span className="text-link">{text}</span>
                </li>
                {text === "集計" && (
                  <ul className="child-links-list">
                    {childLinks.map(({ path, icons, childText }, index) => {
                      let isChildSelected = location.pathname.includes(path);
                      return (
                        <li
                          className={`link-item child-link ${
                            isChildSelected ? "child-link-active" : ""
                          }`}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigate(path);
                          }}
                        >
                          <Space>
                            <span>
                              <img
                                src={
                                  isChildSelected ? icons.active : icons.normal
                                }
                                alt=""
                              />
                            </span>
                            <span style={{ margin: "0" }} className="text-link">{childText}</span>
                          </Space>
                        </li>
                      );
                    })}
                  </ul>
                )}
              </div>
            );
          }
        )}
      </ul>

      <div className="user-logout">
        <div className="left">
          <Space>
            <img
              src="data:image/jpeg;base64,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"
              alt="user"
            />
            <p className="user-name">本田 圭佑</p>
          </Space>
        </div>

        <div className="right">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g opacity="0.65">
              <path
                d="M8.00004 14.6667C4.31804 14.6667 1.33337 11.682 1.33337 8.00001C1.33337 4.31801 4.31804 1.33335 8.00004 1.33335C9.03515 1.33257 10.0562 1.57319 10.982 2.03611C11.9078 2.49902 12.7129 3.17146 13.3334 4.00001H11.5267C10.7569 3.32119 9.80749 2.87892 8.79252 2.72628C7.77754 2.57364 6.74008 2.71711 5.80463 3.13949C4.86918 3.56186 4.07547 4.24519 3.51875 5.10747C2.96203 5.96975 2.66595 6.97436 2.66604 8.00075C2.66612 9.02714 2.96237 10.0317 3.51924 10.8939C4.0761 11.7561 4.86992 12.4393 5.80544 12.8615C6.74097 13.2837 7.77845 13.427 8.7934 13.2742C9.80834 13.1214 10.7576 12.679 11.5274 12H13.334C12.7135 12.8287 11.9083 13.5011 10.9824 13.9641C10.0564 14.427 9.03526 14.6676 8.00004 14.6667ZM12.6667 10.6667V8.66668H7.33337V7.33334H12.6667V5.33334L16 8.00001L12.6667 10.6667Z"
                fill="black"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SideBar;

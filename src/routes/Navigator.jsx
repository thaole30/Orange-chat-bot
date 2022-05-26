import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import RootLayout from '../layout/RootLayout';
import DefaultPage from '../pages/DefaultPage';
import FilePage from '../pages/FilePage/FilePage';
import UserProfilePage from '../pages/UserProfilePage/UserProfilePage';
import SettingChatboxPage from './../pages/SettingChatboxPage/SettingChatboxPage';
import DisplayTextEditor from '../pages/PostsSettingPage/DisplayTextEditor';
import EditTextEditor from '../pages/PostsSettingPage/EditTextEditor';
import PostsSettingPage from '../pages/PostsSettingPage/PostsSettingPage';
import ScenarioSettingPage from '../pages/ScenarioSettingPage/ScenarioSettingPage';
import CreateScenarioModal from '../pages/ScenarioSettingPage/CreateScenarioModal';
import EditScenarioModal from '../pages/ScenarioSettingPage/EditScenarioModal';
import ChartPage from '../pages/Chart/ChartPage';
import GraphScenario from '../pages/Chart/Scenario/GraphScenario/GraphScenario';
import GraphCommunicate from '../pages/Chart/Scenario/GraphCommunicate/GraphCommunicate';
import Scenario from '../pages/Chart/Scenario/Scenario';
import AuthForm from '../pages/AuthForm/AuthForm';
import DisplayForm from '../pages/UserProfilePage/DisplayForm';
import EditForm from '../pages/UserProfilePage/EditForm';
import CreateTextEditor from '../pages/PostsSettingPage/CreateTextEditor';
import TableGraph from '../pages/Chart/Scenario/GraphScenario/TableGraph/TableGraph';
import BarGraph from '../pages/Chart/Scenario/GraphScenario/BarGraph/BarGraph';
import LineGraph from '../pages/Chart/Scenario/GraphScenario/LineGraph/LineGraph';
import ColumGraph from '../pages/Chart/Scenario/GraphScenario/ColumGraph/ColumGraph';



const Navigator = () => {
  return (
    <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<AuthForm/>} />
          {/* <Route path="/singup" element={<AuthForm/>} /> */}

          {/* <Route path="/" element={<DefaultPage/>} /> */}
          <Route path="/" element={<RootLayout />}>
            
            <Route path="profile" element={<UserProfilePage />}>
                <Route index element={<DisplayForm/>} />
                <Route path="edit"element={<EditForm/>} />
            </Route>

            <Route path="file" element={<FilePage />} />
            <Route path="chatbox-setting" element={<SettingChatboxPage />} />

            <Route path="posts-setting" element={<PostsSettingPage />}>
                <Route index element={<DisplayTextEditor/>} />
                <Route path="create"element={<CreateTextEditor/>} />
                <Route path="edit/:postId"element={<EditTextEditor/>} />
            </Route>


            <Route path="scenario-setting" element={<ScenarioSettingPage />}>
                <Route path="create" element={<CreateScenarioModal/>} />
                <Route path="edit"element={<EditScenarioModal/>} />
            </Route>

            <Route path="chart" element={<ChartPage />}>
                <Route index element={<Navigate to="/chart/scenario" replace />} />
                <Route path="scenario" element={<Scenario/>} />
                <Route path="dialogue"element={<GraphCommunicate/>} />
                <Route path="graph"element={<GraphScenario/>} >
                  <Route index element={<Navigate to="/chart/graph/table" replace />} />
                  <Route path="table" element={<TableGraph />} />
                  <Route path="bar" element={<BarGraph />} />
                  <Route path="line" element={<LineGraph />} />
                  <Route path="column" element={<ColumGraph />} />
                  <Route path="*" element={<BarGraph />} />
                </Route>
            </Route>

          </Route>
        </Routes>

    </BrowserRouter>
  )
}

export default Navigator
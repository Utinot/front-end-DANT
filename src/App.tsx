import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import Login from "./pages/Login";
import Signupcandidate from "./pages/candidate/Signupcandidate";
import Signupemployer from "./pages/employer/Signupemployer";
import Pickpassword from "./pages/Pickpassword";
import AdminLayout from "./layout/AdminLayout/AdminLayout";
import Dashboard from "./pages/Admin/Dashboard";
import Post from "./pages/Admin/Post";
import News from "./pages/Admin/Post/News";
import PostAdd from "./pages/Admin/Post/Post-Add";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/candidate/Search";
import EditNews from "./pages/Admin/Post/EditNews";
import DefaultLayout from "./layout/DefaultLayout/DefaultLayout";
import JobDetail from "./pages/employer/getProfile/JobDetail";
import Profile from "./pages/candidate/Profile/Profile";
import Contact from "./pages/Contact";
import { isAuthenticate } from "./api/auth";
import ProfileAdmin from "./pages/Admin/user/ProfileAdmin";
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import Package from "./pages/Admin/user/Package";
import ProfileCompany from "./pages/Admin/user/ProfileCompany";
import Test from "./pages/Test";
import Cv from "./pages/candidate/Profile/Cv";

moment.locale('vi');

function App() {
  const PrivteRoute = (props: any) => {

    const user = isAuthenticate();
    if (!user || user.role_id != 2) {
      return false
    }
    return props.children
  }


  return (
    <div className="App">
      <main>
        <Routes>
          {/* <Suspense fallback={<div>Loading...</div>}> */}
          {/* Default-Layout */}
          <Route path="/" element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="test" element={<Test />} />
            <Route path="home" element={<Home />} />
            <Route path="viec-lam-:title-:id" element={<Detail />} />
            <Route path="search" element={<Search />} />
            <Route path="job/:id" element={<JobDetail />} />
            <Route path="profile/:token" element={<Profile />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          {/* Admin-Layout */}
          <Route path="admin" element={<PrivteRoute> <AdminLayout /> </PrivteRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="profile" element={<ProfileAdmin />} />
            <Route path="profileCompany" element={<ProfileCompany />} />
            <Route path="package" element={<Package />} />
            <Route path="post">
              <Route index element={<Post />} />
              <Route path="news" element={<News />} />
              <Route path="add" element={<PostAdd />} />
              <Route path="editNews/:id" element={<EditNews />} />
            </Route>
          </Route>
          {/* Auth-page */}
          <Route
            path="/login/signupcandidate"
            element={<Signupcandidate />}
          />
          <Route path="/cv" element={<Cv />} />
          <Route path="/login/signupempoly" element={<Signupemployer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Pickpassword" element={<Pickpassword />} />
          {/* </Suspense> */}
        </Routes>
      </main>
    </div>
  );
}

export default App;
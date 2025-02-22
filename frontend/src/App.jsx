import Layout from "./components/layout/Layout.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import SignUpPage from "./pages/auth/SignUpPage.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "./lib/axios";
function App() {

    const{data: authUser,isLoading }=useQuery({
        queryKey: ["authUser"],
        queryFn: async() =>{
            try{
                const res= await axiosInstance.get("/auth/me");
                return res.data;
            }catch(err)
            {
                if(err.response && err.response.status === 401)
                {
                    return null;
                }
                toast.error(err.response.data.message || "Something went wrong");

            }
        },
    });
    
	if (isLoading) return null;

 return(<Layout>
    <Routes>
        <Route path="/" element={authUser ? <HomePage /> : <Navigate to={"/login"} />} />
        <Route path="/signup" element={!authUser ?<SignUpPage />: <Navigate to={"/"} />} />
        <Route path="/login" element={!authUser ? <LoginPage /> : <Navigate to={"/"} />} />
        <Route path="/notifications" element={authUser ? <NotificationsPage /> : <Navigate to={"/login"} />} />




	</Routes>
    <Toaster />
        </Layout>
 );
}

export default App;
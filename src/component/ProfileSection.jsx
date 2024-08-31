import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { logout } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

export default function ProfileSection() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const navigate = useNavigate();

    console.log("in profile: ", state);
    useEffect(() => {
        console.log("userinfo in login page:", JSON.parse(localStorage.getItem("userInfo")));
        const loggedIn = localStorage.getItem("userInfo") ? JSON.parse(localStorage.getItem("userInfo")).loggedIn : false;
        if (!loggedIn) {
            navigate("/profile");
        }
    }, []);
    return <section className="my-5">
        <h1 className="text-center font-bold font-sans">Profile</h1>
        <div className="card card-side bg-base-100 shadow-xl max-md:flex-col mx-auto max-w-2xl items-start p-4 max-md:items-center gap-3">
            <figure className="max-w-[70vw] rounded-3xl md:rounded-full md:aspect-square mx-auto overflow-clip">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Name: {state.auth.userInfo.username}</h2>
                <h2 className="card-title">Email: {state.auth.userInfo.email}</h2>
                <p><b>Bio:</b> My name is barry allan. I searching for correct spelling for my name.</p>
                <div className="card-actions btn-sm justify-end">
                    <button onClick={
                        () => {
                            dispatch(logout());
                        }
                    } className="btn btn-outline btn-sm btn-primary">Logout</button>
                </div>

            </div>
        </div>
    </section>;
}

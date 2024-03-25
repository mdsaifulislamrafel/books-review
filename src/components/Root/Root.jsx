import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";

const Root = () => {
    return (
        <div>
            <Header />
            <h1>This is a Root</h1>
            <Outlet />
        </div>
    );
};

export default Root;
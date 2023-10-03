import CenterSide from "../../Shared/CenterSide/CenterSide";
import Header from "../../Shared/Header/Header";
import LeftSide from "../../Shared/LeftSide/LeftSide";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSide from "../../Shared/RightSide/RightSide";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <BreakingNews></BreakingNews>
            <Header></Header>
            <div className="grid md:grid-cols-4 gap-6 mx-auto">
                <div className="">
                    <LeftSide></LeftSide>
                </div>
                <div className="grid md:col-span-2  ">
                    <CenterSide></CenterSide>
                </div>
                <div className="">
                    <RightSide></RightSide>
                </div>
            </div>
        </div>
    );
};

export default Home;
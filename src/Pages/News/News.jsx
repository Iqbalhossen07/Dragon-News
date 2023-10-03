import Header from "../../Shared/Header/Header";
import Navbar from "../../Shared/Navbar/Navbar";
import RightSide from "../../Shared/RightSide/RightSide";
import {useParams} from "react-router-dom"

const News = () => {
    const {_id} = useParams()
    return (
    
        <section>
            <Navbar></Navbar>
            <Header></Header>
            <div className="grid md:grid-cols-4 gap-6">
            <div className="grid col-span-3 border">
                <p>{_id}</p>

            </div>
            <div className="border">
            <RightSide></RightSide>
            </div>
            
        </div>
        </section>
    );
};

export default News;
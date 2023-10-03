import { useEffect, useState } from "react";
import CenterHeader from "./CenterHeader";
const CenterSide = () => {
    const [news,setNews] = useState([])

    useEffect(()=>{
        fetch('/news.json')
        .then(news=>news.json())
        .then(data=>setNews(data))
    },[])
 
  
    return (
          <div>
           

            {
                news.map(news=><CenterHeader key={news.id} news={news}></CenterHeader>)
            }
            </div>
    );
};

export default CenterSide;
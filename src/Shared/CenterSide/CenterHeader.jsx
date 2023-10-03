
import { BsShare } from 'react-icons/bs';
import { BsBookmark } from 'react-icons/bs';
import { AiOutlineEye } from 'react-icons/ai';
import { Link } from "react-router-dom";


const CenterHeader = ({news}) => {
    
    const {name,_id,published_date,img,author,thumbnail_url,image_url,title,details,total_view,rating} = news
    // console.log(news)
    
    return (
        <section>
            
            <h2 className="text-2xl">Dragon News Home</h2>
         <div className="flex items-center px-2 justify-between bg-[#F3F3F3]">
          <div>
            <div className="flex items-center gap-3">
                <div className='dropdown dropdown-end'>
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <img src={author.img} />
                </div>
            </label>
           
          
                </div>
                <div>
                    
                </div>
                
                <div>
                    <h5 className="text-base">{author.name}</h5>
                    <p>{author.published_date}</p>
                </div>
            </div>

            </div>
            <div className="flex gap-1">
              <BsBookmark></BsBookmark>  <BsShare></BsShare>
            </div>
          </div>
          <h2 className='font-bold text-[20px] text-[#403F3F] font-poppins'>{title}</h2>

          <div className="relative flex w-full mt-20 mb-10 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src={image_url}
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div className="p-6">
   
    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      {
       details.length > 200 ? 
       <p>{details.slice(0,200)}<Link className='text-green-400' to={`/news/${_id}`}>Read More...</Link> </p> :
       <p>{details}</p>
      }
    </p>
   
  </div>
  <div className="p-6 pt-0">
    <button
      className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      Read More
    </button>
   
  </div>
  <div className="p-6 pt-0 flex justify-between">
   <div>
   <div className="rating flex items-center gap-2">
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
  <p>{rating.number}</p>
</div>

   </div>
   <div className='flex items-center'>
    <AiOutlineEye></AiOutlineEye>
    <p>{total_view}</p>

   </div>
   
  </div>
  
</div>
         </section>
    );
};

export default CenterHeader;

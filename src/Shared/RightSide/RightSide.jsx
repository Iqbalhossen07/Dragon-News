import { BiLogoGoogle } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa6';
import qZone1 from "../../assets/qZone1.png"
import qZone2 from "../../assets/qZone2.png"
import qZone3 from "../../assets/qZone3.png"

const RightSide = () => {
    return (
        <>
        <div className='mb-10'>
            <h2 className="text-2xl">Login With</h2>
            <div className='flex justify-center mb-3'>
            <button className="btn btn-outline btn-success w-full">
                <BiLogoGoogle></BiLogoGoogle>   
                Login With Google
        </button> 
            </div>
            <div className='flex justify-center'>
            <button className="btn btn-outline btn-success w-full">
                <FaGithub></FaGithub>  
                Login With Github
        </button> 
            </div>
        </div>
        <div className='mb-8'>
            <h2 className="text-2xl">Find Us On</h2>
            <div className=''>
                <a href="" className='block border rounded-t-lg p-2 px-6'>Facebook</a>
                <a href="" className='block border p-2 px-6'>Twitter</a>
                <a href="" className='block border rounded-b-lg p-2 px-6'>Instagram</a>
            
            </div>
        </div>
        <div className='mb-8 bg-[#F3F3F3]'>
            <h2 className="text-2xl">Find Us On</h2>
            <div className=''>
                <img src={qZone1}alt="" />
                <img src={qZone2}alt="" />
                <img src={qZone3}alt="" />
                {/* <a href="" className='block border rounded-t-lg p-2 px-6'>Facebook</a>
                <a href="" className='block border p-2 px-6'>Twitter</a>
                <a href="" className='block border rounded-b-lg p-2 px-6'>Instagram</a> */}
            
            </div>
        </div>
        </>
    );
};

export default RightSide;
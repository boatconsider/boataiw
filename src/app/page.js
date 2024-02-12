import Image from "next/image";

export default function Home() {
  return (
<div className="h-auto  bg-slate-200">
<div className="text-center text-5xl">
  <h1 style={{ background: "-webkit-linear-gradient(45deg, #ff00ff, #ffffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Happy valentine's </h1>
</div>




  <div className="flex flex-row justify-center items-center flex-wrap  ">

  <div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0  ">
<img src="/10.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
</div>

<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0  ">
<img src="/11.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
</div>
<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0">
<img src="/12.jpg" alt="" className="absolute inset-0 w-full h-full object-cover" />
</div>
<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0">
  <video  className="absolute inset-0 w-full h-full object-cover">
    <source src="/1.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>

<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0">
  <video  className="absolute inset-0 w-full h-full object-cover">
    <source src="/2.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0 ">
  <video  className="absolute inset-0 w-full h-full object-cover">
    <source src="/3.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0">
  <video  className="absolute inset-0 w-full h-full object-cover">
    <source src="/7.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>
<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full max-[480px]:m-0 max-[820px]:m-0">
<video  className="absolute inset-0 w-full h-full object-cover">
    <source src="/13.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>


<div className="relative w-[400px] h-[400px] bg-[#fff] mt-5 overflow-hidden ml-5 rounded-full  max-[480px]:m-0 max-[820px]:m-0 ">
<video  className="absolute inset-0 w-full h-full object-cover">
    <source src="/8.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</div>



     
    </div>  
</div>
        
      
  

  )
}
 
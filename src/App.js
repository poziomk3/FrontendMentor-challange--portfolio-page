import React, { useEffect,useRef } from "react";
import { useInView } from "react-intersection-observer";
import "./index.css";
import logo from "./assets/logo.svg";
import amy from "./assets/image-amy.webp";
import graphDes from "./assets/pattern-graphic-design.svg";
import uiux from "./assets/pattern-ui-ux.svg";
import appsPic from "./assets/pattern-apps.svg";
import illustrations from "./assets/pattern-illustrations.svg";
import photography from "./assets/pattern-photography.svg";
import motionGraph from "./assets/pattern-motion-graphics.svg";
import { motion, useAnimation } from "framer-motion";
import leftar from "./assets/icon-arrow-left.svg";
import rigar from "./assets/icon-arrow-right.svg";
import slider1 from './assets/image-slide-1.jpg';
import slider2 from './assets/image-slide-2.jpg';
import slider3 from './assets/image-slide-3.jpg';
import slider4 from './assets/image-slide-4.jpg';
import slider5 from './assets/image-slide-5.jpg';
function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();
 
  useEffect(() => {
    if (inView) {
      controls.start("visible");
      console.log(inView);
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}




function App() {
  var picRef=useRef(4660);

 const handleClick=()=>{
  console.log(picRef.current%5)
    for (let index = 0; index < 5; index++) {
      document.getElementById(index).classList.add('duration-0')
      document.getElementById(index).classList.remove('z-50')
      document.getElementById(index).classList.add('scale-0')
      
      
    }

    document.getElementById((picRef.current)%5).classList.add('duration-[800ms]')
    document.getElementById((picRef.current)%5).classList.add('z-50')
    document.getElementById(picRef.current%5).classList.remove('scale-0')
    document.getElementById(picRef.current%5).classList.add('translate-x-[-50%]')
    document.getElementById(picRef.current%5).classList.remove('translate-x-[-150%]')
    document.getElementById(picRef.current%5).classList.remove('translate-x-[50%]')



    document.getElementById((picRef.current-1)%5).classList.add('z-50')
    document.getElementById((picRef.current-1)%5).classList.remove('scale-0')
    document.getElementById((picRef.current-1)%5).classList.add('translate-x-[-150%]')
    document.getElementById((picRef.current-1)%5).classList.remove('translate-x-[-250%]')
    document.getElementById((picRef.current-1)%5).classList.remove('translate-x-[-50%]')
    document.getElementById((picRef.current-1)%5).classList.remove('translate-x-[50%]')

    document.getElementById((picRef.current+1)%5).classList.add('z-50')
    document.getElementById((picRef.current+1)%5).classList.remove('scale-0')
    document.getElementById((picRef.current+1)%5).classList.add('translate-x-[50%]')
    document.getElementById((picRef.current+1)%5).classList.remove('translate-x-[-50%]')
    document.getElementById((picRef.current+1)%5).classList.remove('translate-x-[-150%]')
 }
 useEffect(handleClick,[])
  
  return (
    <div className="  bg-custom-white w-full min-h-screen">
      <div className="mx-auto max-w-[1200px]">
        <div className=" text-bs  px-3  ">
          <nav className="flex py-5">
            <img className="" src={logo} alt="japierd" />
            <button className="bg-custom-black p-2 px-4 text-custom-white rounded-[28px] ml-auto hover:bg-custom-purple duration-150">
              Free Consultation
            </button>
          </nav>
          <div className="flex flex-col my-5 px-2 gap-5">
            <div className="text-md text-center lg:text-lg">
              {" "}
              Design solutions made easy
            </div>
            <div className="text-center ">
              With over ten years of experience in various design disciplines,
              I’m your one-stop shop for your design needs.
            </div>
          </div>

          <section className="mb-[4rem] grid grid-cols-2 gap-3  md:grid-cols-4 lg:grid-cols-6 griit ">
            <div className="relative bg-custom-purple  row-span-2 col-span-2 min-h-[300px] rounded-lg  p-4 ">
              <img className="absolute top-5 right-5" src={graphDes} alt="" />
              <div className="text-custom-white absolute bottom-3 left-3  ">
                Graphic Design
              </div>
            </div>

            <div className="relative bg-custom-yellow  min-h-[250px] rounded-lg  p-4 ">
              <img className="absolute top-5 right-5" src={uiux} alt="" />
              <div className="text-custom-white absolute bottom-3 left-3  ">
                UI/UX
              </div>
            </div>
            <div className="relative bg-custom-pink min-h-[250px] rounded-lg  p-4 ">
              <img className="absolute top-5 right-5" src={appsPic} alt="" />
              <div className="text-custom-white absolute bottom-3 left-3  ">
                Apps
              </div>
            </div>
            <div className="relative bg-custom-red min-h-[250px] rounded-lg  p-4 col-span-2">
              <img
                className="absolute top-5 right-5"
                src={illustrations}
                alt=""
              />
              <div className="text-custom-white absolute bottom-3 left-3 ">
                Photography
              </div>
            </div>
            <div className="relative bg-custom-blue min-h-[250px] rounded-lg  p-4 col-span-2">
              <img
                className="absolute top-5 right-5"
                src={photography}
                alt=""
              />
              <div className="text-custom-white absolute bottom-3 left-3  ">
                Illustrations
              </div>
            </div>
            <div className="relative bg-custom-dred min-h-[250px] rounded-lg  p-4 col-span-2">
              <img
                className="absolute top-5 right-5"
                src={motionGraph}
                alt=""
              />
              <div className="text-custom-white absolute bottom-3 left-3  ">
                Motion Graphics
              </div>
            </div>
          </section>
          {/* Graphic
              Design UI/UX Apps Photography Illustrations Motion Graphics  */}
          <FadeInWhenVisible>
            <section className="grid md:grid-cols-2 md:gap-4">
              <img
                src={amy}
                className="md:scale-105 md:translate-x-[-2rem] lg:translate-x-0 lg:scale-100"
                alt=""
              />

              <div className="text-center md:text-left">
                <div className="text-sm pt-5">
                  I’m Amy, and I’d love to work on your next project
                </div>{" "}
                <div className="py-4">
                  I love working with others to create beautiful design
                  solutions. I’ve designed everything from brand illustrations
                  to complete mobile apps. I’m also handy with a camera!
                </div>{" "}
                <button className="hover:bg-custom-yellow duration-150 block mx-auto bg-custom-red p-2 px-4 text-custom-white rounded-[28px] ml-auto">
                  Free Consultation
                </button>
              </div>
            </section>
          </FadeInWhenVisible>
        </div>
      </div>
     

      <div>

               
               <div className=" overflow-hidden  relative h-[30rem] w-full">
               
                <img src={slider1} id={1} className="rounded-xl w-[90%] md:w-[35%] duration-[500ms] scale-95 absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] " alt=""/>
                <img src={slider2} id={2} className="rounded-xl w-[90%] md:w-[35%] duration-[500ms] scale-95 absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]" alt=""/>
                <img src={slider3} id={3} className="rounded-xl w-[90%] md:w-[35%] duration-[500ms] scale-95 absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]" alt=""/>
                <img src={slider4} id={0} className="rounded-xl w-[90%] md:w-[35%] duration-[500ms] scale-95 absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]" alt=""/>
                <img src={slider5} id={4} className="rounded-xl w-[90%] md:w-[35%] duration-[500ms] scale-95 absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%]" alt=""/>
               </div>









        <div className=" flex p-5 justify-center mx-auto gap-4">
          <button onClick={()=>{picRef.current+=1;handleClick()}}className="relative h-[4rem]  aspect-square hover:bg-custom-purple duration-150 bg-custom-black rounded-[2.5rem] ">
            {" "}
            <img
              src={leftar}
              className="absolute left-[50%] top[50%] translate-x-[-50%]  translate-y-[-50%] w-[1.25rem]"
              alt=""
            />
          </button>
          <button  onClick={()=>{picRef.current-=1;handleClick()}} className=" h-[4rem] aspect-square  relative hover:bg-custom-purple duration-150 bg-custom-black rounded-[2.5rem] ">
         
            <img
              src={rigar}
              className="absolute left-[50%] top[50%] translate-x-[-50%]  translate-y-[-50%] w-[1.25rem]"
              alt=""
            />
          </button>
          
        </div>
      </div>

      <div className="mx-auto max-w-[1200px]  px-3">
        <section className="bg-custom-black p-5 my-5 text-center rounded-lg">
          <div className="text-sm text-custom-white">Book a call with me</div>
          <div className="text-custom-white py-5">
            I’d love to have a chat to see how I can help you. The best first
            step is for us to discuss your project during a free consultation.
            Then we can move forward from there.
          </div>
          <button className="hover:bg-custom-yellow duration-150 text-bs block mx-auto bg-custom-red p-2 px-4 text-custom-white rounded-[28px] ml-auto">
            Free Consultation
          </button>
        </section>

        <nav className="flex py-5">
          <img className="" src={logo} alt="sa" />
          <button className="hover:bg-custom-purple duration-150 bg-custom-black p-2 px-4 text-custom-white text-bs rounded-[28px] ml-auto">
            Free Consultation
          </button>
        </nav>
      </div>
    </div>
  );
}

export default App;

import { Button } from "@mui/material";
import React from "react";

const Login = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <>
      <div className="flex w-screen h-screen justify-center">
        <div className=" bg-black w-full flex-1 h-full justify-center">
          <div className="flex h-full justify-center items-center">
            <img src="./images/logo.png" alt="logo" className="w-44" />
            <span className="text-white text-6xl font-semibold ">
              MONTHLY <br />
              COFFEE
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center items-center">
            <span className="text-3xl font-bold mb-20">
              “The cafe is the community’s third place.”
            </span>
            <img src={`${path}/images/kakao.png`} alt="" />
          </div>
        </div>
      </div>
    </>
    // <section class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
    //   <div class="relative py-3 sm:max-w-xl sm:mx-auto">
    //     <div class="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
    //     <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
    //       <div class="max-w-md mx-auto">
    //         <div>
    //           <h1 class="text-2xl font-semibold">
    //             Login Form with Floating Labels
    //           </h1>
    //         </div>
    //         <div class="divide-y divide-gray-200">
    //           <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
    //             <div class="relative">
    //               <Button variant="contained">
    //                 카카오 계정으로 연동
    //               </Button>
    //             </div>
    //             <div class="relative">
    //               <button class="bg-blue-500 text-white rounded-md px-2 py-1">
    //                 Submit
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Login;

import React from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { txtShadow } from "utils/colors";

const Community = () => {
  return (
    <Scrollbars style={{ marginBottom: 5 }}>
      <div className="p-5 space-y-5">
        <span
          className="text-4xl font-bold text-yellow-400"
          style={{ textShadow: `${txtShadow}` }}
        >
          커뮤니티
        </span>
        <div className="grid grid-cols-3 h-[70Vh] gap-y-10 px-10 w-[94vw] md:w-[75vw]">
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[80%]"
              src="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80"
              alt="pic"
            />
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Community;

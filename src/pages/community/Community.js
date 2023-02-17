import React, { useState } from "react";
import { Link } from "react-router-dom";
import { txtShadow } from "utils/colors";
import CommunityModal from "./CommunityModal";
import CommunityPost from "./CommunityPost";

const Community = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="block m-5">
      <span
        className="text-4xl ml-5 font-bold text-yellow-400"
        style={{ textShadow: `${txtShadow}` }}
      >
        커뮤니티
      </span>
      <div className="bg-slate-200 px-24 py-5">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <CommunityPost setModalIsOpen={setModalIsOpen} />
          <CommunityPost setModalIsOpen={setModalIsOpen} />
          <CommunityPost setModalIsOpen={setModalIsOpen} />
          <CommunityPost setModalIsOpen={setModalIsOpen} />
          <CommunityPost setModalIsOpen={setModalIsOpen} />
          <CommunityPost setModalIsOpen={setModalIsOpen} />
          <CommunityPost setModalIsOpen={setModalIsOpen} />
        </div>
      </div>
      <CommunityModal
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
      />
      <ul className="flex justify-center gap-1 mt-8 text-xs font-medium">
        <li>
          <Link className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
            <span className="sr-only">Prev Page</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              cover="currentColor"
            >
              <path
                cover-rule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </li>
        <li>
          <Link className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded">
            1
          </Link>
        </li>
        <li className="block w-8 h-8 leading-8 text-center text-white bg-gray-900 border-gray-900 rounded">
          2
        </li>
        <li>
          <Link className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded">
            3
          </Link>
        </li>
        <li>
          <Link className="block w-8 h-8 leading-8 text-center border border-gray-100 rounded">
            4
          </Link>
        </li>
        <li>
          <Link className="inline-flex items-center justify-center w-8 h-8 border border-gray-100 rounded">
            <span className="sr-only">Next Page</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3"
              viewBox="0 0 20 20"
              cover="currentColor"
            >
              <path
                cover-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Community;

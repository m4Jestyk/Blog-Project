import React, { useState } from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseOver(true);
  };

  const handleMouseLeave = () => {
    setIsMouseOver(false);
  };

  return (
    
      <div
        className={`w-full bg-black rounded-xl text-white hover:text-black p-4 hover:bg-[#FAF9F6] transition-all duration-300 ease-in-out ${
          isMouseOver ? `h-[380px]` : `h-[200px]`
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="w-full justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className="w-full rounded-xl"
          />
        </div>
        <h2 className="text-xl font-bold ">{title}</h2>

        {
          isMouseOver && (
            <Link to={`/post/${$id}`}>
            <button className="mt-4 bg-gray-800 text-white py-2 px-2 rounded-xl">
              Read More
            </button>
            </Link>
          )
        }
      </div>   


  );
}

export default PostCard;

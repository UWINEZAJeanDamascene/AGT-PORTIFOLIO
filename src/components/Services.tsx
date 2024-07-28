import {
  faExternalLinkAlt,
  faThumbsDown,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import databasee from "../images/databasee.jpg";
import design from "../images/design.jpg";
import webdev from "../images/webdev.jpg";
const Services = () => {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('count');
    return storedCount !== null ? parseInt(storedCount) : 0;
  });
  useEffect(()=>{
    localStorage.setItem("count", count.toString())
  },[count, setCount])

  const [dislikeCount, setDislikeCount] = useState(()=>{
    const dislikeCount = localStorage.getItem("dislikeCount")
    return dislikeCount !== null ? parseInt (dislikeCount) : 0
  });
  useEffect(()=>{
    localStorage.setItem("dislikeCount",dislikeCount.toString())
  },[ dislikeCount, setDislikeCount])
 

  const [countT, setCountT] = useState(()=>{
    const countT = localStorage.getItem("countT")
    return countT !== null ? parseInt(countT): 0;
  });
  useEffect(()=>{
    localStorage.setItem("countT", countT.toString())},[countT, setCountT])

  const [dislikeCountT, setDislikeCountT] = useState(()=>{
    const dislikeCountT = localStorage.getItem("dislikeCountT")
    return dislikeCountT !== null? parseInt(dislikeCountT): 0;
  });
   useEffect(()=>{
    localStorage.setItem("dislikeCountT", dislikeCountT.toString())},[dislikeCountT,setDislikeCountT]
  );

  const [countP, setCountP] = useState(()=>{
    const countP = localStorage.getItem("countP")
    return countP !== null ? parseInt(countP): 0;
  });
  useEffect(()=>{
    localStorage.setItem("countP", countP.toString());
  },[countP, setCountP])

  const [dislikeCountP, setDislikeCountP] = useState(()=>{
    const dislikeCountP = localStorage.getItem("dislikeCountP");
    return dislikeCountP !== null ? parseInt(dislikeCountP):0;

  });
  useEffect(()=>{
    localStorage.setItem("dislikeCountP", dislikeCountP.toString())
  },[dislikeCountP, setDislikeCountP])

  const increment = () => {
    setCount(count + 1);
  };
  const incrementDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };

  const incrementDislikeT = () => {
    setDislikeCountT(dislikeCountT + 1);
  };
  const incrementT = () => {
    setCountT(countT + 1);
  };

  const incrementDislikeP = () => {
    setDislikeCountP(dislikeCountP + 1);
  };

  const incrementP = () => {
    setCountP(countP + 1);
  };
  return (
    <div className="w-full bg-[#0C252BDE] p-5">
    <div className="ml-24 pt-2 text-white font-serif">
      <h2 className="uppercase text-2xl gradient-text">Services</h2>
      <p>Here are some services we offer:</p>
    </div>
    <div className="flex justify-center gap-5 mb-3 items-center py-10 flex-wrap">
      <div className="w-80 shadow-xl p-4 rounded-xl project text-center">
        <img src={webdev} alt="web-logo" className="mx-auto mb-2" />
        <span className="text-[#c94cb4]">Web Development</span>
        <h1 className="text-gray-300 mt-2">
          Key Features:
          <span>
            User authentication, data management, API integration, and
            real-time functionalities.
          </span>
        </h1>
        <div className="text-[#c94cb4] cursor-pointer mt-3">
          <span>
            <FontAwesomeIcon icon={faExternalLinkAlt} /> View
          </span>
        </div>
        <div className="flex gap-1 text-red-600 justify-center mt-3">
          <button
            onClick={increment}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Like
          </button>
          <span>{count}</span>
          <button
            onClick={incrementDislike}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faThumbsDown} /> Dislike
          </button>
          <span>{dislikeCount}</span>
        </div>
      </div>
  
      <div className="w-80 shadow-xl p-4 rounded-xl project text-center">
        <img src={design} alt="design-logo" className="mx-auto mb-2" />
        <span className="text-[#c94cb4]">UI/UX Design</span>
        <h1 className="text-gray-300 mt-2">
          Key Features:
          <span>
            User Research and Analysis, Information Architecture,
            Interaction Design, Usability Testing and Iteration, User-Centered Design.
          </span>
        </h1>
        <div className="text-[#c94cb4] cursor-pointer mt-3">
          <span>
            <FontAwesomeIcon icon={faExternalLinkAlt} /> View
          </span>
        </div>
        <div className="flex gap-1 text-red-600 justify-center mt-3">
          <button
            onClick={incrementT}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Like
          </button>
          <span>{countT}</span>
          <button
            onClick={incrementDislikeT}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faThumbsDown} /> Dislike
          </button>
          <span>{dislikeCountT}</span>
        </div>
      </div>
  
      <div className="w-80 shadow-xl p-4 rounded-xl project text-center">
        <img src={databasee} alt="database-logo" className="mx-auto mb-2" />
        <span className="text-[#c94cb4]">Database Management</span>
        <h1 className="text-gray-300 mt-2">
          Key Features:
          <span>
            Data Abstraction, Data Security and Integrity, Data Backup and
            Recovery, Data Modeling and Normalization, etc.
          </span>
        </h1>
        <div className="text-[#c94cb4] cursor-pointer mt-3">
          <span>
            <FontAwesomeIcon icon={faExternalLinkAlt} /> View
          </span>
        </div>
        <div className="flex gap-1 text-red-600 justify-center mt-3">
          <button
            onClick={incrementP}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faThumbsUp} /> Like
          </button>
          <span>{countP}</span>
          <button
            onClick={incrementDislikeP}
            className="hover:text-blue-700"
          >
            <FontAwesomeIcon icon={faThumbsDown} /> Dislike
          </button>
          <span>{dislikeCountP}</span>
        </div>
      </div>
    </div>
  </div>
  
    
  );
};

export default Services;

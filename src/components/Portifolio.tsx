import { faExternalLinkAlt, faStarHalfAlt, faStar as regularStar, faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ecommerce from "../images/ecommerce.jpg";
import learning from "../images/learning.png";
import platform from "../images/platform.jpg";
const Portifolio = () => {
  return (
    <div className="bg-[#162b40]">
      <h1 className="pl-28 relative pt-5 uppercase text-xl text-slate-200"> Portifolio</h1>
      <p className="pl-28 pt-2 text-slate-200">RECENT WORK</p>
      <div className=" flex gap-10 justify-center items-center  h-auto py-4 pb-4 column ">
        <div className="w-80 max-sm:w-screen shadow-xl p-3 column rounded-md bg-[#123]">
          <img src={ecommerce} alt="ecommerce logo" />
          <h2 className="text-[#c94cb4]">E-commerce</h2>
          <h3 className="text-[#8f878e]">Key Features:</h3>
          <p className=" pl-2 text-[#8f878e]">
            Product catalog with search and filter functionality, User
            authentication and profile management, Shopping cart and checkout
            process with payment integration, Admin panel for managing products,
            orders, and users, .
          </p>
          <div className="text-[#c94cb4] cursor-pointer pl-3 pb-3">
            <span>
              <FontAwesomeIcon icon={faExternalLinkAlt} /> View
            </span>
          </div>
          <div className="rating cursor-pointer p-1">
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={faStarHalfAlt} /> 
      <FontAwesomeIcon icon={regularStar} />
    </div>
        </div>

        <div className="w-80 shadow-xl p-3 rounded-md max-sm:w-screen column bg-[#123]">
          <img src={platform} alt="ecommerce logo" />
          <h2 className="text-[#c94cb4]">Social Media Platform</h2>
          <h3 className="text-[#8f878e]">Key Features:</h3>
          <p className=" pl-2 text-[#8f878e]">
            User registration and profile creation, Newsfeed displaying posts
            from followed users, Likes, comments, and sharing functionality,
            User notifications for interactions, Privacy settings and content
            moderation tools.
          </p>
          <div className="text-[#c94cb4] cursor-pointer pl-3 pb-3">
            <span>
              <FontAwesomeIcon icon={faExternalLinkAlt} /> View
            </span>
          </div>
          <div className="rating p-1">
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={faStarHalfAlt} /> 
      <FontAwesomeIcon icon={regularStar} />
    </div>
        </div>

        <div className="w-80 shadow-xl p-3 rounded-md max-sm:w-screen column bg-[#123]">
          <img src={learning} alt="learning logo" />
          <h2 className="text-[#c94cb4]">Online Learning Platform</h2>
          <h3 className="text-[#8f878e]">Key Features:</h3>
          <p className="pl-2 text-[#8f878e]">
            Course creation and management, including video lectures, quizzes,
            and assignments User registration and profile management, Discussion
            forums and messaging for student-instructor interaction, .
          </p>
          <div className="text-[#c94cb4] cursor-pointer pl-3 pb-3">
            <span>
              <FontAwesomeIcon icon={faExternalLinkAlt} /> View
            </span>
          </div>
          <div className="rating pb-4">
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={solidStar} /> 
      <FontAwesomeIcon icon={faStarHalfAlt} /> 
      <FontAwesomeIcon icon={regularStar} />
    </div>
        </div>
      </div>
    </div>
  );
};

export default Portifolio;

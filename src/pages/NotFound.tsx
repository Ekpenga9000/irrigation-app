import { Link } from "react-router-dom";
import { IoWarningOutline } from "react-icons/io5";

const NotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="p-8 border rounded-md shadow-md text-center flex flex-col items-center">
        <IoWarningOutline className="text-4xl"/>
        <h1 className="font-semibold text-4xl mb-4">Oops! Page not found</h1>
        <Link to="/" className="text-lg underline">
          Please click here to return home.
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

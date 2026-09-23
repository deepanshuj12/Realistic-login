import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-amber-100">
      <div className="flex flex-col items-center gap-8">
        <p className="text-3xl font-semibold">Welcome To Logger</p>

        <div className="flex gap-6">
          <Link
            to="/login"
            className="bg-blue-500 text-white rounded px-8 py-3 hover:bg-blue-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="bg-blue-500 text-white rounded px-8 py-3 hover:bg-blue-600"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// function Home() {
//   return (
//     <div>
//       <div className="flex flex-col justify-evenly">
//         <p className=" flex justify-center text-3xl ">Welcome To Logger</p>
//         <div className="flex justify-evenly">
//           <div className="bg-blue-500 rounded py-3 px-8">
//             <Link to={"/login"}>Login</Link>
//           </div>
//           <div className="bg-blue-500 rounded py-7">
//             <Link to={"/register"}>Register</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Home;

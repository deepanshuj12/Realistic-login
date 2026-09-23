import { useState } from "react";
import { Navigate,Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName]= useState("")
  const [phone,setPhone]=useState("")
  // const handleSubmit =async(e)=>{
  //    Navigate("#")
  // }
  return ( 
  <div className="py-9">
    <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-88
     text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
    //  onSubmit={handleSubmit}
     >
      <p className="text-2xl font-medium m-auto">
        <span className="text-blue-500">Register</span>
      </p>
       <div className="w-full ">
        <p>Name</p>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500"
          type="text"
          required
        />
      </div>
      <div className="w-full ">
        <p>Email</p>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500"
          type="email"
          required
        />
      </div>
      <div className="w-full ">
        <p>Phone Number</p>
        <input
          onChange={(e) => setPhone(e.target.value)}
          value={phone}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500"
          type="number"
          required
        />
      </div>
      <div className="w-full ">
        <p>Password</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="type here"
          className="border border-gray-200 rounded w-full p-2 mt-1 outline-blue-500"
          type="password"
          required
        />
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-600 transition-all text-white w-full py-2 rounded-md cursor-pointer"
        
      >
        Register
      </button><div className="m-auto text-blue-800">
        <Link to={"/login"}>
        Already have an account?</Link>
     </div>
    </form>
     
    </div>
    
  )
}
export default Register;

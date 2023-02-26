import axios from "axios";

export const loginUser= async(data)=> {
    return await axios.get("http://localhost:4000/loginUser",data); 
}
export const regiterUser= async(data)=>{
    return await axios.post("http://localhost:4000/newUser",data);
}

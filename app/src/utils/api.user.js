import axios from "axios";

export const login= async(data)=> {
    return await axios.get("http://localhost:4000/login",data); 
}
export const regiterUser= async(data)=>{
    return await axios.post("http://localhost:4000/newUser",data);
}

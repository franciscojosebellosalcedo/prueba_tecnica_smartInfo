import axios from "axios";

export const loginUser= async(email,password)=> {
    return await axios.get(`http://localhost:4000/log/${email}/${password}`); 
}
export const regiterUser= async(data)=>{
    return await axios.post("http://localhost:4000/newUser",data);
}

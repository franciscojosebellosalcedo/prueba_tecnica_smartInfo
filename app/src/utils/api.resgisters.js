import axios from "axios";

export const peopleList= async()=> {
    return await axios.get("http://localhost:4000/people"); 
}
export const departamentsList= async()=> {
    return await axios.get("http://localhost:4000/departaments"); 
}
export const getInfo= async(data)=> {
    return await axios.get(`http://localhost:4000/serch/${data}`); 
}
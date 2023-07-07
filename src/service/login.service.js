import axios from "../config/axios";

const LOGIN_URL="login";


const login=async(email,password)=>{
    try {
        return await axios.post(LOGIN_URL,JSON.stringify({email:email,password:password}),
        {
            headers:{'Content-Type':'applicatiion/json'},
            withCredentials:false
        }
        ).then(reponse=>{
            alert(reponse.data);
        })
    } catch (error) {
        console.log(error.reponse);
        return error.reponse;
    }
};


const loginService={
    login
};

export default loginService;
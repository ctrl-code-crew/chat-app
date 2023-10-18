import axios from "axios";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:4000";

interface Login {
    email: string;
    password: string;
}

export function Login(props: Login) {
    
    axios.post(`${URL}/login`, {props})
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.error(error);
    });
}
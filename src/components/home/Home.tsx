import React,{FC, useEffect, useState} from "react";
import { Login } from "../login/Login";
import { useAppSelector } from "../../redux/hooks";
import { loginLoading, loginResponseError, loginResponses } from "../../redux/loginSlice";
import { Quiz } from "../quiz/Quiz";

export const Home: FC = () => {
    const loginResp = useAppSelector(loginResponses);
    const loginError = useAppSelector(loginResponseError);
    const loading = useAppSelector(loginLoading);
    const [validUser,setValidUser] = useState(false);

    useEffect(() => {
        if (loginResp !== null) {
          if (loginResp.statusCode === 200) {
            setValidUser(true);
            console.log(loginResp);
            localStorage.setItem('userDetail',JSON.stringify(loginResp?.data));
          }
        }
        if(loginError){
            setValidUser(false);
        }
    },[loginResp,loginError,loading])

    useEffect(()=>{
        var userDetail = localStorage.getItem("userDetail") || "";
        userDetail =userDetail? JSON.parse(userDetail):"";
        if(userDetail){
            setValidUser(true);
        }
    },[])
    
    return (
        <>
          {!validUser ? <Login/> :<Quiz/>}
        </>
      
    )
}
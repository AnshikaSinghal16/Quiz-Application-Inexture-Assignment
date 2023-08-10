import React ,{FC, useEffect, useState} from "react";
import { Textbox } from "../atoms/textbox/Textbox";
import { Button } from "../atoms/button/Button";
import * as S from "./styles/styles"
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { loginLoading, loginResponseError, loginResponses, verifyUser } from "../../redux/loginSlice";


export const Login: FC = () => {
  const dispatch = useAppDispatch();
  const loginError = useAppSelector(loginResponseError);

  const [authenticationFailed, setAuthenticationFailed] =useState(false);
  const [emailAddress, setEmailAddress] = useState({
    value: "",
    error: "",
    errorClass: "",
  })
  const [password, setPassword] = useState({
    value: "",
    error: "",
    errorClass: "",
  })

  useEffect(()=>{
    if(loginError){
      setAuthenticationFailed(true);
    }
  },[loginError])

  const handleChange = (e: any, type: string) => {
    if (type === "emailAddress") {
      if (e.target.value) {
        setEmailAddress({ value: e.target.value, error: "", errorClass: "" })
      } else {
        setEmailAddress({
          value: "",
          error: "Email address is required",
          errorClass: "error-class",
        })
      }
    }
    if (type === "password") {
      if (e.target.value) {
        setPassword({ value: e.target.value, error: "", errorClass: "" })
      } else {
        setPassword({
          value: "",
          error: "Password is required",
          errorClass: "error-class",
        })
      }
    }
  }

  const submitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      emailAddress.value !== "" &&
      emailAddress.errorClass === "" &&
      password.value !== "" &&
      password.errorClass === ""
    ) {
      const parameter = {
        emailAddress:emailAddress.value,
        password : password.value
      };
      dispatch(verifyUser(parameter));
    }
    else {
      if (emailAddress.value === "") {
        setEmailAddress({
          value: "",
          error: "Email address is required",
          errorClass: "error-class",
        })
      }
      if (password.value === "") {
        setPassword({
          value: "",
          error: "Password is required",
          errorClass: "error-class",
        })
      }
    }
  }

  return (
    <S.Content isReversed={false}>
    <section className="container mb-60">
    <div className="row justify-content-center p-0">
      <h1 className="container-login-heading">Login</h1>
      {authenticationFailed &&<div className="error">{"Authentication Failed"}</div>}
      {/* Login Container */}
        <div id="login-blk" className="col-md-4 login-container">
          <form
            role="form"
            onSubmit={submitLogin}
          >
            <div className="row">
              <div className="col-12 mb-3">
                <Textbox
                  name={"emailAddress"}
                  label={"Email Address"}
                  placeholder={"Enter email address"}
                  labelclassName={"label"}
                  textClassName={"inputBox"}
                  maxlength={100}
                  inputType="text"
                  errorMsg={emailAddress.error}
                  onChange={(e: any) =>
                    handleChange(e, "emailAddress")
                  }
                  required={false}
                  value={emailAddress.value}
                  autofocus={true}
                />
              </div>
              <div className="col-12 mb-2">
                <Textbox
                  name={"password"}
                  label={"Password"}
                  placeholder={"Enter a password"}
                  labelclassName={"label"}
                  textClassName={"inputBox"}
                  maxlength={100}
                  inputType="password"
                  errorMsg={password.error}
                  required={false}
                  onChange={(e: any) => handleChange(e, "password")}
                  enableShowPassword
                  value={password.value}
                />
              </div>
            
              <div className="col-12 mb-3">
                <Button
                  type="submit"
                  label={"Login"}
                >
                  {"LOGIN"}
                </Button>
              </div>
            </div>
          </form>
        </div>
    </div>
  </section>
  </S.Content>
  )
}
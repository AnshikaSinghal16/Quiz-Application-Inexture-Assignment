import styled, { css } from "styled-components/macro"
import * as T from "../types/styleTypes"


export const Content = styled.div<T.Content>`
  ${(p) => {
    return css`
      .container {
        & > div {
          padding: 48px 0;
          flex-direction: column;
        }
        .error{
          color:#FF0000;
          font-size:21px;

        }
        .container-login-heading{
          font-size:28px;
        }
        .login-container {
          margin: auto;
          text-align: center;
          background-color: #ffffff;
          border-radius: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          .logo {
            width: 93px;
          }
          h1 {
            font-size: 32px;
          }
          form {
            text-align: left;
            min-width:500px;
            button.btn {
              width: 100%;
              letter-spacing: 1px;
              text-transform: uppercase;
            }           
            .error{
              color:red;
            } 
            }
          }
        }
      }
    `
  }}
`

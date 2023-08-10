import styled, { css } from "styled-components/macro"



export const Content = styled.div<any>`
  ${(p) => {
    const theme = p.gradients?.visible ? p.theme.gradient : p.theme

    return css`
      .container {
        & > div {
          flex-direction: column;
        }
        .result-statement{
          font-size:24px;
          font-weight:600;
          margin-bottom:6px;
        }
        .submitted-section{
          font-size:24px;
        }
        .submitted-answers{
          margin-top: 20px;
          margin-bottom: 20px;
          font-weight: 600;
        }
        .quiz-submitted-questions-answers{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 572px;
        }
        .submitted-question-statement{
          margin-bottom:10px;
          margin-top:10px;
        }
        .result-new-row{
          font-size:28px;
          font-weight:600;
          margin-bottom:6px;
        }
        .container-quiz-heading{
          font-size:32px;
          font-weight:600;
          background-color: #355C7D;
          color:white;
        }
        .questions{
          font-size: 30px;
          display: flex;
          flex-direction: column;
        }
        .radio-options{
          display:flex;
          flex-direction:row;
          margin-left: 528px;
        column-gap: 13px;
        }
        .radio-circle{
          width: 20px;
        }
        .question-statement{
          margin-bottom:10px;
        }
        .quiz-button-table{
          display: table;
          border-collapse: separate;
          margin-left: auto;
          margin-right: auto;
          margin-top: 46px;
        }
        .quiz-button-row{
          display: table-row;
        }
        .quiz-button-cell{
          display: table-cell;
        }
        .quiz-button-paycell{
          padding-left:18px;
        }
          }
        }
      }
    `
  }}
`

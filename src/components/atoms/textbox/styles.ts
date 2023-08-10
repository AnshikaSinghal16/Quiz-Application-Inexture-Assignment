import styled from "styled-components/macro"


export const View = styled.div`
  .form-grey {
    background-color: #f4f4f4;
    border-color: transparent;
    border-bottom-color: rgba(0, 0, 0, 1);
  }

  
label {
  font-size: 21px;
  color: #333333;
  display: block;
  font-weight: 600;
  margin-bottom: .5rem;
  touch-action: manipulation;
    padding: 0;
    box-sizing: border-box;
}

.flex-span {
  display: flex;
}

.position-relative {
  position: relative !important;
}
.align-items-center {
  -ms-flex-align: center !important;
  align-items: center !important;
}

input[type="text"],
input[type="password"],
select,
textarea {
  border-radius: 4px;
  border: solid 1px  #b6b9bb;
  width: 100%;
  padding: 12px;
  font-size: 21px;
  height: 39px;
  color: #333333;
  margin-bottom:20px;
}



input[type="text"]:disabled,
input[type="password"]:disabled,
textarea:disabled {
  background-color: #f0f0f0 !important;
  opacity: 1 !important;
  -webkit-appearance: none !important;
}

.error-msg input[type="text"],
.error-msg input[type="password"],
.error-msg select,
.error-msg textarea {
  border-color: #de0000;
}

.error-msg input[type="text"],
.error-msg input[type="password"],
.error-msg select,
.error-msg textarea {
  border-color: #de0000;
}

select {
  padding: 0px 12px;
}



  
  .right-icon,
  .show-password {
    display: flex;
    align-items: center;
    position: absolute;
    right: 10px;
    height: 100%;
    
  }

  .show-password {
    cursor: pointer;
  }

  
  .error {
    color:#de0000;
    margin-bottom:14px;
    line-height: 18px;
  }
  .input-wrapper {
    width: 100%;
  }
 
`

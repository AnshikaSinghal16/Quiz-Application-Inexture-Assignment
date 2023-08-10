
export interface Props {
  content: string
  theme: string
}

export interface Content {

  emailAddress: {
    text: string
    errorMessage: string
    placeholder: string
    textLength: string
  }
  password: {
    text: string
    errorMessage: string
    placeholder: string
    textLength: string
    invalidErrorMessage: string
  }
  loginButton: {
    label: string
    url: string
    isInternal: boolean
  }
 
}

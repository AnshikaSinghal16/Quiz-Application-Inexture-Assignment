import React, { useState } from "react"
import * as S from "./styles"


export interface DataProps {
  label?: string
  required?: boolean
  inputType: string
  placeholder?: string
  errorMsg?: string
  className?: string
  maxlength?: number
  prefix?: string
  name?: string
  textClassName?: string
  min?: number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  labelclassName?: string
  value?: string
  disabled?: boolean
  max?: number
  enableShowPassword?: boolean
  autofocus?: boolean
 
}

export const Textbox: React.FC<DataProps> = ({
  label = "",
  inputType = "text",
  placeholder = "",
  errorMsg = "",
  className = "",
  maxlength = 0,
  prefix = "",
  name = "",
  onChange = () => { },
  min = 0,
  max,
  labelclassName,
  value,
  disabled = false,
 
}) => {
  const [type, setType] = useState(inputType)

  const idString = (string: any) =>
  string.replaceAll(" ", "-").toLowerCase()

  return (
    <S.View>
      <div className={`${className} ${errorMsg ? "error-msg" : ""} `}>
        <label
          htmlFor={
            label ? `${idString(label)}-id` : name ? `${name}-id` : `input-id`
          }
          className={labelclassName}
        >
          {label}        
        </label>
        <span className="flex-span position-relative align-items-center">
          {prefix && prefix.length > 0 && (
            <span className="prefix">{prefix}</span>
          )}
          <input
            id={
              label ? `${idString(label)}-id` : name ? `${name}-id` : `input-id`
            }
            type={type}
            placeholder={placeholder}
            maxLength={maxlength}
            name={name}
            onChange={onChange}
            min={min}
            value={value}
            disabled={disabled}
            max={max}
          />
          
        </span>
  
        <span className="error">{errorMsg}</span>
      </div>
    </S.View >

  )
}

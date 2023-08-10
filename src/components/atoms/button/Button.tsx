import React from "react"
import * as S from "./styles"
export interface ButtonProps {
  children?: string
  label: string
  onClick?: (e?: any) => void
  disabled?: boolean
  id?: string
  type?: any
  classStyle?:string
  inverse?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  label = "label",
  classStyle = "default",
  inverse = false,
  disabled = false,
  id = "",
  type = "button",
  ...props
}) => {
  return (
    <S.View>
      <div
        className={ "css-tooltip disabled-button-parent"
          }>
          <S.Button
            disabled={disabled}
            classStyle={classStyle}
            className={
              inverse ? "btn-inverse btn btn-success" : "btn btn-success"
            }
            id={id}
            type={type}
            {...props}
          >
            <span>{label}</span>
          </S.Button>
</div>    
</S.View>
  )
}

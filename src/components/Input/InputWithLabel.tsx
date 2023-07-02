import React, { FC, useEffect, useRef } from "react"

type SearchProps = {
  value: string,
  id: string,
  type?: string,
  children?: React.ReactNode,
  isFocused: boolean,
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputWithLabel: FC<SearchProps> = ({id, value, type = 'text', onInputChange, children, isFocused}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(()=>{
    if(isFocused && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isFocused])
  
    return (      
        <>
          <label htmlFor={id}>{children}</label>
          <input
            ref={inputRef}
            id={id}
            type={type}
            value={value}
            autoFocus={isFocused}
            onChange={onInputChange}
          />
        </>      
    );
  
}

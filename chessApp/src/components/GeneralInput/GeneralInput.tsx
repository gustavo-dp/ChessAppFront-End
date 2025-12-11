import { useState } from 'react'
interface LoginProps {
  name?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  type?: string;
  placeholder?: string;
  value?: string,
  className?: string,
}
const GeneralInput = ({
  onChange,
  name,
  type,
  placeholder,
  className
}: LoginProps) => {
  return (
    <input
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
    />
  )
}

export default GeneralInput
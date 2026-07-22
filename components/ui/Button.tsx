import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Optional icon component */
  icon?: React.ReactNode
  /** Button variant */
  variant?: 'primary' | 'secondary'
}

export const Button: React.FC<ButtonProps> = ({ children, icon, variant = 'primary', ...props }) => {
  const baseClasses = "inline-flex items-center px-4 py-2 rounded-md focus:outline-none focus:ring-2"
  const variantClasses = variant === 'primary'
    ? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
    : "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500"

  return (
    <button className={`${baseClasses} ${variantClasses}`} {...props}>
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  )
}

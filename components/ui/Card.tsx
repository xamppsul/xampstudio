import React from 'react'

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
}

export const Card: React.FC<CardProps> = ({ title, description, children, className, ...props }) => {
  return (
    <div
      className={`bg-card text-card-foreground border border-border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow ${className ?? ''}`}
      {...props}
    >
      {title && <h3 className="font-semibold mb-2 text-foreground">{title}</h3>}
      {description && <p className="text-sm text-muted-foreground mb-4">{description}</p>}
      {children}
    </div>
  )
}

import React from 'react'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
}

// Uses theme tokens (primary / secondary / semantic colors) so badges stay
// legible in both light and dark mode instead of fixed light-only grays.
const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  primary: 'bg-primary/10 text-primary',
  secondary: 'bg-secondary text-secondary-foreground',
  success: 'bg-green-500/10 text-green-600 dark:text-green-400',
  warning: 'bg-yellow-500/10 text-yellow-600 dark:text-yellow-400',
  danger: 'bg-destructive/10 text-destructive',
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'primary', children, className, ...props }) => {
  const classes = `inline-block px-2 py-0.5 rounded text-xs font-medium ${variantClasses[variant]} ${className ?? ''}`
  return (
    <span className={classes} {...props}>
      {children}
    </span>
  )
}

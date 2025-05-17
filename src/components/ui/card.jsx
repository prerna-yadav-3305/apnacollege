import React from "react"
import { cn } from '../../lib/utils';

const Card = ({ className, ...props }) => {
  return <div className={cn("rounded-xl border bg-card text-card-foreground shadow", className)} {...props} />
}

const CardContent = ({ className, ...props }) => {
  return <div className={cn("p-6 pt-0", className)} {...props} />
}

export { Card, CardContent }

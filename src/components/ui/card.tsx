
import * as React from "react";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className = "" }: CardProps) {
  return <div className={`rounded-xl border p-6 shadow-sm ${className}`}>{children}</div>;
}

export function CardContent({ children, className = "" }: CardProps) {
  return <div className={`mt-4 ${className}`}>{children}</div>;
}

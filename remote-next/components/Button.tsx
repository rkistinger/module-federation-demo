import React from 'react';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: Props) {
  return <button {...props}>{props.children}</button>;
}

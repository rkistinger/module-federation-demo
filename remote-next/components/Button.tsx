import '@carvana/showroom-forms/Button/index.css';
import React from 'react';
import PrimaryButton from '@carvana/showroom-forms/Button/Primary';

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function Button(props: Props) {
  return <PrimaryButton {...props}>{props.children}</PrimaryButton>;
}

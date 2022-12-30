import React from 'react';
export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}
export declare function Button(props: Props): JSX.Element;

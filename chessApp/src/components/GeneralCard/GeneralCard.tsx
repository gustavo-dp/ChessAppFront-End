import React from 'react'
import "./generalcard.css"
type GeneralCardProps = {
    children: React.ReactNode;
    margin?: string;
    width?: string;
    height?: string;
    fontSize?: string;
}

const GeneralCard = (
    { children,
        margin,
        width,
        height,
        fontSize }:
        GeneralCardProps) => {
    return (
        <div className='ledger-card'>
            {children}
        </div>
    )
}

export default GeneralCard
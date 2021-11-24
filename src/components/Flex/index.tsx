import { CSSProperties } from 'react'
import s from './index.module.css'

interface IFlexProps {
    style?: CSSProperties
    children?: React.ReactNode
    className?: string
}

export const Flex: React.FC<IFlexProps> = ({ children, style, className }) => {
    return (
        <div
            className={`${s.container} ${className}`}
            style={style}
        >
            {children}
        </div>
    )
}
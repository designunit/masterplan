import classNames from 'classnames'
import { CSSProperties } from 'react'
import s from './index.module.css'

interface IFlexProps {
    style?: CSSProperties
    children?: React.ReactNode
    className?: string
    mobileReverse?: boolean
}

export const Flex: React.FC<IFlexProps> = ({ children, style, className, mobileReverse }) => {
    return (
        <div
            className={classNames(s.container, className, mobileReverse && s.mobileReverse)}
            style={style}
        >
            {children}
        </div>
    )
}
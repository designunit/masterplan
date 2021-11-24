import s from './styles.module.css'
import React, { CSSProperties } from "react"

export type SectionProps = {
    style?: CSSProperties
    className?: string
    tag?: string
}

export const Section: React.FC<SectionProps> = ({ style, className, tag = 'section', children }) => {
    return React.createElement(
        tag,
        {
            className: `${s.section} ${className}`,
            style,
        },
        children
    )
}
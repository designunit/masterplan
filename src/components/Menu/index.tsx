import s from './styles.module.css'
import { Button } from "../Button"
import { useRef } from "react"

interface MenuProps {
    onClick: (i: number) => void
}

export const Menu: React.FC<MenuProps> = ({ onClick }) => {

    const underline = useRef(null)

    const buttons = [
        {
            text: 'Карта идей',
            href: '/'
        },
        {
            href: '/#test',
            text: 'Опрос'
        },
    ]

    return (
        <>
            {buttons.map((x, i) => (
                <Button
                    key={i}
                    href={x.href}
                    theme='link'
                    size='default'
                    underlineRef={underline}
                    onClick={() => onClick(i)}
                    style={{
                        color: 'var(--color-blue)',
                        paddingLeft: 6,
                        paddingRight: 6,
                    }}
                >
                    {x.text}
                </Button>
            ))}
            <div
                ref={underline}
                className={s.underline}
                style={{
                    position: 'absolute',
                    width: '0',
                    height: '2px',
                    backgroundColor: 'var(--color-red)',
                    transition: 'all .5s',
                }}
            />
        </>
    )
}
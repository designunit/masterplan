import s from './styles.module.css'

export type LogoProps = {
    style?: React.CSSProperties
}

export const Logo: React.SFC<LogoProps> = props => {
    // const router = useRouter()
    // const main = router.asPath === '/'

    return (
        <span className={s.logo} style={props.style}>
            МАСТЕРПЛАН г.Павлово
        </span>
    )
}
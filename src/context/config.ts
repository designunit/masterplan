import { createContext } from 'react'

export type Config = {
    title: string
    mapUrl: string
    bgImage: string
    formSrc: string
}

export const defaultConfig: {
    novgorod: Config
    pavlovo: Config
} = {
    novgorod: {
        title: `Автозаводского района\n\rНижнего Новгорода`,
        mapUrl: 'https://mesto.io/THPXJRZPFBG8DKWN',
        bgImage: '/static/автозаводской.png',
        formSrc: 'https://docs.google.com/forms/d/e/1FAIpQLScfiUqNZFNvZsxuJRnGT3aNhMkX0l1Cp_2-1ZPwCKgSgKTqUw/viewform?embedded=true',
    },
    pavlovo: {
        title: `города Павлово`,
        mapUrl: 'https://mesto.io/MKYV8ZAMWD7RC2F4',
        bgImage: '/static/pavlovo.png',
        formSrc: 'https://docs.google.com/forms/d/e/1FAIpQLScyR7Ew-5Bw0mCUjMsezLBqI4JDOS3QI6Z5UGrJPiAjPRyf5w/viewform?embedded=true',
    }
}

export const ConfigContext = createContext<Config>(defaultConfig.novgorod)

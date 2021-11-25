import { createContext } from 'react'

export type Config = {
    title: string
    mapUrl: string
    bgImage: string
}

export const defaultConfig: {
    novgorod: Config
    pavlovo: Config
} = {
    novgorod: {
        title: `Автозаводского района\n\rНижнего Новгорода`,
        mapUrl: 'https://google.com',
        bgImage: '/static/автозаводской.png'
    },
    pavlovo: {
        title: `города павлово`,
        mapUrl: 'https://google.com',
        bgImage: '/static/pavlovo.png'
    }
}

export const ConfigContext = createContext<Config>(defaultConfig.novgorod)

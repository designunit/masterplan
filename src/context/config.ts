import { createContext } from 'react'

export type Config = {
    mapUrl: string
}

export const defaultConfig: Config = {
    mapUrl: 'https://google.com',
}

export const ConfigContext = createContext<Config>(defaultConfig)

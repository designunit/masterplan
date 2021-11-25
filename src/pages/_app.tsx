import 'src/style.css'
import 'src/style/react-modal.css'

import Head from 'next/head'
import { YMetrika } from 'src/components/YMetrika'
import { ConfigContext, defaultConfig } from 'src/context/config'
import { ControlsContext } from 'src/context/controls'
import { AppType } from 'next/dist/shared/lib/utils'
import { useEffect, useState } from 'react'
import Error from 'next/error'

const App: AppType = (props) => {
    const { Component, pageProps } = props
    const metrika = process.env.YANDEX_METRIKA as string

    const [subdomain, setSubdomain] = useState<boolean | string>(false)
    useEffect(() => {
        const windowSub = window.document.location.hostname.split('.')[0]
        if (['novgorod', 'pavlovo'].includes(windowSub)) {
            setSubdomain(windowSub)
        }
    }, [])

    if (subdomain == false) return <Error statusCode={404} />

    return (
        <ConfigContext.Provider value={defaultConfig[subdomain as string]}>
            <ControlsContext.Provider
                value={{
                    shape: 'default',
                    size: 'default',
                }}
            >
                <Head>
                    <meta charSet='utf-8' />
                    <meta
                        name='viewport'
                        content='width=device-width, maximum-scale=1.0'
                    />

                    {true ? null : (
                        <YMetrika number={metrika} mode={'script'} />
                    )}
                </Head>

                <Component {...pageProps} />
            </ControlsContext.Provider>
        </ConfigContext.Provider>
    )
}

export default App

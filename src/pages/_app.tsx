import 'src/style.css'
import 'src/style/react-modal.css'

import Head from 'next/head'
import { YMetrika } from 'src/components/YMetrika'
import { ConfigContext, defaultConfig } from 'src/context/config'
import { ControlsContext } from 'src/context/controls'
import { AppType } from 'next/dist/shared/lib/utils'

const App: AppType = (props) => {
    const { Component, pageProps } = props
    const metrika = process.env.YANDEX_METRIKA as string

    return (
        <ConfigContext.Provider value={defaultConfig['pavlovo']}>
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

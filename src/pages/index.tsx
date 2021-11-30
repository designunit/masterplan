import { GetStaticProps, NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageLayout } from 'src/components/PageLayout'
import React, { useContext, useState } from 'react'
import { ConfigContext } from 'src/context/config'
import { NextSeo } from 'next-seo'
import Error from 'next/error'
import { Modal } from 'src/components/Modal'

interface PageProps {

}

const Index: NextPage<PageProps> = props => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const { title, bgImage } = useContext(ConfigContext)

    return <Error statusCode={404} />
    return (
        <PageLayout
            openModal={() => setModalIsOpen(true)}
        >
            <ParallaxProvider>
                <NextSeo
                    title={`Мастер-план ${title}`}
                    openGraph={{
                        title: `Мастер-план ${title}`,
                        images: [
                            { url: bgImage },
                        ],
                    }}
                />

                <Modal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                />

                <Hero
                    openModal={() => setModalIsOpen(true)}
                />

                {/* <span id='whatis' />
                <WhatIs /> */}

                {/* <span id='about' />
                <About /> */}

            </ParallaxProvider>
        </PageLayout>
    )
}


// export const getStaticProps: GetStaticProps = async (ctx) => {
//     return {
//         props: {

//         }
//     }
// }

export default Index
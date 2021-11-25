import { NextPage } from 'next'
import { Hero } from 'src/components/Hero'
import { ParallaxProvider } from 'react-scroll-parallax'
import { PageLayout } from 'src/components/PageLayout'
import React, { useContext, useState } from 'react'
import { ConfigContext } from 'src/context/config'
import { NextSeo } from 'next-seo'

interface PageProps {

}

const Index: NextPage<PageProps> = props => {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    const { title, bgImage } = useContext(ConfigContext)
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

                {/* <Modal
                    modalIsOpen={modalIsOpen}
                    setModalIsOpen={setModalIsOpen}
                /> */}

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


// export const getStaticProps = async () => {
//     const meta: IMeta = {
//         title: 'Набережная г. Верхняя Тура',
//         description: 'Предлагайте идеи и делитесь своими историями города и Верхнетуринского пруда',
//         image: 'https://верхняятура.рф/static/hero.jpg',
//         imageWidth: 1200,
//         imageHeight: 717,

//         url: 'https://верхняятура.рф/',
//         siteName: 'Набережная г. Верхняя Тура',
//         locale: 'ru_RU',
//         type: 'website',
//         domain: 'верхняятура.рф',

//         twitterCard: 'summary_large_image',
//         twitterSite: '@',
//         twitterCreator: '@tmshv',
//     }

//     return {
//         props: {
//             meta,
//         }
//     }
// }

export default Index
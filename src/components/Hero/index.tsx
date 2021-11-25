import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'
import { Flex } from '../Flex'

export const Hero: React.FC<any> = ({ openModal }) => {
    const { title, mapUrl, bgImage } = useContext(ConfigContext)

    return (
        <SectionParalaxedBack
            back={(
                <Image
                    src={bgImage}
                    layout='fill'
                    objectFit='cover'
                    priority
                    loading='eager'
                />
            )}
            contentStyle={{
                width: '100%',
            }}
        >
            <div className={s.h1}>
                <Title>
                    <div>
                        Мастер-план
                    </div>
                    <div>
                        {title}
                    </div>
                </Title>
            </div>

            <Flex
                mobileReverse
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: '2rem',
                }}
            >
                <div className={s.heroButtons}>
                    <Button
                        href={mapUrl}
                    >
                        Карта идей
                    </Button>
                    <div className={s.buttonsSpacer} />
                    <Button
                        theme='red'
                        onClick={openModal}
                    >
                        ПРОЙТИ ОПРОС
                    </Button>
                </div>
                <div className={s.description}>
                    <p>
                        Приглашаем принять участие в разработке важного документа развития Вашего города – мастер-плана.
                    </p>
                    <p>
                        Цель мастер-плана – сбалансированное развитие территории города, решение его проблем и учет интересов его жителей.
                    </p>
                    <p>
                        Чем больше жителей города предложит свои идеи и предложения по улучшению жизни в городе, или, наоборот, озвучит его актуальные проблемы – тем более реализуемым и полезным для каждого жителя получится итоговый документ.
                    </p>
                </div>
            </Flex>
        </SectionParalaxedBack>
    )
}
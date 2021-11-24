import s from './index.module.css'
import { Button } from '../Button'
import { Title } from '../Title'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'
import { SectionParalaxedBack } from '../SectionParalaxedBack'
import Image from 'next/image'
import { Flex } from '../Flex'

export const Hero: React.FC<any> = ({ openModal }) => {
    const { mapUrl } = useContext(ConfigContext)

    return (
        <SectionParalaxedBack
            back={(
                <Image
                    src='/static/placeholder.jpg'
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
                    <span>
                        Mactepплан
                    </span>
                    <br />
                    <span>
                        Павлово
                    </span>
                </Title>
            </div>

            <Flex
                style={{
                    justifyContent: 'space-between',
                    alignItems: 'flex-end',
                    gap: '2rem'
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
                {/* <p className={s.description}>
                    Документ стратегического пространственного планирования города. Такое планирование носит долгосрочный характер и фокусируется на ограниченном числе целей и задач. Разрабатывается стратегический мастер-план публичной властью, но при активном участии экспертов и горожан.
                </p> */}
            </Flex>
        </SectionParalaxedBack>
    )
}
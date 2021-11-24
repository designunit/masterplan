import s from './styles.module.css'

import ReactModal from 'react-modal'
import React, { useRef, useState } from 'react'

export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
}> = ({ modalIsOpen, setModalIsOpen }) => {
    const delay = 250

    const [state, setState] = useState<'start' | 'form' | 'finish'>('start')

    const refContainer = useRef<HTMLDivElement>(null)

    return (
        <ReactModal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            closeTimeoutMS={delay}
            className={s.modal}
            overlayClassName={s.overlay}
            ariaHideApp={false}
        >
            <>
                тут будет опрос
                {/* <OpinionForm
                    showFinish={() => setState('finish')}
                    scrollTop={() => {
                        if (!refContainer.current) return
                        console.log('TO OTOP')
                        refContainer.current.scrollIntoView()
                    }}
                /> */}
            </>
        </ReactModal>
    )
}
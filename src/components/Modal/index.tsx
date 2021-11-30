import s from './styles.module.css'

import ReactModal from 'react-modal'
import React, { useContext } from 'react'
import { ConfigContext } from 'src/context/config'

export type ModalProps = Omit<ReactModal.Props, 'closeTimeoutMS'>

export const Modal: React.FC<{
    modalIsOpen: boolean
    setModalIsOpen: (isOpen: boolean) => void
}> = ({ modalIsOpen, setModalIsOpen }) => {
    const delay = 250

    const { formSrc } = useContext(ConfigContext)

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
                <iframe src={formSrc}
                    width="100%" height="100%" frameBorder="0"
                >
                    Загрузка…
                </iframe>
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
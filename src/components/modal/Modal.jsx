import React from 'react'
import PropTypes from 'prop-types'

// Import Modal component from the library
import { Modal as ModalLib} from '@axda/react-modal'


/**
 * Modal component
 * @component
 * @returns {JSX.Element} 
 */
const Modal = ({showModal, setShowModal}) => {

    // Styling object of the Modal lib
    const modalStyle = {
        modalOverlay: {
            background: ''
        },
        modalWrapper: {
            width: '',
            height: '',
            boxShadow: '',
            background: '',
            borderRadius: '',
            border: '',
        },
        modalContent: {
            color: '',
            background: '#FFF',
            fontSize: '1.5rem',
            fontWeight: '700',
            fontFamily: 'Arial'
        },
        closeModalButton: {
            color: ''
        }
    }

  return (
    <ModalLib showModal={showModal} setShowModal={setShowModal} modalStyle={modalStyle}>
            <p>Employee created!</p>
    </ModalLib>
  )
}


Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    setShowModal: PropTypes.func.isRequired
  }

export default Modal
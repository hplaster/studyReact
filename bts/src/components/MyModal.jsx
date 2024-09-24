import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const MyModal = () => {
    return (
        <div className="modal show" style={{ display: 'block', position: 'initial' }}>
            <Modal.Dialog>
                <Modal.Header closeButton>
                    <Modal.Title>Aviso!</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Aqui tem um aviso.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary">Fui avisado</Button>
                </Modal.Footer>
            </Modal.Dialog>
        </div>
    )
}

export default MyModal;
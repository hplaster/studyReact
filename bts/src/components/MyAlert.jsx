import Alert from 'react-bootstrap/Alert'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';

const MyAlert = () => {
    const [show, setShow] = useState(true);

    let alertOptions = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
    ]

    return (
        <div>
            <br />
            <Alert variant='primary'>
                Alerta muito louco
            </Alert>
            <Alert variant='secundary'>
                Alerta mais louco ainda
            </Alert>
        </div>
    )
}

export default MyAlert;
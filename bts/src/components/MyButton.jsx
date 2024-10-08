import Button from 'react-bootstrap/Button';


const MyButton = () => {
    return (
        <div>
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            {/* <Button variant="link">Link</Button> */}

            <br />
            <br />

            <Button variant="outline-primary">Primary</Button>{' '}
            <Button variant="outline-secondary" size='sm'>Secondary</Button>{' '}
            <Button variant="outline-success">Success</Button>{' '}
            <Button variant="outline-warning">Warning</Button>{' '}
            <Button variant="outline-danger">Danger</Button>{' '}
            <Button variant="outline-info">Info</Button>{' '}
            <Button variant="outline-light" size='lg'>Light</Button>{' '}
            <Button variant="outline-dark">Dark</Button>

            <br />
            <br />
        </div>
    )
}

export default MyButton;
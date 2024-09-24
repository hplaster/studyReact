import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const MyCard = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://res.cloudinary.com/shotgun/image/upload/c_limit,fl_lossy,q_auto:eco,w_1200,h_630/f_png/v1716303401/production/artworks/CAPA_zw40cr" />
      <Card.Body>
        <Card.Title>Brazilian Tour</Card.Title>
        <Card.Text>
          Compra de Ingressos apenas disponível em 1 de Abril.
        </Card.Text>
        <Button variant="info">Comprar</Button>
      </Card.Body>
    </Card>
  )
}

export default MyCard;
import Carousel from 'react-bootstrap/Carousel';

const MyCarousel = () => {
  return (
  <div style={({width: '500px', height: '500px'})}>
    <Carousel fade>
      <Carousel.Item>
        <img width={'500px'} height={'500px'} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS1JY1IzSU5QOmaJou7GAar6NqlHv7LWAFFvkKki9OK-pyh25jG"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'500px'} height={'500px'} src="https://thebackstage-deezer.com/wp-content/uploads/2023/11/integrantes-do-bts-1024x600.jpg"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={'500px'} height={'500px'} src="https://capricho.abril.com.br/wp-content/uploads/2022/12/BTS-Divulgacao-Hybe-Entertainment.jpg?crop=1&resize=1212,909"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  </div>
  )
}

export default MyCarousel;
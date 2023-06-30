import Card from 'react-bootstrap/Card';
import BannerImg from '../assets/banner.png'

function Banner() {
  return (
    <Card className="bg-dark text-white">
      <Card.Img src={BannerImg} alt="Banner de pizzas" className='banner' />
      <Card.ImgOverlay>
        <div className="container mt-2 px-5 banner-texto">
          <div className="row">
            <div className="col">
              <Card.Title className='banner-title'>Bienvenidos a</Card.Title>
              <Card.Title className='fs-2'>&#127813; Pizzería MammaMía! 🧀</Card.Title>
              <Card.Text className='fs-4'>
                Las mejores pizzas en la mejor pizzería
              </Card.Text>
              <Card.Text>En local y a domicilio!</Card.Text>
            </div>
          </div>
        </div>
      </Card.ImgOverlay>
    </Card>
  );
}

export default Banner;
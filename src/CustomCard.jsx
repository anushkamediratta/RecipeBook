import {Card,Button} from 'react-bootstrap'

const CustomCard = ()=>{
    return <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://images.unsplash.com/photo-1687778682351-99d1e0f8f1c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card>
}

export default CustomCard
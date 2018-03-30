import React from 'react';
import { 
	Card, 
	CardImg, 
	CardText, 
	CardBody,
  	CardTitle, 
  	CardSubtitle, 
  	Button } from 'reactstrap';


const ListContact = (props) => {
	return(
		<div className='container'>
			<div className='row mt-5'>
			{ props.contacts.map( (data) =>  
				<div className='col-md-4' key={data.objectId}>
					<Card >
				        <CardImg top width="100%" src={data.image} alt="Card image cap" />
				        <CardBody>
				          <CardTitle>{data.name}</CardTitle>
				          <CardSubtitle>{data.email}</CardSubtitle>
				          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
				          <Button color='danger'>X</Button>
				        </CardBody>
				    </Card>
				</div>
			) }
			</div> 
	    </div>
	)
}

export default ListContact;
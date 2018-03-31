import React from 'react';
import { 
	Card, 
	CardImg, 
	CardText, 
	CardBody,
  	CardTitle, 
  	CardSubtitle, 
  	Button } from 'reactstrap';


const ListNews = (props) => {
	return(
		<div className='container'>
		<div className="section-title">
			Berita Terbaru
		</div>
			<div className='row'>
			{ props.news.map( (data) =>  
				<div className='col-md-4 news-box' key={data.objectId}>
					<Card >
						<div className="news-date">
				          	{ data.createdDateTime }
				          </div>
				        <CardImg top width="100%" src={data.image} alt="Card image cap" />
				        <CardBody>
				          <CardTitle>{data.title}</CardTitle>
				          <CardText>{ data.body }</CardText>			          
				          <Button color='primary' size="sm">Read more</Button>
				        </CardBody>
				    </Card>
				</div>
			) }
			</div> 
	    </div>
	)
}

export default ListNews;
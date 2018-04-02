import React from 'react';
import { Link } from 'react-router-dom';
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
			          	<div className='news-img-frame'>
			          		<CardImg top width="100%" src={data.image} alt="Card image cap" />
			          	</div>			        
				        <CardBody>
				          <CardTitle>{data.title}</CardTitle>
				          <CardText>{ data.body }</CardText>		
				          <Link to="/news"><Button color='primary' size="sm">Read more</Button></Link>	          
				        </CardBody>
				    </Card>
				</div>
			) }
			</div> 
	    </div>
	)
}

export default ListNews;
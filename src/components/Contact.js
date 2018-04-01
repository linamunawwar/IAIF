import React from 'react';
import { 
	Input,
	InputGroup, 
  	Button } from 'reactstrap';


const ListContact = (props) => {
	return(
		<div className='container section-pad'>
			<div className="section-title">
				Cari Alumni
			</div>
			<div className='row'>
				<div className='col-sm-3' align='left'>
					<div className='dashboard-frame' align='right'>
						<div className='dashboard-number'>143</div>
						<div className='dashboard-label'>Alumni Terdaftar</div>
					</div>
					<Button className='full-btn' size='sm' color='default'>View all</Button>
				</div>			
				<div className='col-sm-9'>
					<div className='contact-search-box'>
						<InputGroup>
							<span className='glyphicon glyphicon-search'></span>
				        	<Input placeholder="search" />
				      	</InputGroup>
					</div>
					<br/>
					{ props.contacts.map( (data) =>  
						<div className='contact-link'>
							<div className='row contact-box'>
								<div className='col-xs-3' align='center'>
									<img src={data.image} className='contact-photo'/>
								</div>
								<div className='col-xs-9' align='left'>
									<div className='contact-name'>{data.name}</div>
									<div className='contact-email'>{data.email}</div>
									<div className='contact-detail'>this is contact detail paragraph.</div>
								</div>
							</div>
						</div>
					) }
				</div>
			</div> 
	    </div>
	)
}

export default ListContact;
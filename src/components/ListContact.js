import React, 	{ Component } 					from 'react'	 			;
import escapeRegExp								from 'escape-string-regexp'	;
import 			{ Input, InputGroup, Button }	from 'reactstrap'			;
import sortBy 									from 'sort-by'				;

class ListContact extends Component {
	/*State*/
	state = {
		query : ''
	}/*/#end-state*/

	/*Method*/
	updateQuery = (query) => {
		this.setState({ query:query.trim() })
	}

	clearQuery = () => {
		this.setState( {query: ''} )
	}/*/#end-method*/

	render(){
		/*Destructuring variable*/
		const { contacts }  = this.props;
		const { query }		= this.state;
		/*/#end-destructuring*/
		
		let showingContacts;
		if(query){
			const match = new RegExp( escapeRegExp(query), 'i' )
			showingContacts =contacts.filter( (contact) => match.test(contact.name) )
		}else{
			showingContacts = contacts
		}

		showingContacts.sort( sortBy('name') );

		return(
			<div className='container section-pad'>
				{/*<pre><code>{JSON.stringify( query )}</code></pre>*/}
				<div className="section-title">
					Cari Alumni
				</div>
				<div className='row'>
					<div className='col-sm-3' align='left'>
						<div className='dashboard-frame' align='right'>
							
							{ showingContacts.length === contacts.length && (
								<div className='dashboard-number'>
									<span>{showingContacts.length} dari {contacts.length}</span>
								</div>
							)}
							{ showingContacts.length !== contacts.length && (
								<div className='dashboard-number'>
									<span>{showingContacts.length} dari {contacts.length}</span>
								</div>
							)}

							<div className='dashboard-label'>Alumni Terdaftar</div>
						</div>
						<Button 
							className='full-btn' 
							size='sm' 
							color='default'
							onClick={this.clearQuery}
						>
							View all
						</Button>
					</div>			
					<div className='col-sm-9'>
						<div className='contact-search-box'>
							<InputGroup>
								<span className='glyphicon glyphicon-search'></span>
					        	<Input 
					        		type="text" 
					        		placeholder="search"
									value={query}
					        		onChange={ ( event ) => this.updateQuery(event.target.value) }
					        	/>
					      	</InputGroup>
						</div>
						<br/>
						{ showingContacts.map( (data) =>  
							<div className='contact-link' key={data.name}>
								<div className='row contact-box'>
									<div className='col-xs-3' align='center'>
										<img src={data.image} alt={data.name} className='contact-photo'/>
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
}

export default ListContact;
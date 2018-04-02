import React from 'react';
import ContactSection from './ContactSection';

class ContactDetail extends React.Component {
	constructor(props) {
    	super(props);

    	//this.state = {'news' : {}};

    	/*console.log(this.props.match.params.id);*/
  	}

  	componentDidMount() {
	   //this.setState({ news: this.props.news })
  	}

   render() {
      return (
         <div className='container section-pad'>
         	<div className='row'>
         		<div className='col-sm-3'>
         			<ContactSection></ContactSection>
         		</div>
         		<div className='col-sm-9 news-detail' align='center'>
         			<img src='/favicon.ico' className='img-fluid' width="60%"/>  
                      <div className='label-box'>
                        <h5>Firhan</h5>
                        <div className='contact-work'>JM Digital, Jakarta</div>
                      </div>
         		</div>
         	</div>
         </div>
      );
   }
}

export default ContactDetail;
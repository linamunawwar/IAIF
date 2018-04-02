import React, { Component } from 'react';
import LoginForm from './LoginForm';

class Login extends Component {
   render() {
      return (
        <div className='all-blue-bg container-fluid'>
        	<div className='row'>
        		<div className='section-pad col-sm-8 col-md-6 col-lg-4 offset-sm-2 offset-md-3 offset-lg-4'>
        			<LoginForm/>
        		</div>
        	</div>      	
        </div>
      );
   }
}

export default Login;
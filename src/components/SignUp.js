import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';

class SignUp extends Component {
   render() {
      return (
        <div className='all-blue-bg container-fluid'>
        	<div className='row'>
        		<div className='section-pad col-sm-10 col-md-8 col-lg-6 offset-sm-1 offset-md-2 offset-lg-3'>
        			<div class='form-box' align='left'>
                <Form>
                  <Alert color="danger">
                    Error occured, failed to signup!
                  </Alert>
                  <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="email" placeholder="input email" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Password</Label>
                    <Input type="password" name="Password" id="Password" placeholder="input Password" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Repeat Password</Label>
                    <Input type="password" name="Password" id="Password" placeholder="Repeat Password" />
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Name</Label>
                    <Input type="text" name="name" id="name" placeholder="input name" />
                  </FormGroup>
                  <Button color='primary' size='md' className='full-btn btn-submit'>Sign Up</Button>
                </Form>
              </div>
        		</div>
        	</div>      	
        </div>
      );
   }
}

export default SignUp;
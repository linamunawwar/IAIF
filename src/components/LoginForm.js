import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Alert } from 'reactstrap';
import { Link } from 'react-router-dom';

class LoginForm extends Component {
   render() {
      return (
        <div class='form-box' align='left'>
          <Form>
            <Alert color="danger">
              Email / Password incorrect!
            </Alert>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input type="email" name="email" id="email" placeholder="input email" />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Password</Label>
              <Input type="password" name="Password" id="Password" placeholder="input Password" />
            </FormGroup>
            <Button color='primary' size='md' className='full-btn btn-submit'>Login</Button>
            <br/>
            <br/>
            <center>Belum terdaftar? <Link to="/signup">Daftar Sekarang</Link></center>
          </Form>
        </div>
      );
   }
}

export default LoginForm;
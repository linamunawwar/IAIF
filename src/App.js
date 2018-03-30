import React, { Component } from 'react';
import ListContact from './components/Contact';
import NavbarKu from './components/NavbarKu';

class App extends Component {
  state = {
    contacts : [
      {
        name    :'Mirza Chilman Garin'    ,
        email   :'mirzachilman@gmail.com' ,
        objectId: 0                       ,
        image   : 'https://source.unsplash.com/random/500x500'  
      },
      {
        name    :'Difa Gustia'            ,
        email   :'difa@gmail.com'         ,
        objectId: 1                       ,
        image   : 'https://source.unsplash.com/random/500x500'  
      },
      {
        name    :'Adit Nugroho'           ,
        email   :'aditnugroho@gmail.com'  ,
        objectId: 2                       ,
        image   : 'https://source.unsplash.com/random/500x500'  
      },
    ]
  }

  render() {
    return (
      <div className='App'>
        <NavbarKu/>
        <ListContact contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import ListContact from './components/Contact';
import ListNews from './components/News';
import NavbarKu from './components/NavbarKu';
import './App.css'

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
    ],
    news : [
      {
        title    :'Lowongan Kerja Bulan April',
        body   :'lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet' ,
        objectId: 0                       ,
        createdDateTime: '4 April 2018',
        image   : 'https://source.unsplash.com/random/500x500' 
      },
      {
        title    :'Gathering',
        body   :'lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet' ,
        objectId: 0                       ,
        createdDateTime: '4 April 2018',
        image   : 'https://source.unsplash.com/random/500x500'  
      },
      {
        title    :'Node JS',
        body   :'lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet' ,
        objectId: 0                       ,
        createdDateTime: '4 April 2018',
        image   : 'https://source.unsplash.com/random/500x500'  
      }
    ]
  }

  render() {
    return (
      <div className='App'>
        <NavbarKu/>
        <ListNews news={this.state.news} />
        <ListContact contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;

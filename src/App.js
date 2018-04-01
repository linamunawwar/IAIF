import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import NewsDetail from './components/NewsDetail';
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
      <BrowserRouter>
        <div className='App'>
          <NavbarKu/>

          <Route exact path='/' component={Home}/>
          <Route exact path='/news/:id' component={NewsDetail}/>        
        </div>
      </BrowserRouter>  
    );
  }
}

export default App;

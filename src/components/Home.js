import React from 'react';
import ListContact from './Contact';
import ListNews from './News';

class Home extends React.Component {
    constructor(props){
      super(props);

      this.state = {
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
        objectId: 1                       ,
        createdDateTime: '4 April 2018',
        image   : 'https://source.unsplash.com/random/500x500' 
      },
      {
        title    :'Gathering',
        body   :'lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet' ,
        objectId: 2                      ,
        createdDateTime: '4 April 2018',
        image   : 'https://source.unsplash.com/random/500x500'  
      },
      {
        title    :'Node JS',
        body   :'lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet lorem ipsum dolor sir amet' ,
        objectId: 3                       ,
        createdDateTime: '4 April 2018',
        image   : 'https://source.unsplash.com/random/500x500'  
      }
    ]
  }
    }

   render() {
      return (
        <div>
         <ListNews news={this.state.news} />
          <ListContact contacts={this.state.contacts} />
          </div>
      );
   }
}

export default Home;
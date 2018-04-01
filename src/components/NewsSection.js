import React from 'react';

class NewsSection extends React.Component {
   render() {
      return (
         <div className='container-fluid'>
         	<div className='row'>
         		<div className='col-sm-12 news-section' align='left'>
              <div className='label-box'>
                <h5>This is news title</h5>
                <a href='#'>Read This</a>
              </div>
         			<img src='https://learnenglishorstarve.files.wordpress.com/2017/06/news-tsodotcom.jpg' className='img-fluid'/>        			
         		</div>
            <div className='col-sm-12 news-section' align='left'>
              <div className='label-box'>
                <h5>This is news title</h5>
                <a href='#'>Read This</a>
              </div>
              <img src='https://learnenglishorstarve.files.wordpress.com/2017/06/news-tsodotcom.jpg' className='img-fluid'/>              
            </div>
            <div className='col-sm-12 news-section' align='left'>
              <div className='label-box'>
                <h5>This is news title</h5>
                <a href='#'>Read This</a>
              </div>
              <img src='https://learnenglishorstarve.files.wordpress.com/2017/06/news-tsodotcom.jpg' className='img-fluid'/>              
            </div>
         	</div>
         </div>
      );
   }
}

export default NewsSection;
import React from 'react';
import NewsSection from './NewsSection';

class NewsDetail extends React.Component {
   render() {
      return (
         <div className='container section-pad'>
         	<div className='row'>
         		<div className='col-sm-3'>
         			<NewsSection></NewsSection>
         		</div>
         		<div className='col-sm-9 news-detail' align='left'>
         			<img alt="" src='https://learnenglishorstarve.files.wordpress.com/2017/06/news-tsodotcom.jpg' className='img-fluid'/>
         			<div className='news-detail-date' align='right'>
         				14:56, 4 April 2018
         			</div>
         			<h2>News Title</h2>
         			<p align='justify'>
         				To be candid, we were pretty frustrated with the direction we’d taken React 
         				Router by v2. We (Michael and Ryan) felt limited by the API, recognized we 
         				were reimplementing parts of React (lifecycles, and more), and it just didn’t 
         				match the mental model React has given us for composing UI.We were walking 
         				through the hallway of a hotel just before a workshop discussing what to do 
         				about it. We asked each other: “What would it look like if we built the router 
         				sing the patterns we teach in our workshops?”It was only a matter of hours into 
         				development that we had a proof-of-concept that we knew was the future we wanted 
         				or routing. We ended up with API that wasn’t “outside” of React, an API that
         				 composed, or naturally fell into place, with the rest of React. We think you’ll love it.
         			</p>
         		</div>
         	</div>
         </div>
      );
   }
}

export default NewsDetail;
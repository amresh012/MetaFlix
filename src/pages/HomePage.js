import React from 'react';
import {Row} from '../component/Row';
import {Main} from '../component/Main';
import request from '../component/Request';

export const HomePage = () => {
  return (
    <div>
        <Main />
      <Row title="Upcoming" fetchURL={request.requestUpcoming} />
      <Row title="Popular" fetchURL={request.requestPopular} />
      <Row title="Trending" fetchURL={request.requesTrending} />
      <Row title="Top Rated" fetchURL={request.requestTopRated} />
      <Row title="Horrer" fetchURL={request.requestHorror} />
      





    </div>
  )
}

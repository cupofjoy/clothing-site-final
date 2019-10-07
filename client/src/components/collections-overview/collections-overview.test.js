import React from 'react';
import { shallow } from 'enzyme';
import { CollectionOverview } from './collections-overview.component';

it('should render CollectionOverview component', () => {
  expect(shallow(<CollectionOver collections={[]} />)).toMatchSnapshot();
});

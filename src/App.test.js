import React from 'react';
import App from './App';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });


describe('<App />', () => {
  it('should render without throwing an error', function () {
    const component = shallow(<App />)
    console.log("test ",component.props().Login);

  });
})



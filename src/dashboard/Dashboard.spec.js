// Test away

import React from 'react';
//import renderer from 'react-test-renderer';

// no default export, so we're importing everything from this library
import * as rtl from "@testing-library/react";
// not importing to a variable, since this just overrides jest global variables
import "@testing-library/jest-dom/extend-expect";

import Dashboard from './Dashboard';

test("<Dashboard /> snapshot", () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.asFragment()).toMatchSnapshot();
  });


// describe('<Dashboard />', () => {
//   it('should match snapshot', () => {
//     const tree = renderer.create(<Dashboard />).toJSON();

//     expect(tree).toMatchSnapshot();
//   });
// });
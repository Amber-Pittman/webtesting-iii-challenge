// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

// this just allows react-testing-library to do some
// routine cleanup after each test runs (to reset the DOM and such)
afterEach(rtl.cleanup);

test("<Controls /> snapshot", async () => {
  const wrapper = rtl.render(<Controls />);
  //await wrapper.findByAltText(/XXX/i);
  // using a regular expression instead of a string allows our
  // query to be much more flexible. for example, if the text becomes
  // all uppercase, we don't want our test to break

  expect(wrapper.asFragment()).toMatchSnapshot();
});
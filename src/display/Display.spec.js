// Test away!
import React from "react";
import * as rtl from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Display from "./Display";

afterEach(rtl.cleanup);

test("<Display /> snapshot", () => {
    const wrapper = rtl.render(<Display />);
  //await wrapper.findByAltText(/XXX/i);
    // using a regular expression instead of a string allows our
    // query to be much more flexible. for example, if the text becomes
    // all uppercase, we don't want our test to break

    expect(wrapper.asFragment()).toMatchSnapshot();
})
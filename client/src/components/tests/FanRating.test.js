import React from 'react';
import { shallow, mount, render } from 'enzyme';
import FanRating from '../FanRating';

describe("FanRating component", () => {

  it("should render", () => {
    const wrapper = shallow(<FanRating />);

    expect(wrapper.exists()).toBe(true);
  });
});

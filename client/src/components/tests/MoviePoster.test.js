import React from 'react';
import { shallow, mount, render } from 'enzyme';
import {MoviePoster, PosterDiv, PosterImage} from '../MoviePoster';
import renderer from 'react-test-renderer';
import styled from 'styled-components';

describe("MoviePoster component", () => {

  it("should render correctly", () => {
    const wrapper = shallow(<MoviePoster />);

    expect(wrapper.exists()).toBe(true);

  });

  it('applies correct styles to div containing poster', () => {
    const tree = renderer.create(<PosterDiv />).toJSON()
    expect(tree).toHaveStyleRule('position', 'relative');
    expect(tree).toHaveStyleRule('display', 'inline-block');
    expect(tree).toHaveStyleRule('overflow', 'hidden');
    expect(tree).toHaveStyleRule('vertical-align', 'top');
  });

  it('should transition at a rate of 0.25s on hover', () => {
    const tree = renderer.create(<PosterImage />).toJSON()
    expect(tree).toHaveStyleRule('transition', 'opacity .25s,transform .25s ease');
  });

  it('should render a poster image', () => {
    const wrapper = shallow(<PosterImage/>);
    expect(wrapper.exists()).toBe(true);
  });

});

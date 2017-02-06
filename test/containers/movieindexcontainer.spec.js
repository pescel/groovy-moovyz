import React from 'react'
import { shallow, mount } from 'enzyme'
import { expect, assert } from 'chai'
import sinon from 'sinon'

import MovieIndexContainer, { mapStateToProps } from '../../app/containers/MovieIndexContainer'

describe('MovieIndexContainer', () => {
  it.skip('map state to props', () => {
    const wrapper = mount(<MovieIndexContainer />)
    assert.isFunction(mapStateToProps);
  });
});

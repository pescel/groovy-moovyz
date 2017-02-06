import React from 'react';
import { mount, shallow } from 'enzyme';
import { expect, assert } from 'chai';

import * as actions from '../../app/actions/index'

describe('actions', () => {
  it('should create an action to make an array of popular movies', () => {
      const payload = {'somejson': 'somejson', 'somemorejson': 'somemorejson'}
      const expectedAction = {
        type: 'POPULAR_MOVIES',
        payload: {'somejson': 'somejson', 'somemorejson': 'somemorejson'}
      }
      expect(actions.displayPopularMovies(payload)).to.deep.equal(expectedAction)
  })
  // ^^ Should this test be more specific?
  it('should create an action for a user to signIn', () => {
      const email = 'jim@aol.com'
      const password = 'password'
      const expectedAction = {
        type: 'SIGN_IN',
        email: 'jim@aol.com',
        password: 'password',
        emailKey: 'jim@aol.com',
        passwordKey: 'password'
      }
      expect(actions.signIn(email,password,email,password)).to.deep.equal(expectedAction)
  })
})
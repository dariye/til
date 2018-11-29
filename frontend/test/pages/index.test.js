/* eslint-env jest */

import { shallow } from 'enzyme'
import React from 'react'
import renderer from 'react-test-renderer'

import App from '../../pages/index.js'

describe('Home page ', () => {
  it(`Home page shows 'TIL'`, () => {
    const app = shallow(<App />)
    // expect(app.find('p').text()).toEqual('TIL!')
  })
})

// describe('With Snapshot Testing', () => {
//   it('App shows "TIL!"', () => {
//     const component = renderer.create(<App />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })

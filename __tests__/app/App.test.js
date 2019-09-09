import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/app/App'

const app = shallow(<App />)

describe("App component", () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initializes the state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  it('adds a new gift to state when clicking the `add gift` button', () => {
    clickBtnAdd()

    expect(app.state().gifts).toEqual([{ id: 1 }])

    clickBtnAdd()

    expect(app.state().gifts[1]).toEqual({ id: 2 })
  })

});

function clickBtnAdd() {
  app.find('.btn-add').simulate('click')
}

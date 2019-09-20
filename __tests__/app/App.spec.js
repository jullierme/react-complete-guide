import React from 'react'
import { shallow } from 'enzyme'
import App from '../../src/app/App'

const app = shallow(<App />)

describe('App component', () => {
  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initializes the state with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking the `add-gift`', () => {
    beforeEach(() => {
      clickBtnAdd()
    })

    afterEach(() => {
      app.setState({ gifts: [] })
    })

    it('adds a new gift to state', () => {
      expect(app.state().gifts).toEqual([{ id: 1 }])

      clickBtnAdd()

      expect(app.state().gifts[1]).toEqual({ id: 2 })
    })

    it('add a new gift to the rendered list', () => {
      expect(app.find('.gift-list').children().length).toEqual(1)
    })
  })
})

function clickBtnAdd() {
  app.find('.btn-add').simulate('click')
}

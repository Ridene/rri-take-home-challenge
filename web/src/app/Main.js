import React, { PureComponent } from 'react'
import List from '../cards/List'
import '../assets/styles.scss'

class Main extends PureComponent {
    render () {
        return (
          <main className='jt__main-container' role='main'>
              <List />
          </main>
        )
    }
}

export default Main

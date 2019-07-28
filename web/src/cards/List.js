import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from './Card'
import SearchInput from '../ui/SearchInput'
import { getCards } from './actions'
import { cleanWord, isFound } from '../utils'

class List extends PureComponent {

  state = {
    cards: [],
    word: ''
  }

  componentDidMount() {
    this.props.actions.getCards()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({cards: this.props.cards})
    }
  }

  handleChange = event =>  {
    const{ cards } = this.props;
    const cleanValue = cleanWord(event.target.value)

    const filteredCards = cards.filter(({name, tags, ...card}) => {
      const inName = isFound(cleanWord(name), cleanValue)
      const inTags = tags.filter(t => isFound(cleanWord(t), cleanValue)).length > 0

      if (inName || inTags) return card
  })

    this.setState({word: event.target.value, cards: filteredCards})
  }

  render () {
    const { cards, word } = this.state
    if (this.props.loading) return <p>Loading</p>

    return (
      <>
        <header role='search'>
          <SearchInput
            placeholder='Que recherchez-vous ?'
            value={word}
            className=''
            onChange={this.handleChange}
          />
        </header>
        <section className='jt__cards-container' role='listitem'>
          { cards.map(card =>
            <Card
              card={card}
              key={`card-${card.id}`}
            />
          )}
        </section>
        </>
    )
  }
}

const mapStateToProps = ({card}) => ({
  cards: card.results,
  loading: card.loading
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ getCards }, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(List)

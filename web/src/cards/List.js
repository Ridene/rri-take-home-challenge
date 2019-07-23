import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Card from './Card'
import { getCards } from './actions'
class List extends PureComponent {

  state = {
    cards: []
  }

  componentDidMount() {
    this.props.actions.getCards()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cards !== this.props.cards) {
      this.setState({cards: this.props.cards})
    }
  }

  render () {
    const { cards } = this.state
    console.log(this.props.cards)
    if (this.props.loading) return <p>Loading</p>

    return (
      <section>
        { cards.map(card =>
          <Card card={card} key={`card-${card.id}`}/>
        )}
      </section>
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

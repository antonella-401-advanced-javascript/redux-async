import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Quote from '../../components/quote/Quote';
import { setQuotePromise } from '../../actions/simpsonsActions';
import { getQuotes, getCharacterName, getCharacterImage, getQuoteLoading, getQuoteError } from '../../selectors/simpsonsSelectors';

class SimpsonsQuote extends Component {
  static propTypes = {
    quote: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    fetchQuote: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
  }

  componentDidMount() {
    this.props.fetchQuote();
  }

  render() {
    if(this.props.loading) return <img src="./loading.gif" alt="LOADING..."/>;

    if(!this.props.quote) return <h1>{this.props.error}</h1>;

    return (
      <>
        <Quote quote={this.props.quote} character={this.props.character} image={this.props.image} />
      </>
    );
  }
}

const mapStateToProps = state => ({
  quote: getQuotes(state),
  image: getCharacterImage(state),
  character: getCharacterName(state),
  loading: getQuoteLoading(state),
  error: getQuoteError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchQuote() {
    dispatch(setQuotePromise());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpsonsQuote);
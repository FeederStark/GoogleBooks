import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import BottomScrollListener from 'react-bottom-scroll-listener';
import PropTypes from 'prop-types';
import {
  Container, CardsContainer, CardWrapper, Card, Label,
} from './styles';
import { Creators as BooksActions } from '../../store/ducks/books';

class Home extends Component {
  state = {
    bookInput: '',
  };

  static propTypes = {
    searchBooksRequest: PropTypes.func.isRequired,
    books: PropTypes.arrayOf(
      PropTypes.shape({
        img: PropTypes.string,
        title: PropTypes.string,
        id: PropTypes.string,
      }),
    ).isRequired,
    searchMoreBooksRequest: PropTypes.func.isRequired,
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchBooksRequest } = this.props;
    const { bookInput } = this.state;
    await searchBooksRequest(bookInput);
  };

  handleScroll = () => {
    const { searchMoreBooksRequest, books } = this.props;
    const { bookInput } = this.state;
    searchMoreBooksRequest(bookInput, books.length);
  };

  render() {
    const { bookInput } = this.state;
    const { books } = this.props;
    return (
      <Container>
        <form onSubmit={this.handleSubmit}>
          <Label>
            <input
              placeholder="Type a book name"
              value={bookInput}
              onChange={e => this.setState({ bookInput: e.target.value })}
            />
          </Label>
        </form>
        <BottomScrollListener onBottom={this.handleScroll}>
          {scrollRef => (
            <CardsContainer ref={scrollRef}>
              {books.map(book => (
                <CardWrapper to={`/details/${book.id}`} key={book.id}>
                  <Card src={book.img} alt="avatar" />
                </CardWrapper>
              ))}
            </CardsContainer>
          )}
        </BottomScrollListener>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(BooksActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { searchBooksRequest } = this.props;
    const { bookInput } = this.state;
    await searchBooksRequest(bookInput);
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
        <CardsContainer>
          {books.map(book => (
            <CardWrapper to={`/details/${book.id}`} key={book.id}>
              <Card src={book.img} alt="avatar" />
            </CardWrapper>
          ))}
        </CardsContainer>
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

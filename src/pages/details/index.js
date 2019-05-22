import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as BookDetailsActions } from '../../store/ducks/bookDetails';
import {
  Container,
  TopHeader,
  BottomHeader,
  LeftDiv,
  RightDiv,
  Price,
  Buy,
  DetailsContainer,
} from './styles';
import './styles.css';
import Star from '../../assets/images/star.png';

class Details extends Component {
  state = {
    like: false,
  };

  static propTypes = {
    searchBookRequest: PropTypes.func.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
        img: PropTypes.string,
        title: PropTypes.string,
        authors: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.string), PropTypes.string]),
        price: PropTypes.string,
        pages: PropTypes.number,
        description: PropTypes.string,
      }),
    }).isRequired,
    book: PropTypes.shape({}).isRequired,
  };

  componentDidMount() {
    this.loadBookDetails();
  }

  loadBookDetails = () => {
    const { match } = this.props;
    const { searchBookRequest } = this.props;
    searchBookRequest(match.params.id);
  };

  handleLike = () => {
    const { like } = this.state;
    this.setState({ like: !like });
  };

  render() {
    const { book } = this.props;
    const { like } = this.state;
    const likeClasses = ['button', 'button-like'];
    if (like) {
      likeClasses.push('liked');
    }
    return (
      <Container>
        <TopHeader>
          <LeftDiv>
            <img src={book.img} alt="Book" />
          </LeftDiv>
          <RightDiv>
            <div>
              <h2>{book.title}</h2>
              {!!book.authors && book.authors.map(author => <p key={author}>by {author}</p>)}
            </div>
            <Price>
              <h2>R${book.price}</h2>
              <img src={Star} alt="Rating" />
            </Price>
          </RightDiv>
        </TopHeader>
        <BottomHeader>
          <p>{book.pages} pages</p>
          <div>
            <Buy>buy</Buy>
            <button type="button" className={likeClasses.join(' ')} onClick={this.handleLike}>
              <i className="fa fa-heart" />
              <span>Like</span>
            </button>
          </div>
        </BottomHeader>
        <DetailsContainer>
          <p>{book.description}</p>
        </DetailsContainer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  book: state.bookDetails,
});

const mapDispatchToProps = dispatch => bindActionCreators(BookDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Details);

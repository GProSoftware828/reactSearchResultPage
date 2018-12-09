import React from 'react';
import ReactDOM from 'react-dom';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
  state = { images: [] };
//Constructor:
  onSearchSubmit = async term => {
//Set the state to the response:
    const response = await unsplash.get('/search/photos', {
      params: { query: term },
      headers: {
        Authorization:
          'Client-ID e72c8c0a6f692e7f7bf53efc9bc0aba0732da3d5df6b8277abafa501f4dff581'
      }
    });
    this.setState({ images: response.data.results });
  }

  //Submit is a made-up variable (callback) defined inside the class tag:
  render() {
    return (
      <div className="ui container" style={{ marginTop: '10%' }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  };
};

export default App;

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import ImageList from './ImageList';


class App extends React.Component {
    state = {
        images: []
    };

    onSearchSubmit = async (term) => {

        const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
        const response = await axios
            .get("https://api.unsplash.com/search/photos",
                {
                    headers: { Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY },
                    params: { query: term }
                });
        console.log(response.data.results);
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images} />
            </div>
        );
    }
}

export default App;

import React from 'react';
import axios from 'axios'
import SearchBar from './SearchBar';


const UNSPLASH_ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;
class App extends React.Component {

    async onSearchSubmit(term) {
        const response = await axios
            .get('https://api.unsplash.com/search/photos', {
                params: { query: term },
                headers: {
                    Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY
                }
            });
        console.log(response.data.results);
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '50px' }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
            </div>
        );
    }
}

export default App;

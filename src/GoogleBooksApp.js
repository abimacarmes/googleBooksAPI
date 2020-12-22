import React, { Component } from 'react'
import Filter from './Filter';
import Search from './Search';
import Results from './Results';

const APIKey = 'AIzaSyCWEShQjIuA58Lx5l2qCsxUEE3txLdagog';

export default class GoogleBooksApp extends Component {
    state={
        searchTerm:'',
        selectedPrint:'',
        selectedBook:'',
        searchResults: []
    }

    changeFilterPrint = (filter) => {
        console.log('Print filter changed to:'+filter)
        this.setState({
            selectedPrint: filter
        })
    }

    changeFilterBook = (filter) => {
        console.log('Book filter changed to:'+filter)
        this.setState({
            selectedBook: filter
        })
    }

    bookSearchChange = (event) => {
        this.setState({searchTerm: event.target.value})
    }

    bookSearchSubmit = (event) => {
        event.preventDefault()
        console.log('Search submitted: ' + this.state.searchTerm)

        let fetchURLFilter = '';

        if(this.state.selectedBook.length>0 || this.state.selectedPrint.length>0){
            fetchURLFilter = '&filter=' + this.state.selectedBook + this.state.selectedPrint + ''
        }

        const fetchURL = 'https://www.googleapis.com/books/v1/volumes?q=' + this.state.searchTerm + fetchURLFilter + '&key=' + APIKey;

        console.log(fetchURL);

        fetch(fetchURL)
            .then(response => response.json())
            .then(data => {
                const newResults = data.items;
                this.setState({searchResults:newResults})
            })
    }


    render() {
        return (
            <div className='app'>
                <div className='appTitle'>
                    <h1>Google Book Search</h1>
                </div>
                <Search onChange={this.bookSearchChange} onSubmit={this.bookSearchSubmit}/>
                <Filter onChangePrint={this.changeFilterPrint} onChangeBook={this.changeFilterBook}/>
                <Results searchItems={this.state.searchResults}/>
            </div>
        )
    }
}


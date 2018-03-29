import React from 'react';

class SearchForm extends React.Component {
    state = {
        search: ''
    }

    changeInput = e => {
        const {onChangeHandler} = this.props,
            value = e.target.value;

        this.setState({
            search: value
        }, () => {
            if (onChangeHandler) {
                onChangeHandler(value);
            }
        });
    }

    render() {
        const {search} = this.state;

        return <form className='search'>
            <input
                value={search}
                type='text'
                name='search'
                className='search__input'
                onChange={this.changeInput}/>
            <button className='search__submit'>
                Search
            </button>
        </form>
    }
}

export default SearchForm;

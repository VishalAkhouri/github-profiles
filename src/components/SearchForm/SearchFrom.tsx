import React from "react";
import "./SearchForm.css";
import axios from 'axios';

class SearchFrom extends React.Component<any, any> {
    state = { userName: '' };
    handleSubmit = async (event: any) => {
        event.preventDefault();
        let response;
        try {
            response = await axios.get(`https://api.github.com/users/${this.state.userName}`);
            this.props.onSubmit(response.data);
        } catch (e) {
            console.log(e.message)
        }
    };

    render() {
        return (
            <form className="search-form" onSubmit={this.handleSubmit}>
                <input type="text"
                       value={this.state.userName}
                       onChange={event => this.setState({ userName: event.target.value})}
                       placeholder="github username" />
                <button>Search profile</button>
            </form>
        )
    }
}

export default SearchFrom;
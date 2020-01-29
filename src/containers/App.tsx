import React from 'react';
import './App.css';
import CardList from '../components/CardList/CardList';
import SearchFrom from '../components/SearchForm/SearchFrom';

class App extends React.Component<any, any>{
    state = {
        profiles: []
    };

    addNewProfile = (profileData: any) => {
        this.setState((prevState: any) => ({
            profiles: [...prevState.profiles, profileData]
        }))
    };

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Search Github profiles</h1>
                </header>

                <SearchFrom onSubmit={this.addNewProfile} />
                <CardList profiles={this.state.profiles }/>
            </div>
        );
    }

}

export default App;

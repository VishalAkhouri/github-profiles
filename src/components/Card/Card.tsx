// function component or class component ?
// class component since this Card component will have state
import React from 'react';
import './Card.css';
import '../../common/models/props.model';

class Card extends React.Component<IProfileProps, IProfileState> {

    render() {
        const profile = this.props;
        return (
            <div className='card'>
                <div className='card-image'>
                    <img src={profile.avatar_url} />
                </div>
                <div className='card-details'>
                    <div className='card-details-name'>{profile.name}</div>
                    <div className='card-details-company'>{profile.company}</div>
                </div>
            </div>
        )
    }
}

export default Card;
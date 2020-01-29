import React from "react";
import Card from "../Card/Card";
import '../../common/models/props.model';

const CardList = (props: IProfilesProps) => {
    return (
        <div>
            {props.profiles.map(profile => <Card key={profile.id} {...profile}/>)}
        </div>
    );
};

export default CardList;
import React from "react";
import Card from "../Card/Card";

let data = [{
    'login': 'gaearon',
    'id': 810438,
    'node_id': 'MDQ6VXNlcjgxMDQzOA==',
    'avatar_url': 'https://avatars0.githubusercontent.com/u/810438?v=4',
    'gravatar_id': '',
    'url': 'https://api.github.com/users/gaearon',
    'html_url': 'https://github.com/gaearon',
    'followers_url': 'https://api.github.com/users/gaearon/followers',
    'following_url': 'https://api.github.com/users/gaearon/following{/other_user}',
    'gists_url': 'https://api.github.com/users/gaearon/gists{/gist_id}',
    'starred_url': 'https://api.github.com/users/gaearon/starred{/owner}{/repo}',
    'subscriptions_url': 'https://api.github.com/users/gaearon/subscriptions',
    'organizations_url': 'https://api.github.com/users/gaearon/orgs',
    'repos_url': 'https://api.github.com/users/gaearon/repos',
    'events_url': 'https://api.github.com/users/gaearon/events{/privacy}',
    'received_events_url': 'https://api.github.com/users/gaearon/received_events',
    'type': 'User',
    'site_admin': false,
    'name': 'Dan Abramov',
    'company': '@facebook ',
    'blog': 'http://twitter.com/dan_abramov',
    'location': null,
    'email': null,
    'hireable': null,
    'bio': 'Working on @reactjs. Co-author of Redux and Create React App. Building tools for humans.',
    'public_repos': 240,
    'public_gists': 70,
    'followers': 52129,
    'following': 171,
    'created_at': '2011-05-25T18:18:31Z',
    'updated_at': '2019-12-25T14:30:42Z'
},
    {
        'login': 'VishalAkhouri',
        'id': 1974533,
        'node_id': 'MDQ6VXNlcjE5NzQ1MzM=',
        'avatar_url': 'https://avatars3.githubusercontent.com/u/1974533?v=4',
        'gravatar_id': '',
        'url': 'https://api.github.com/users/VishalAkhouri',
        'html_url': 'https://github.com/VishalAkhouri',
        'followers_url': 'https://api.github.com/users/VishalAkhouri/followers',
        'following_url': 'https://api.github.com/users/VishalAkhouri/following{/other_user}',
        'gists_url': 'https://api.github.com/users/VishalAkhouri/gists{/gist_id}',
        'starred_url': 'https://api.github.com/users/VishalAkhouri/starred{/owner}{/repo}',
        'subscriptions_url': 'https://api.github.com/users/VishalAkhouri/subscriptions',
        'organizations_url': 'https://api.github.com/users/VishalAkhouri/orgs',
        'repos_url': 'https://api.github.com/users/VishalAkhouri/repos',
        'events_url': 'https://api.github.com/users/VishalAkhouri/events{/privacy}',
        'received_events_url': 'https://api.github.com/users/VishalAkhouri/received_events',
        'type': 'User',
        'site_admin': false,
        'name': 'Akhouri Vishal Sinha',
        'company': 'DWS, AusPost, NAB',
        'blog': 'https://vishalakhouri.github.io',
        'location': 'Melbourne, Australia',
        'email': null,
        'hireable': null,
        'bio': 'Front-end | Java | SOA',
        'public_repos': 28,
        'public_gists': 3,
        'followers': 0,
        'following': 3,
        'created_at': '2012-07-14T10:51:42Z',
        'updated_at': '2020-01-28T23:03:16Z'
    }];

interface IProps {
    avatar_url?: string;
    name?: string;
    company?: string;
}

const CardList = (props: IProps) => {
    return (
        <div>
            {data.map(profile => <Card {...profile}/>)}
        </div>
    );
};

export default CardList;
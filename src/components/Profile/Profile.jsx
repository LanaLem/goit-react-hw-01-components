import PropTypes from 'prop-types';
import { Box } from '../../constants/Box';
import { Card, Avatar, InfoItems, Name, Location, Tag, Label, Quantity } from './Profile.styled';

export const Profile = ({ username, tag, location, avatar, stats: { likes, followers, views } }) => {
    return (
        <Card>
            <Box p={6}>
                <Avatar src={avatar} alt={username}/>
                <Name>{username}</Name>
                <Tag>@{tag}</Tag>
                <Location>{location}</Location>
            </Box>

            <Box as='ul' display='flex'>
                <InfoItems>
                    <Label>Followers</Label>
                    <Quantity>{followers}</Quantity>
                </InfoItems>
                <InfoItems>
                    <Label>Views</Label>
                    <Quantity>{views}</Quantity>
                </InfoItems>
                <InfoItems>
                    <Label>Likes</Label>
                    <Quantity>{likes}</Quantity>
                </InfoItems>
            </Box>
        </Card>
    )
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
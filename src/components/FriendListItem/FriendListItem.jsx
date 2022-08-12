import PropTypes from 'prop-types';
import { Status, Friend, Avatar } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <Friend>
            <Status isOnline={ isOnline }> </Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <p>{name}</p>
        </Friend>)
}


FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};
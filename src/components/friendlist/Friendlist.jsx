import PropTypes from 'prop-types'
import { Friend } from "./Friend";
import css from './Friendlist.module.css'

export const Friendlist = ({friends}) => (
    <ul className={css.friend_list}>
        {friends.map(friend => <Friend {...friend} key={friend.id} /> )}
        
    </ul>
);

Friendlist.propTypes = {
    friends: PropTypes.array,
}
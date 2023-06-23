import PropTypes from 'prop-types'
import css from './Friend.module.css'

export const Friend = ( friend ) => {
    const { 
        avatar = 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
        name = 'user',
        isOnline, 
    } = friend;
    
    return (
    <li className={css.item}>
        <span className={isOnline ? css.online : css.offline}></span>
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </li>
)};

Friend.propTypes = {
    friend: PropTypes.exact({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool.isRequired,
    })
}
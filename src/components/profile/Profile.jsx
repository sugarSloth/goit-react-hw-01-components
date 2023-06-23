import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    const statsArr = Object.entries(stats);

    return (
        <div className={css.profile}>
            <div className={css.description}>
                <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
                width='180'
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>@{tag}</p>
                <p className={css.location}>{location}</p>
            </div>

            <ul className={css.stats}>
               {statsArr.map(stat => (<li key={stat[0]}>
                <span className={css.label}>{stat[0]} </span>
                <span className={css.quantity}>{stat[1]}</span>
                </li>))}                   
            </ul>
        </div>

        
    )
};

Profile.propTypes = {
    username: PropTypes.string, 
    tag: PropTypes.string, 
    location: PropTypes.string, 
    avatar: PropTypes.string, 
    stats: PropTypes.objectOf(PropTypes.number),
}
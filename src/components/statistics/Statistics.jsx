import PropTypes from 'prop-types';
import css from './Statistics.module.css'

const randomColor = () => {
    return '#' + Math.floor(Math.random() * 2 ** 24).toString(16).padStart(6, '0')};

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
        {title && (<h2 className={css.title}>{title}</h2>)}
        
        <ul className={css.statlist}>
            {stats.map(stat => <li key={stat.id} className={css.item} style={{ backgroundColor: randomColor() }}>
                <span className={css.label}>{stat.label}</span>
                <span className={css.percentage}>{stat.percentage}%</span>
            </li>)}
        </ul>
        </section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string, 
    stats: PropTypes.array,
}


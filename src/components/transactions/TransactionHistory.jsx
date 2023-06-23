import PropTypes from 'prop-types';
import css from './TransactionsHistory.module.css';

export const TransactionHistory = ({items}) => (
<table className={css.transactionhistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

  <tbody>

    {items.map(item => {
        const { id, type, amount, currency } = item;
    return <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>})}

  </tbody>
</table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object)
}
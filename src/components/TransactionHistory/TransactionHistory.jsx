import PropTypes from 'prop-types';
import { TransactionTable, InfoAboutTransactions, NameOperation } from './TransactionHistory.styled'

export const TransactionHistory = ({ items }) => {
    return (
        <TransactionTable>
            <NameOperation>
                <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
                </tr>
            </NameOperation>
            <InfoAboutTransactions>
                {items.map(({ id, type, amount, currency}) => (
                <tr key={id}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
                </tr>
                ))
                }
            </InfoAboutTransactions>
        </TransactionTable>
    )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
  }))
};
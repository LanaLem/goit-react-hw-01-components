import { Box } from '../../constants';
import { Profile } from "components/Profile/Profile";
import { Statistics } from "components/Statistics/Statistics";
import { FriendList } from "components/FriendList/FriendList";
import { TransactionHistory } from "components/TransactionHistory/TransactionHistory";
import user from 'Data/user.json';
import data from 'Data/data.json';
import friends from 'Data/friends.json';
import transactions from 'Data/transactions.json';
import { GlobalStyle } from './App.styled';


export const App = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={4}>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        title="Upload stats"
        stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Box>
  )
};
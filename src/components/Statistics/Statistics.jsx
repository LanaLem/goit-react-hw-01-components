import PropTypes from 'prop-types';
import { Box } from '../../constants/Box';
import { SectionStatistics, Title, ItemStatics } from './Statistics.styled'


export const Statistics = ({ title, stats }) => {
    
    return (
        <SectionStatistics>
            {title && <Title>{title}</Title>}
            <Box as='ul' display='flex'>
                {
                    stats.map(({ id, label, percentage }) => (
                        <ItemStatics key={id}>
                        <span>{label}</span>
                        <span>{percentage}%</span>
                        </ItemStatics>))
                }
            </Box>
        </SectionStatistics>
    )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }))
};
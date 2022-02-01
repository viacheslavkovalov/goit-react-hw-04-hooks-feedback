import PropTypes from 'prop-types';
import { StyledMark, StyledReview } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul>
      <StyledMark>Good: {good}</StyledMark>
      <StyledMark>Neutral: {neutral}</StyledMark>
      <StyledMark>Bad: {bad}</StyledMark>
      <StyledReview>Total:{total}</StyledReview>
      <StyledReview>Positive feedback:{positivePercentage} %</StyledReview>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

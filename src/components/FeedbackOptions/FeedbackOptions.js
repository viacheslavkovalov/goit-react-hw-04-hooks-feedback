import PropTypes from 'prop-types';
import { Button, OptionsWrapper } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <OptionsWrapper>
      {options.map(option => (
        <Button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </Button>
      ))}
    </OptionsWrapper>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

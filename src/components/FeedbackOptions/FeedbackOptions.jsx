import PropTypes from 'prop-types';
import { ButtonList, ButtonItem, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
   const optionsKey = Object.keys(options);
  return (
    <ButtonList>
      {optionsKey.map((option, index) => {
        const label = option.charAt(0).toUpperCase() + option.slice(1);
        return (
          <ButtonItem key={index}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {label}
            </Button>
          </ButtonItem>
        );
      })}
    </ButtonList>
  );
};
FeedbackOptions.protoTypes = {

  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
  
};
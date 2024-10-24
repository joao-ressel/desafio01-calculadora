import PropTypes from 'prop-types';
import { ButtonContainer } from "./styles";

export const Button = ({ label, onClick }) => {
  return (
    <ButtonContainer type="button" onClick={onClick}>
      {label}
    </ButtonContainer>
  );
};

// PropTypes validation
Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

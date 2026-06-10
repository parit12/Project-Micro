import PropTypes from 'prop-types';

const DividerWithText = ({ text = "or" }) => (
  <div className="divider">
    <hr className="divider-line" />
    <span className="divider-text">{text}</span>
    <hr className="divider-line" />
  </div>
);

DividerWithText.propTypes = {
  text: PropTypes.string,
};

export default DividerWithText;

import PropTypes from 'prop-types';
import './GlobalStyles.module.scss';
import 'tippy.js/dist/tippy.css'; // optional

const GlobalStyles = ({ children }) => {
	return <div>{children}</div>;
};

GlobalStyles.propTypes = {
	children: PropTypes.node.isRequired,
};
export default GlobalStyles;

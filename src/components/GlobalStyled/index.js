import './GlobalStyles.module.scss';
import 'tippy.js/dist/tippy.css'; // optional

const GlobalStyles = ({ children }) => {
	return <div>{children}</div>;
};

export default GlobalStyles;

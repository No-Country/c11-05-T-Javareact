import './MyButton.css';

const MyButton = ({ children, typeStyle, type }) => {
	return (
		<button type={type} className={typeStyle}>
			{children}
		</button>
	);
};

export default MyButton;

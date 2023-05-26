import './MyButton.css';

const MyButton = ({ children, typeStyle, type, ...props }) => {
	return (
		<button type={type} className={typeStyle} {...props}>
			{children}
		</button>
	);
};

export default MyButton;

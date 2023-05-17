import './MyButton.css';

const MyButton = ({ children, typeStyle }) => {
	return <button className={typeStyle}>{children}</button>;
};

export default MyButton;

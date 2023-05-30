const MyTitle = ({ children, extraClass }) => {
	return (
		<h2
			className={`text-6xl font-[GalanoBold] text-[--secondaryColor] ${extraClass}`}>
			{children}
		</h2>
	);
};
export default MyTitle;

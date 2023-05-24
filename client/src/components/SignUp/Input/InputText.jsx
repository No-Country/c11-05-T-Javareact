const Input = ({
	type,
	name,
	placeholder,
	register,
	validation,
	errors,
	textAlert,
}) => {
	const error = errors[name];

	return (
		<div>
			<input
				className='bg-white max-w-xl grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
				id={name}
				type={type}
				name={name}
				placeholder={placeholder}
				{...register(name, validation)}
			/>
			{error && (
				<span className='font-extralight text-sm md:ml-12 p-2'>
					{error.type === 'required' && textAlert}
					{error.type === 'maxLength' && textAlert}
					{error.type === 'pattern' && textAlert}
					{error.type === 'validate' && error.message}
				</span>
			)}
		</div>
	);
};

export default Input;

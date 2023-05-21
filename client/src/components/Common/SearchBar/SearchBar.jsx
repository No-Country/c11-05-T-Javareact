import './SearchBar.css';

const SearchBar = () => {
	return (
		<div className='div-input h-16'>
			<i className='lupita-input fa-solid fa-magnifying-glass'></i>
			<input
				className='input-home w-9/12 h-full bg-transparent'
				type='text'
				placeholder='Buscar servicios y profecionales'
			/>
			<div className='lineas linea-1'></div>
			<div className='lineas linea-2'></div>
			<div className='lineas linea-3'></div>
		</div>
	);
};
export default SearchBar;

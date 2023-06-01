import { useState } from 'react';
import MyButton from '../Common/MyButton/MyButton';

const CardJob = ({
	title,
	profesion,
	entreCalle,
	numero,
	localidad,
	detalle,
	imagenes,
}) => {
	const [showDetails, setShowDetails] = useState(false);

	const toggleDetails = () => {
		setShowDetails(!showDetails);
	};

	const closeDetails = () => {
		setShowDetails(false);
	};

	return (
		<div
			className={`bg-[--secondaryColor] p-5 ml-20 mr-20 rounded-3xl border-solid border-2 border-[--primaryColor] transition-all px-10 mb-10 ${
				showDetails ? 'p-20 pl-20 pr-20' : ''
			}`}>
			<div className='grid grid-cols-2 gap-4'>
				<div className='flex flex-col'>
					<p className='text-xl font-[GalanoBold] pb-2'>{title}</p>
					<div className='pb-2'>
						<p className={showDetails ? 'text-white' : 'hidden'}>Rubro</p>
						<p>{profesion}</p>
					</div>
					<p className={showDetails ? 'text-white' : 'hidden'}>Dirección</p>
					<div>
						<p>
							{entreCalle}, {numero}, {localidad}
						</p>
					</div>
				</div>
				<div>
					<div className={`${showDetails ? 'flex' : 'hidden'} flex-col pb-10`}>
						<p className='text-white'>Detalles del trabajo</p>
						<p className='text-sm'>{detalle}</p>
					</div>
					<div className={`${showDetails ? 'flex' : 'hidden'} flex-col`}>
						<p className='text-white'>Imágenes</p>
						<img src={imagenes} alt='Imágenes' />
					</div>
				</div>
			</div>
			<div className='flex items-center justify-end gap-4'>
				{showDetails ? (
					<>
						<div className='font-bold'>
							<MyButton
								typeStyle='primary border-solid border-2 border-[--primaryColor] hover:border-[--primaryColor]'
								onClick={closeDetails}>
								Cerrar
							</MyButton>
						</div>
						<div className='font-bold'>
							<MyButton typeStyle='tertiary' onClick={toggleDetails}>
								Enviar presupuesto
							</MyButton>
						</div>
					</>
				) : (
					<div className='font-bold'>
						<MyButton typeStyle='tertiary' onClick={toggleDetails}>
							Ver detalle
						</MyButton>
					</div>
				)}
			</div>
		</div>
	);
};

export default CardJob;

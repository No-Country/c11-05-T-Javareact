import { useParams } from 'react-router-dom';
import CardProfesional from '../../components/Card/CardProfesional';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import { profesional } from '../../constants/profesional';

const ProfesionalList = () => {
	const params = useParams();

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='flex flex-col gap-14 lg:w-[75%] my-28'>
				<MyTitle>{params.id}</MyTitle>
				<div className='flex flex-col gap-10'>
					{profesional.map((prof) => (
						<CardProfesional
							key={prof.name}
							name={prof.name}
							photo={prof.photo}
							jobs={prof.jobs}
							score={prof.score}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProfesionalList;

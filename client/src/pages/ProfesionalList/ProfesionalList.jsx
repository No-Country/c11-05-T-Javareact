import { useParams } from 'react-router-dom';
import CardProfesional from '../../components/Card/CardProfesional';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import { profesional } from '../../constants/profesional';
import { motion } from 'framer-motion';

const ProfesionalList = () => {
	const params = useParams();

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='flex flex-col gap-14 lg:w-[75%] my-28'>
				<motion.div
					initial={{ opacity: 0, translateY: '-50%' }}
					whileInView={{ opacity: 1, translateY: '0' }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}>
					<MyTitle>{params.id}</MyTitle>
				</motion.div>
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

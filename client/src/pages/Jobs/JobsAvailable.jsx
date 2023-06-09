import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CardJob from '../../components/Card/CardJob';
import MyButton from '../../components/Common/MyButton/MyButton';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import EmergencyContact from '../../components/JobForms/EmergencyContact/EmergencyContact';
import { tasks } from '../../constants/tasks';
import { motion } from 'framer-motion';

const JobsAvailable = () => {
	const MySwal = withReactContent(Swal);

	const addJobRequest = () => {
		MySwal.fire({
			html: <EmergencyContact />,
			showConfirmButton: false,
			width: 'fit-content',
			scrollbarPadding: false,
		});
	};

	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='flex flex-col gap-14 lg:w-[75%] my-28'>
				<motion.div
					className='flex flex-col lg:flex-row items-center lg:items-end gap-16'
					initial={{ opacity: 0, translateY: '-50%' }}
					whileInView={{ opacity: 1, translateY: '0' }}
					viewport={{ once: true }}
					transition={{ duration: 1.5 }}>
					<MyTitle>Trabajos disponibles</MyTitle>
					<MyButton typeStyle='secondary' onClick={addJobRequest}>
						Agregar petición
					</MyButton>
				</motion.div>
				<div className='flex flex-col gap-10'>
					{tasks.map((task, index) => (
						<CardJob
							key={index}
							title={task.title}
							profesion={task.profesion}
							entreCalle={task.entreCalle}
							numero={task.numero}
							localidad={task.localidad}
							detalle={task.detalle}
							imagenes={task.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default JobsAvailable;

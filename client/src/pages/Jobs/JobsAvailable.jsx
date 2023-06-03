import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CardJob from '../../components/Card/CardJob';
import MyButton from '../../components/Common/MyButton/MyButton';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import EmergencyContact from '../../components/JobForms/EmergencyContact/EmergencyContact';
import { tasks } from '../../constants/tasks';

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
			<div className='flex flex-col gap-14 w-[75%] my-28'>
				<div className='flex items-end gap-16'>
					<MyTitle>Trabajos disponibles</MyTitle>
					<MyButton typeStyle='secondary' onClick={addJobRequest}>
						Agregar petición
					</MyButton>
				</div>
				<div className='flex flex-col gap-10'>
					{tasks.map((task) => (
						<CardJob
							key={task.title}
							title={task.title}
							profesion={task.profesion}
							entreCalle={task.entreCalle}
							numero={task.numero}
							localidad={task.localidad}
							detalle={task.detalle}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default JobsAvailable;

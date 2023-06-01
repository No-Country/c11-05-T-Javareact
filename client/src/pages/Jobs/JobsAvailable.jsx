import CardJob from '../../components/Card/CardJob';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import { tasks } from '../../constants/tasks';

const JobsAvailable = () => {
	return (
		<div className='flex items-center justify-center min-h-screen'>
			<div className='flex flex-col gap-14 w-[75%] my-28'>
				<MyTitle>Trabajos disponibles</MyTitle>
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

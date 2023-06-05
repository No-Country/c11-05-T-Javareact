import CardJob from '../../components/Card/CardJob';
import MyButton from '../../components/Common/MyButton/MyButton';
import { tasks } from '../../constants/tasks';

const Profile = () => {
	return (
		<div className='min-h-screen'>
			<div className='h-52 bg-[--secondaryColorHover] mt-24 relative flex items-center justify-between p-10'>
				<div className='absolute top-[40%] left-[3rem] bg-white w-40 h-40 shadow-lg rounded-xl overflow-hidden'>
					<img src='https://randomuser.me/api/portraits/men/9.jpg' alt='avatar' />
				</div>
				<div className='ml-52 mt-6 text-white'>
					<h4 className='text-2xl font-[GalanoBold] my-3'>Carlos Gonzalez</h4>
					<p className='text-lg'>Carpintero</p>
				</div>
				<MyButton typeStyle='tertiary self-end'>Editar perfil</MyButton>
			</div>
			<div className='h-full flex'>
				<div className='h-full w-[20%] flex flex-col gap-6 p-6'>
					<h6 className='text-2xl font-[GalanoBold] mt-10'>Presupuestos</h6>
					<div className='flex flex-col gap-3 items-start'>
						<button>Enviados</button>
						<button>Recibidos</button>
						<button>Aceptados</button>
						<button>Rechazados</button>
					</div>
				</div>
				<div className='h-full w-[80%] flex flex-col gap-10 py-16'>
					{tasks.slice(0, 2).map((task) => (
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
export default Profile;

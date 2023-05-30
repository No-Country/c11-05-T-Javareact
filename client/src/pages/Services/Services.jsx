import Card from '../../components/Card/Card';
import MyTitle from '../../components/Common/MyTitle/MyTitle';
import SearchBar from '../../components/Common/SearchBar/SearchBar';
import { JOBS_DATA } from '../../constants/jobs';

const Services = () => {
	return (
		<div className='h-full w-full flex items-center justify-center'>
			<div className='container flex flex-col gap-24 my-28'>
				<div className='w-full flex justify-evenly items-center mt-16'>
					<MyTitle>Servicios para el hogar</MyTitle>
					<SearchBar />
				</div>
				<div className='w-full flex flex-wrap gap-10 items-center justify-evenly'>
					{JOBS_DATA.map((data, index) => {
						return (
							<Card
								imagen={data.imagen}
								titulo={data.titulo}
								description={data.description}
								key={index}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
export default Services;

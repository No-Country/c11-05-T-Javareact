import { useState } from 'react';
import MyButton from '../../components/Common/MyButton/MyButton';
import SignUpUser from '../../components/SignUp/SignUp User/SignUpUser';
import SignUpProfesional from '../../components/SignUp/SignUp Profesional/SignUpProfesional';

const Register = () => {
	const [userProf, setUserProf] = useState(false);

	return (
		<div className='flex items-center justify-center h-full'>
			<div className='w-[60%] rounded-3xl mt-24 bg-[--secondaryColor] flex flex-col p-12 gap-10'>
				<MyButton
					typeStyle='tertiary self-center'
					onClick={() => {
						setUserProf(!userProf);
					}}>
					{userProf ? 'Registrase como Usuario' : 'Registrarse como Profesional'}
				</MyButton>
				{userProf ? <SignUpProfesional /> : <SignUpUser />}
			</div>
		</div>
	);
};
export default Register;

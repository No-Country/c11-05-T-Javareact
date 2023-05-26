import { useState } from 'react';
import MyButton from '../../components/Common/MyButton/MyButton';
import SignUpUser from '../../components/SignUp/SignUp User/SignUpUser';
import SignUpProfesional from '../../components/SignUp/SignUp Profesional/SignUpProfesional';

const Register = () => {
	const [userProf, setUserProf] = useState(false);

	return (
		<div className='container w-full my-28 mx-auto p-16 bg-white flex flex-col gap-16'>
			<MyButton
				typeStyle='primary'
				onClick={() => {
					setUserProf(!userProf);
				}}>
				{userProf ? 'Registrase como Usuario' : 'Registrarse como Profesional'}
			</MyButton>
			{userProf ? <SignUpProfesional /> : <SignUpUser />}
		</div>
	);
};
export default Register;

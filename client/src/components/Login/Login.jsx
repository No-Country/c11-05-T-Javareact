import { useForm } from 'react-hook-form';
import Input from '../SignUp/Input/InputText';
import MyButton from '../Common/MyButton/MyButton'
const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm();
  const onSubmit = (data) => {
		console.log(data);
  }
  return (
    <div className='container mt-24 mx-auto max-w-screen-2xl bg-[--secondaryColor] flex flex-col gap-16'>
      <div className='flex'>
        <div className='w-1/2 pt-32'>
          <h2 className="text-5xl text-center font-bold text-white">Iniciar Sesión</h2>
          <form className='pt-20 grid grid-cols-1 gap-7 justify-center'
              onSubmit={handleSubmit(onSubmit)}>
              <Input
                type='email'
                name='email'
                placeholder='Correo Electrónico'
                register={register}
                validation={{ required: true, pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/ }}
                errors={errors}
                textAlert='Ingresa un correo válido'
              />
              <Input
                type='password'
                name='password'
                placeholder='Contraseña'
                register={register}
                validation={{ required:true, pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/ }}
                errors={errors}
                textAlert='Ingresa una contraseña válida'
              />
              <a className='text-right text-white cursor-pointer mr-28'>¿Olvidaste tu contraseña?</a>
          <div className=' flex justify-end mr-20'>
            <MyButton type='submit' typeStyle='primary'>
              Iniciar sesión
            </MyButton>
          </div>
          </form>
          <div className='grid col-span-2	pt-8 pr-5 justify-center'>
              <h3 className="text-4xl text-center font-bold text-white">¿No tenés cuenta?</h3>
            <div className='m-auto pt-10' > 
              <MyButton typeStyle='primary'>
                Registrate aquí
              </MyButton>
            </div>
          </div>
        </div>
        <div className='w-1/2 flex justify-end'>
          <img
            className='ml-4 rounded-l-3xl'
            src='https://picsum.photos/200/300'
            alt='Imagen de perfil'
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>
  );
};


export default Login;
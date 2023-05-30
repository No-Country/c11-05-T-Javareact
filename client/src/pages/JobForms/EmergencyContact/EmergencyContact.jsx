import React from 'react'
import { useForm } from 'react-hook-form'
import MyTitle from '../../../components/Common/MyTitle/MyTitle'
import MyButton from '../../../components/Common/MyButton/MyButton'
import Input from '../../../components/SignUp/Input/InputText'


const EmergencyContact = () => {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm();

  const onSubmit = (data) => {
		console.log(data);
	};
  return (
    <div className='container m-auto'>
      <MyTitle extraClass='mb-12'>Solicitar trabajo de urgencia</MyTitle>
			<form
				className=' grid grid-cols-2 gap-7 justify-center w-full'
				onSubmit={handleSubmit(onSubmit)}>
				<Input
					type='text'
					name='titulo'
					placeholder='Titulo de trabajo'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
        <div>
					<select
						className='bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg lg:w-2/'
						{...register('area', {
							required: true,
						})}>
						<option selected={true} disabled={true}>
							Area de trabajo
						</option>
						<option value={'albañil'}>Albañil</option>
						<option value={'carpintero'}>Carpintero</option>
						<option value={'electricista'}>Electricista</option>
						<option value={'jardinero'}>Jardinero</option>
						<option value={'limpieza'}>Limpieza</option>
						<option value={'mudanza'}>Mudanza</option>
						<option value={'pintor'}>Pintor</option>
						<option value={'plomero'}>Plomero</option>
						<option value={'peluquero'}>Peluquero</option>
						<option value={'metalurgia'}>Herrero</option>
					</select>
					{errors.area?.type === 'required' && (
						<small className='font-extralight text-sm p-2'>
							Por favor, seleccione un area
						</small>
					)}
				</div>
				<Input
					type='text'
					name='calle'
					placeholder='Calle'
					register={register}
					validation={{ required: true, maxLength: 30 }}
					errors={errors}
					textAlert='El campo es requerido'
				/>
        <div className='flex justify-center space-x-9'>
          <Input
            type='number'
            name='number'
            placeholder='Numeracion'
            register={register}
            validation={{
              required: true,
            }}
            errors={errors}
            textAlert='No es una dirección de correo válida'
          />
          <Input
            type='text'
            name='barrio'
            placeholder='Barrio'
            register={register}
            validation={{
              required: true,
              }}
            errors={errors}
            textAlert='Los correos no coinciden'
          />
        </div>
				<Input
					type='text'
					name='entreCalle'
					placeholder='Entre Calles'
					register={register}
					validation={{required: true,}}
					errors={errors}
					textAlert='Mínimo 8 caracteres, una minúscula, una mayúscula y un número'
				/>
        <div className='flex justify-center space-x-9'>
          <Input
            type='text'
            name='piso'
            placeholder='Piso'
            register={register}
            validation={{
              required: true,
            }}
            errors={errors}
            textAlert='Las contraseñas no coinciden'
          />
          <Input
            type='text'
            name='dpto'
            placeholder='Departamento'
            register={register}
            validation={{ required: true, maxLength: 20 }}
            errors={errors}
            textAlert='El campo es requerido'
          />  
        </div>
        <div className=''>
          <Input
            type='file'
            name='dpto'
            placeholder='Departamento'
            register={register}
            validation={{ required: true, maxLength: 20 }}
            errors={errors}
            textAlert='El campo es requerido'
          /> 
        </div>
          <textarea 
          className='col-span-2 bg-white max-w-6xl grid justify-center p-12 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg'
          placeholder='Descripción del trabajo
          (Describe lo mas detalladamente posible, el trabajo que debe realizar el profesional)'
          >
          </textarea>
				<div className='grid col-span-2	pr-5 mb-2 justify-end'>
					<MyButton type='submit' typeStyle='tertiary'>
						Enviar
					</MyButton>
				</div>
			</form>

    </div>
  )
}

export default EmergencyContact

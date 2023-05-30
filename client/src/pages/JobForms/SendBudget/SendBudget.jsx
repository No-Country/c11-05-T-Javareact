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
    <div className='container m-auto mb-80'>
      <MyTitle extraClass='mb-12'>Solicitar trabajo de urgencia</MyTitle>
		<form
		className=' grid grid-cols-2 gap-7 justify-center w-full m-auto'
		onSubmit={handleSubmit(onSubmit)}>
		<Input
			type='text'
			name='titulo'
			placeholder='Tiempo de trabajo (Aprox)'
			register={register}
			validation={{ required: true, maxLength: 30 }}
			errors={errors}
			textAlert='El campo es requerido'
		/>
		<Input
			type='text'
			name='titulo'
			placeholder='Costo (Aproximado)'
			register={register}
			validation={{ required: true, maxLength: 30 }}
			errors={errors}
			textAlert='El campo es requerido'
		/>

          <textarea 
          className='col-span-1 bg-white max-w-xl grid justify-center p-12 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-sm text-left'
          placeholder=''
          >
          </textarea>
          <textarea 
          className='col-span-1 bg-white max-w-xl grid justify-center p-12 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-sm text-left'
          placeholder=''
          >
          </textarea>
				<div className='grid col-span-2	pr-5 mb-2 mt-2 justify-end'>
					<MyButton type='submit' typeStyle='tertiary'>
						Enviar presupuesto
					</MyButton>
				</div>
			</form>

    </div>
  )
}

export default EmergencyContact

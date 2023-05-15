import { useForm } from "react-hook-form"

const RegisterForm = () => {

    const { register, formState:{ errors }, handleSubmit} = useForm();
    const onSubmit = (data) =>{
        console.log(data);
    }

    return (
        <div className='bg-red-500'>
            <h2>¡Sumate a nuestro equipo!</h2>
            <form  onSubmit={ handleSubmit(onSubmit) }>
                <div>
                    <label>Nombre</label>
                    <input type='text' name='' {...register('nombre',{
                        required: true,
                        maxLength: 12
                    })} />
                    {errors.nombre?.type === 'required' && <small>El campo es requerido</small>}
                </div>
                <div>
                    <label>Apellido</label>
                    <input type='text' name='' {...register('apellido',{
                        required: true,
                        maxLength: 12
                    })}/>
                    {errors.apellido?.type === 'required' && <small>El campo es requerido</small>}
                </div>
                <div>
                    <label>Celular</label>
                    <input type='text' name='' {...register('celular',{
                        pattern: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
                    })}/>
                    {errors.celular?.type === 'pattern' && <small>El valor ingresado no corresponde a un numero de telefono</small>}
                </div>
                <div>
                    <label>Email</label>
                    <input type='text' name='' {...register('email',{
                        pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
                    })} />
                    {errors.email?.type === 'pattern' && <p>No es una dirección valida</p>}
                </div>
                <section>
                    <h2>¿Eres mayor de edad?</h2>
                    <div>
                        <label>Si</label>
                        <input type='radio' value={"Si"} {...register('radio')}/>
                    </div>
                    <div>
                        <label>No</label>
                        <input type='radio' value={"No"} {...register('radio')}/>
                    </div>
                </section>
                <div>
                    <label>Nacionalidad</label>
                    <select {...register('nacionalidad', {
                        required:true
                    })}>
                        <option value={"ar"}>Argentina</option>
                        <option value={"ar"}>México</option>
                        <option value={"ar"}>Panamá</option>
                    </select>
                    {errors.nacionalidad?.type === 'required' && <small>Por favor, seleccione una nacionalidad</small>}
                </div>
                <input type='submit' value={"Enviar"} />
            </form>  
        </div>
    )
}

export default RegisterForm

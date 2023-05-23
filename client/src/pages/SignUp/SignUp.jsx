import { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../components/Form/InputText";

const SignUp = () => {
  const { register, formState: { errors }, handleSubmit, getValues} = useForm();
  const onSubmit = (data) => {
    console.log(data);
    document.querySelector('.modal').style.display = 'grid';
  };

  const inputs = [
    {type:"text", name:"nombre", placeholder:"Nombre", register:{register}, validation:{required: true,maxLength: 12}, textAlert:"El campo es requerido"},
    {type:"text", name:"apellido", placeholder:"Apellido", register:{register}, validation:{required: true,maxLength: 12}, textAlert:"El campo es requerido"},
    {type:"text", name:"email", placeholder:"Correo electronico", register:{register}, validation:{pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}, textAlert:"No es una dirección de correo valida"},
    {type:"text", name:"confirmEmail", placeholder:"Confirmar correo electronico", register:{register}, validation:{pattern: /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/}, textAlert:""},
    {type:"password", name:"password", placeholder:"Contraseña", register:{register}, validation:{pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}, textAlert:"Minimo 8 caracteres, una minuscula, una mayuscula y un numero"},
    {type:"password", name:"confirmPassword", placeholder:"Confirmar contraseña", register:{register}, validation:{pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/}, textAlert:"La contraseña ingresada no coincide"},
    {type:"text", name:"pais", placeholder:"Pais", register:{register}, validation:{required: true,maxLength: 12}, textAlert:"El campo es requerido"},
    {type:"text", name:"provincia", placeholder:"Provincia", register:{register}, validation:{required: true,maxLength: 12}, textAlert:"El campo es requerido"},
    {type:"text", name:"localidad", placeholder:"Localidad", register:{register}, validation:{required: true,maxLength: 12}, textAlert:"El campo es requerido"},
  ]

  return (
    <div className='container w-full mx-auto p-20 bg-white border'>
      <h2 className="py-6 pb-9 lg:ml-14 text-5xl text-red-500 font-extrabold">Registro como profesional</h2>
      <form className="grid grid-cols-2 gap-7 mx-auto justify-center" onSubmit={handleSubmit(onSubmit)}>

        {inputs.map((input, index) => (
          <Input
            key={index}
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            register={register}
            validation={input.validation}
            errors={errors}
            compare={input.compare}
            textAlert={input.textAlert}
          />
        ))}
        <div>
            <select className="bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-lg lg:w-2/" {...register('profesion', {
                required:true
            })}>
                <option selected={true} disabled={true} >Profesión</option>
                <option value={"plomero"}>Plomero</option>
                <option value={"albañol"}>Albañil</option>
                <option value={"peluquero"}>Peluquero</option>
            </select>
            {errors.profesion?.type === 'required' && <small className="font-extralight text-sm p-2">Por favor, seleccione una profesión</small>}
        </div>
        <div className="grid col-span-2	pr-5 justify-end">
            <input className=" bg-red-600 text-white m-10 p-4 rounded-3xl shadow mx-auto" type='submit' value={"Registrarse"} />
        </div>
        
      </form>
      <div className="hidden modal absolute bottom-0 left-0 right-0 top-0 place-items-center">
        <p className="p-10 max-w-sm rounded bg-green-400">Te has registrado correctamente</p>
      </div>
    </div>
  );
};

export default SignUp;

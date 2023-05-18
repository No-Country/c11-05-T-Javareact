import React from 'react'
import { useForm } from 'react-hook-form';
const InputForm = (props) => {
    const { register } = useForm();
    const placehold = props.placehold;
    const typeInput = props.typeInput;
    const regName = props.regName;

  return (
    <div className="">
        <input className="bg-white max-w-xl	grid justify-center p-5 pl-7 rounded-3xl shadow w-full mx-auto border-2 ring-1 ring-red-400 placeholder-black" type={typeInput} placeholder={placehold}{...register({regName},{
            required: true,
            maxLength: 12
        })} />
    </div>

  )
}

export default InputForm

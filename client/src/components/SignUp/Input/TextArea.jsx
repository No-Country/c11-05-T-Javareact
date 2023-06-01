import './textArea.css'
const TextArea = ({ name, register, placeholder }) => {
  return (
    <textarea
      name={name}
      className='description col-span-1 bg-white max-w-xl grid justify-center p-12 rounded-3xl shadow w-full mx-auto ring-1 ring-red-400 placeholder-black text-sm text-left'
      placeholder={placeholder}
      {...register(name, { required: true })}
    />
  );
};

export default TextArea;

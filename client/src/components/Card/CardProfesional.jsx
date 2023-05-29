import MyButton from "../../components/Common/MyButton/MyButton";

const CardProfesional = (props) => {
  return (
    <div className="bg-orange-500 m-8 p-4 mb-2 flex justify-between items-center rounded-3xl border-solid">
      <div className="flex items-center">
        <img className="w-20 mr-4 ml-10" src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png" alt="Avatar"></img>
        <div className=" ml-4">
          <p className="text-xl font-black">{props.name}</p>
          <p className="">{props.jobs.join(", ")}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex ">
          <MyButton typeStyle="secondary p-3 m-2">Contactar</MyButton>
          <MyButton typeStyle="secondary p-3 m-2 bg-gray-600 text-white">Ver Perfil</MyButton>
        </div>
        <div className="flex">
            <small className="text-center text-2xl ml-8">★</small>
            <p className="text-white mt-2">{props.score}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfesional;

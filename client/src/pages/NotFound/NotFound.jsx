
import imageError from "../../assets/404.svg"

const NotFound = () => {
	return (
		<div className="container max-2xl w-full m-auto mt-20 flex justify-center items-center ">
			<div className=" mx-auto mt-10 p-2 text-yellow-700">
				<h1 className="text-7xl font-extrabold mb-5">404</h1>
				<h2 className="text-4xl font-extrabold mb-5 tracking-widest">Pagina no encontrada</h2>
				<p className="text-lg tracking-widest">Lo sentimos, la página que estas <br></br>buscando no existe</p>
				<div className="mt-10">
					<a href="/services" className=" p-5 font-extrabold text-center rounded-full transition hover:bg-[--secondaryColor] bg-[--primaryColor] text-white w-40 cursor-pointer"> Volver al inicio </a>
				</div>
			</div>
			<div className="mx-auto">
				<img src={imageError}></img>
			</div>
		</div>
	)
};
export default NotFound;

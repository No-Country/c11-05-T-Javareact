import CardProfesional from "../../components/Card/CardProfesional";
import { profesional } from "../../constants/profesional";
import MyTitle from "../../components/Common/MyTitle/MyTitle"

const ProfesionalList = () => {
  return (
    <div className="container m-auto mt-24">
      <MyTitle>Profesionales</MyTitle>
      {profesional.map((prof) => (
        <CardProfesional
          key={prof.name}
          name={prof.name}
          photo={prof.photo}
          jobs={prof.jobs}
          score={prof.score}
        />
      ))}
    </div>
  );
};

export default ProfesionalList;

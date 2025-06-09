import { useParams } from "react-router-dom";
import dishes from "./dishesData"; // como está tudo no screens, mantém assim

const GastronomyInfo = () => {
  const { gastronomy } = useParams();
  const dish = dishes.find(d => d.id === gastronomy); // usamos 'id', que é em formato slug

  if (!dish) return <p className="text-danger ps-5 pt-3">Dish not found.</p>;

  return (
    <div className="ps-5 pt-3 pe-5 mb-3">
      <h1 className="display-5 fs-3">{dish.title}</h1>

      <div className="row g-3 align-items-start">
        <div className="col-md-6">
          <img
            src={`/${dish.image}`}
            alt={dish.title}
            className="img-fluid image-info"
          />
        </div>
        <div className="col-md-6 description">
          <p className="fs-5 p-2">{dish.description}</p>
        </div>
      </div>

      <div className="info mt-2 mb-3 p-2 text-white">
        <p><strong>Ingredients:</strong></p>
        <ul>
          {dish.ingredients.map((ingredient, i) => (
            <li key={i}>{ingredient}</li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default GastronomyInfo;

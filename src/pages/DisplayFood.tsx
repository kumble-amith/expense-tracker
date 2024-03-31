import { Link } from "react-router-dom";
import "../styles/styles.css"
interface Props {
  foods: any[];
}

function  Display({ foods }: Props) {
    return (
    <>
      <h2>Food List</h2>
      {foods.map((food) => (
        <div key={food.id}>
            <span className="displayName">{food.recipient}</span>
            <span className="displayName">{food.amount}</span>
            <Link to={"/edit/"+food.id} >Edit  </Link>
        </div>
      ))}
    </>
  );
}
export  default Display;

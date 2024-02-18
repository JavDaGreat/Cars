import { changeCost, changeName, addCar } from "../Store";
import { useDispatch, useSelector } from "react-redux";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return {
      name: state.form.name,
      cost: state.form.cost,
    };
  });
  function handleNameChange(e) {
    dispatch(changeName(e.target.value));
  }
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
  }
  function handleCostChange(e) {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3"> Add Car</h4>
      <form onSubmit={handleSubmit}>
        <div className="field-group">
          <div className="field">
            <label htmlFor="label">Brand</label>
            <input
              className="input is-expanded"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="field">
            <label htmlFor="label">Cost</label>
            <input
              className="input is-expanded"
              type="number"
              value={cost || ""}
              onChange={handleCostChange}
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;

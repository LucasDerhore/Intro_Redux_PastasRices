import { useSelector, useDispatch } from "react-redux";
import { buyPastas, eatPastas } from "../../redux/index";

const PastasContainerWithHook = () => {
  const pastas = useSelector((state) => state.pastas);
  const dispatch = useDispatch();

  const onBuy = () => {
    dispatch(buyPastas());
  };

  const onEat = () => {
    dispatch(eatPastas());
  };

  return (
    <div className="PastasContainer">
      <h1>Number of pastas kg : {pastas.pastas}</h1>
      <button onClick={onBuy}>Buy pastas</button>
      <button onClick={onEat}>Eat pastas</button>
    </div>
  );
};

export default PastasContainerWithHook;

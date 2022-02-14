import { useDispatch, useSelector } from "react-redux";
import { buyRices } from "../../redux/index";
import { eatRices } from "../../redux/index";

const RicesContainerWithHook = () => {
  const rices = useSelector((state) => state.rices);
  const dispatch = useDispatch();

  const onBuy = () => {
    dispatch(buyRices());
  };
  const onEat = () => {
    dispatch(eatRices());
  };

  return (
    <div className="RicesContainer">
      <h1>Number of rices kg : {rices.rices}</h1>
      <button onClick={onBuy}>Buy rices</button>
      <button onClick={onEat}>Eat rices</button>
    </div>
  );
};

export default RicesContainerWithHook;

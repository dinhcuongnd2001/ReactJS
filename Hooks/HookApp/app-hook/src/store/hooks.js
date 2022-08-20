import { useContext } from "react";
import Context from "./Context";

const useStore = () => {
    const [state, dispacth] = useContext(Context);
    return [state, dispacth];
}

export {useStore};
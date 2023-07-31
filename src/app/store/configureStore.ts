import { createStore } from "redux";
import counterReducer from "../../features/contact/counterReducer";

export function ConfigureStore() {
    return createStore(counterReducer);
}
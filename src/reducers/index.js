import {
  UPDATE_TOTAL,
  ADD_FEATURE,
  REMOVE_FEATURE
} from "../actions/";

const initialState = {
  title: "Calebslist",
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_TOTAL:
      return {
        ...state,
        additionalPrice: state.car.features
          .map(feature => feature.price)
          .reduce((a, b) => a + b, 0)
      };
    case ADD_FEATURE:
      return {
        ...state,
        car: { ...state.car, features: [...state.car.features, action.payload] }
      };
    case REMOVE_FEATURE:
      return {
        ...state,
        car: {
          ...state.car,
          features: [
            ...state.car.features.filter(
              feature => feature.id != action.payload.id
            )
          ]
        }
      };
    default:
      return state;
  }
}

export default reducer;

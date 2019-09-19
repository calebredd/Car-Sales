export const UPDATE_TOTAL = "UPDATE_TOTAL";
export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function updateTotal(newTotal) {
  // console.log(newTotal);
  return {
    type: UPDATE_TOTAL,
    payload: newTotal
  };
}
export function addFeature(newFeature) {
  // console.log(newFeature);
  return {
    type: ADD_FEATURE,
    payload: newFeature
  };
}
export function removeFeature(badFeature) {
  // console.log(badFeature);
  return {
    type: REMOVE_FEATURE,
    payload: badFeature
  };
}

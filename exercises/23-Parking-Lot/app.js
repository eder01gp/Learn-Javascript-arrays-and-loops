let parking_state = [
  [1, 1, 1],
  [0, 0, 0],
  [1, 1, 2]
]

const getParkingLotState = (parking_state) => {

  let state = {
    availableSlots: 0,
    occupiedSlots: 0,
    totalSlots: 0
  }

  for (let rows in parking_state) {
    for (let statenumber of parking_state[rows]) {
      if (statenumber != 0) {
        state.totalSlots++;
        if (statenumber == 1) state.occupiedSlots++;
        else if (statenumber == 2) state.availableSlots++;
      }
    }
  }

  return state;
}

console.log(getParkingLotState(parking_state));
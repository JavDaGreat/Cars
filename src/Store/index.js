import { configureStore } from "@reduxjs/toolkit";
import {carsReducer,addCar,removeCar,changeSearchTerm} from './Slices/carsSlice'
import {formReducer,changeCost,changeName} from './Slices/formSlice'
const store=configureStore({
  reducer:{
    cars:carsReducer,
    form:formReducer
  }
})

export{
  store,changeName,changeCost,addCar,removeCar,changeSearchTerm
}

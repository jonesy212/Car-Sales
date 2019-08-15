import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';

import Total from './components/Total';

//action file
import {ADD_CAR} from './actions/CarReducerAction'
import {connect} from 'react-redux'

// import {initialState, Reducer} from './carReducer'
// import { dispatch } from './'

const App = ({store, car, additionalPrice, ADD_CAR}) => {
  

  const buyItem = item => {
    // dipsatch an action here to add an item
    ADD_CAR(item)
  }
 
  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car= {car} />
      </div>
      <div className="box">
        <AdditionalFeatures  buyItem={buyItem} state={car} store={store} />
        <Total car={car} additionalPrice={additionalPrice}/>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state)
  return {
    additionalPrice: state.additionalPrice,
    car: state.car, 
    store: state.store
  }
}

export default connect(mapStateToProps, {ADD_CAR})(App)



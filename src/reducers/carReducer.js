//step 1 create a reducer
//removed data from App.js state

//set up reducer

const initialState = {

    additionalPrice: 0,
    car: {
      price: 26395,
      name: '2019 Ford Mustang',
      image:
        'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
      features: []
    },
    store: [
      { id: 1, name: 'V-6 engine', price: 1500 },
      { id: 2, name: 'Racing detail package', price: 1500 },
      { id: 3, name: 'Premium sound system', price: 500 },
      { id: 4, name: 'Rear spoiler', price: 250 }
    ]
  }

  export const carReducer = (state = initialState, action) => {
    console.log(action)
          switch(action.type){
          case 'ADDITIONAL_FEATURE':
          return {
              ...state,
              car:{
                  ...state.car, 
                  features:[...state.car.features, {
                    name:action.payload, 
                    price: action.payload}]
              }
          }
          case 'ADD_FEATURE':
            return {
              ...state,
              additionalPrice: state.additionalPrice + action.payload.price, 
              car:{...state.car, features:[...state.car.features, action.payload]}
          }

          case 'REMOVE_FEATURE':
            return {
              ...state,
              additionalPrice: state.additionalPrice - action.payload.price,
              car:{...state.car, features:state.car.features.filter(item => item.id  !== action.payload.id)}
            }
            default:
              return state
      }
  } 

  
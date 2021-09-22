import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

let initialState = {
  value: AsyncStorage.getItem('newsFeed'),
};

// const getData = async () => {
//   try {
//     const value = await AsyncStorage.getItem('newsFeed');
//     console.log('Fefe', value);
//     if (value !== null) {
//       // value previously stored
//       initialState = {
//         value: JSON.parse(AsyncStorage.getItem('newsFeed')),
//       };
//     }
//   } catch (e) {
//     // error reading value
//   }
// };

// getData();

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    add: (state, action) => {
      // state.value += action.payload;
      console.log('value', JSON.stringify(state.value));
    },
    remove: (state, action) => {
      state.value -= action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, add, remove} = counterSlice.actions;

export default counterSlice.reducer;

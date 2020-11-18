// import {ADD_QUANTITY, SUB_QUANTITY, REMOVE_ITEM} from '../../helpers/constants';
//
// const initialState = {
//     items: [],
//     addItems: [],
//     total: 0,
// }
//
// const shopCartReducer = (state=initialState, action) => {
//     switch (action.type) {
//         case ADD_QUANTITY: {
//             let addedItem = state.items.find(item => item.id === action.id);
// 			addedItem.quantity += 1;
// 			let newTotal = state.total + addedItem.price;
// 			// console.log('in da add');
// 			return {
// 				...state,
// 				total: newTotal,
// 			};
//         } case SUB_QUANTITY: {
// 			let addedItem = state.items.find(item => item.id === action.id);
// 			// console.log('in da sub');
// 			if (addedItem.quantity === 1) {
// 				let new_items = state.addedItems.filter(item => item.id !== action.id);
// 				let newTotal = state.total - addedItem.price;
// 				return {
// 					...state,
// 					addedItems: new_items,
// 					total: newTotal,
// 				};
// 			} else {
// 				addedItem.quantity -= 1;
// 				let newTotal = state.total - addedItem.price;
// 				return {
// 					...state,
// 					total: newTotal,
// 				};
// 			}
// 		}
// 		default: {
// 			return state;
// 		}
//
//     }
// }
//
// export default shopCartReducer;
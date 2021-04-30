import * as ActionTypes from './ActionTypes';

export const addComment = (campsiteId, rating, author, text) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    }
});

//***short hand property names in ES6 since the property name is the same as the value
// payload: {
//     campsiteId,
//     rating,
//     author, 
//     text
// }
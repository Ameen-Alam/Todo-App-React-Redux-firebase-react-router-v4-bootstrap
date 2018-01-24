import ActionTypes from '../constant/constant';
// Initialize Firebase
import fire from '../../fire'


    export function changeTodo(objectTodo) {
        return dispatch => {
            let todos = {
                name : objectTodo.name,
                isEdit : false
                }
                fire.database().ref('/').child('todo').push(todos)
                console.log(todos);

                dispatch({ type: ActionTypes.TODO, payload: todos})
        }
    }
    export function _updateButton(valu , index) {
        return dispatch => {
            // let todo = {
                // name : user.name,
                // isEdit : false,
                // index : index
            // }
            let edit = (key, text) => {
                fire.database().ref("todo/" + key).set(text); // updating data at database
                console.log({text})
            }
                dispatch({ type: ActionTypes.UPDATEBUTTON, payload: valu ,  index : index , edit : edit})
        }
    }
    export function deleteTodo(index) {
        return dispatch => {
            let todos = index
            let remove  = (key)=> {
                fire.database().ref('/').child("todo/" + key).remove()
            }           
        dispatch({ type: ActionTypes.TODODELETE, payload: todos , remove: remove})
        }
}
export function editTodo(ind) {
    return dispatch => {
        let todo = ind
            dispatch({ type: ActionTypes.TODOEDIT, payload: todo })
    }
}
export function isCancel(ind) {
    return dispatch => {
        let todo = ind
            dispatch({ type: ActionTypes.TODOEDITCANCEL, payload: todo })
    }
}
export function firebase(snapshout) {
    return dispatch => {

            dispatch({ type: ActionTypes.FIREBASE , payload : snapshout})
    }
}

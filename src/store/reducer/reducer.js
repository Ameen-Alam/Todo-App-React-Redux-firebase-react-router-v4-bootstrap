import ActionTypes from '../constant/constant';
// import fire from '../../fire';

const INITIAL_STATE = { todo: [
        // {name : 'Ameen Alam' , isEdit : false , id : 475671 },
        // {name : 'Sir Haider' , isEdit : false ,  id : 5785682},
        // {name : 'Sir Ali Mughal' , isEdit : false ,  id : 77883},
        // {name : 'Sir Hanzala' , isEdit : false ,  id : 2353454},
        // {name : 'Sir Majid' , isEdit : false ,  id : 1234556765}
    ]
}




export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.TODO:
            return ( state )
        case ActionTypes.UPDATEBUTTON:
        const object1 = Object.assign( {} , state.todo[action.index] , action.payload );
        state.todo.splice(action.index, 1 , object1);
        action.edit(state.todo[action.index].id , object1)
        
            return (state)

        case ActionTypes.TODODELETE:
        let ids = state.todo[action.payload].id
        state.todo.splice(action.payload,1)
        action.remove(ids);
            return({
                todo :  state.todo.concat()
        })

        case ActionTypes.TODOEDIT:
            
            const objOne = state.todo[action.payload] = {name :state.todo[action.payload].name , isEdit : true , id :state.todo[action.payload].id }
            const object2 = Object.assign( {} , state ,objOne);
        return ({
            todo : object2.todo.concat()
        })
        case ActionTypes.TODOEDITCANCEL:
        const gaa = state.todo[action.payload] = {name :state.todo[action.payload].name , isEdit : false , id :state.todo[action.payload].id }
        const object3 = Object.assign( {} , state ,gaa);
        return ({
            todo : object3.todo.concat()
        })
        case ActionTypes.FIREBASE:
        // let arroo = action.payload
        // console.log(state.todo.arroo)
                return ({
                todo : state.todo.concat(action.payload)
        })

        default:
            return( state )
    }
}
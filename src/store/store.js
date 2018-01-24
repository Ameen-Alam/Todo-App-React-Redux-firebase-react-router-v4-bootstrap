// import React, { Component } from 'react'
// import firebase from '../fire'
// import ActionTypes from './constant/constant'

// export function Snapshout(){
//     return dispatch => {
//         firebase.database().ref('/todo').on('child_added' , function(snap){
//             let obj = snap.val()
//             console.log(obj)
//             let array = []
//             array.push(obj)
//             dispatch({ type: ActionTypes.TODO, payload: array})
//         })

//     }
// }

    
// class Snapshout extends Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             objArray : []
//         }
//     }
//     componentWillMount(){
//         let that = this
//         firebase.database().ref('/todo').on('child_added' , function(snap){
//             let obj = snap.val()
//             console.log(obj)
//             let array = that.state.objArray
//             array.push(obj)
//             that.setState({
//                 objArray : array
//             })
//         })
//     }
    
//     render(){
//         return(
//         <div>
//            {this.state.objArray.map( (eve)=>{
//                return(
//                    <div>
//                        {eve}
//                    </div>
//                )
//            } )}
//            {console.log(this.state.objArray.todo)}
//         </div>
//         )
//     }
// }
// export default Snapshout
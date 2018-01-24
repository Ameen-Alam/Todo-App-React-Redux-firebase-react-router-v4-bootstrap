import React, { Component } from 'react';
import '../App.css'
import {connect} from 'react-redux';
import fire from '../fire'
import {
    changeTodo , deleteTodo , editTodo , isCancel , _updateButton , firebase
} from '../store/action/action';

class Home extends Component{
    constructor(props){
        super(props)
        this.state = 
        {text:{
            input : '',
        },
        editArray : props.todo ,
    }
}

    componentDidMount(){
        let that = this
        console.log(this.state.editArray)
        fire.database().ref('/todo').on('child_added', function(snap){
            let snapshout = snap.val();
            snapshout.id = snap.key;
            that.props.firebase(snapshout)
        })
    }
    _deleteButton(index){
        this.props.deleteTodo(index);
    }
    isCancel(index){
        this.props.isCancel(index);
    }
    _updateButton(index){
        let valu = {
            name : this.state.editArray.editInput,
            isEdit : false,
            id : this.props.todo[index].id
        }
        this.props._updateButton(valu , index);
        this.props.isCancel(index);
    }
    _editButton(index){
        this.props.editTodo(index);
    }
    _changehandler(property ,event){
        let text = this.state.text
        text[property]= event.target.value
        this.setState({
            [event.target.name]: event.target.value,
            input : text
        })
    }
    _editInputA(property , event){
        let array = this.state.editArray;
        array[property] = event.target.value;
        this.setState({
            editArray : array
        })
    }
    // editArray
    _submitButton(event){
        let user = {
            name : this.state.text.input
        }
        let hahah = this.state.editArray.concat(user)
        this.setState({
            text:{
                input:'',
                editArray : hahah,
                id : event
            }
        })
        this.props.changeTodo(user);
    }
    render(){
        return(
            <div className="text-center container-fluid bg-dark">
                <h2 className="text-light bg-dark font-weight-bold py-3" > TODO APP </h2>
                <input placeholder="Type Your Name" className="px-3 py-2 my-3 input w-50" type="text" value={this.state.text.input} onChange={this._changehandler.bind(this, 'input')} />
                <button className="pt-2 mx-3 btn btn-light text-dark font-weight-bold" onClick={this._submitButton.bind(this)}> Submit </button>
                    <div className="bg-white " >
                    {this.props.todo.map( (task , index)=>{
                        return(<div className="border container-fluid"  key={index} index={index} detail={task}>
                                {(task.isEdit)?
                                <div className="row">  
                                    <input placeholder="type edit value" className=" px-3 py-2 my-1 col-xs-12 col-md-7 d-inline-block input" type="text" defaultValue={task.name} onChange={this._editInputA.bind(this ,'editInput')}/>
                                    <button onClick={this.isCancel.bind(this , index)} className="col-md-2 col-xs-6 btn btn-dark">Cancel</button>
                                    <button onClick={this._updateButton.bind(this , index)} className="col-md-2 col-xs-6 btn btn-success">Update</button>
                                    <hr />
                                    <br />
                                </div>
                                    :
                                <div className="row" > 
                                    <h2 className="col-xs-12 col-md-7 d-inline-block" >{task.name}</h2>
                                    <button onClick={this._deleteButton.bind(this, index)} className="col-md-2 col-xs-6 btn btn-danger">Delete</button>
                                    <button onClick={this._editButton.bind(this , index)} className="col-md-2 col-xs-6 btn btn-info">Edit</button>
                                    <hr />
                                    <br />
                                </div>
                                
                                    }
                              </div>  )
                            })
                        }
                        </div>
                        <br />
                        <br />
                        <h1 className="" > ---  My name is AMEEN ALAM  --- </h1>
                        <br />
                        <br />
                        <hr />
                        <hr />
            </div>
        )
    }

}

function mapStateToProp(state){
    return({
        todo : state.root.todo
    })
}
function mapDispatchToProp(dispatch){
    return({
        changeTodo : (user)=>{dispatch(changeTodo(user))},
        deleteTodo : (index)=>{dispatch(deleteTodo(index))},
        editTodo : (ind)=>{dispatch(editTodo(ind))},
        isCancel : (ind)=>{dispatch(isCancel(ind))},
        _updateButton : (valu , index)=>{dispatch(_updateButton(valu , index))},
        firebase : (snapshout)=>{dispatch(firebase(snapshout)) }
    })
}
export default connect(mapStateToProp,mapDispatchToProp)(Home);
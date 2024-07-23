import React, { Component } from "react";
import ToDoItem from "./ToDoItem";

export default class ToDoBox extends Component {

    constructor(){
        super();

        this.state={
            text:"",
            ToDoList:[],
            IdNumber:0
        }

    }

    InputTextChange=(e)=>{
        this.setState({
            text: e.target.value
        })
    }

    InputTextBtn = ()=>{

        if(this.state.text.trim()!==""){
            const newItem = {
                id:++this.state.IdNumber,
                text: this.state.text.trim(),
                completed: false,
            }

            this.setState({
                ToDoList: [...this.state.ToDoList, newItem],
                text:"",
            })
        }
    }

    DeleteItem = (id)=>{
        const UpdatedList= this.state.ToDoList.filter((item)=>item.id !== id)
        this.setState({ToDoList:UpdatedList})
    }

    render() {
        return (
          <div>
            <div className="Box">
              <div className="row">
                <div className="col-md-12">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder={this.state.text}
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                  onChange={this.InputTextChange}
                  value={this.state.text} // Ensure input value is controlled
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                  onClick={this.InputTextBtn}
                >
                  ADD
                </button>
              </div>
                </div>
              </div>
              {this.state.ToDoList.map((item) => (
                <ToDoItem key={item.id} item={item} onDelete={()=> this.DeleteItem(item.id)} />
              ))}
            </div>
          </div>
        );
      }
      
}

import React, { Component } from 'react';

export default class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentDate: new Date().toLocaleDateString(),
            currentTime: this.getCurrentTime(),
            CheckFlag: props.item.completed,
            ToDoText: props.item.text,
            EditFlag:false,
        };
    }

    HandleCheckBox=()=>{
        this.setState({
            CheckFlag: !this.state.CheckFlag
        });
    }

    getCurrentTime() {
        const date = new Date();
        let hours = date.getHours();
        const minutes = date.getMinutes();
        const period = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // Convert hour 0 to 12
        return `${hours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`;
    }

    EditBtn =()=>{
        this.setState(
            {EditFlag:true,}
        )
    }

    InputChange =(e)=>{
        this.setState(
            {
                ToDoText:e.target.value
            }
        )
    }

    SaveBtn = ()=>{
        this.setState({
            EditFlag: false
        })
    }

    render() {
        return (
            <div>
                <div className="Box-item">
                    <div className="BoxItem-Data d-flex">
                        <div className="CheckBox-Data mx-2">
                            <input type="checkbox" checked={this.state.CheckFlag} onChange={this.HandleCheckBox} />
                        </div>
                        <div className="ToDo-Data">
                            {this.state.EditFlag ? 
                            (
                                <div>
                                <input
                                        type="text"
                                        value={this.state.ToDoText}
                                        onChange={this.InputChange}
                                        className='InputSave'
                                    />
                                    <button onClick={this.SaveBtn} className='SaveBtn'><i class="fa-solid fa-floppy-disk"></i></button>
                                </div>
                            ) : 
                            (
                                <div>
                                <h6 className={this.state.CheckFlag ? "Completed": ""}>{this.state.ToDoText}</h6>
                                <span> {this.state.currentTime} {this.state.currentDate}</span>
                                </div>
                            )
                            }
                        </div>
                        <div className="Icons ms-auto px-2">
                            <i className="fa-solid fa-trash" onClick={this.props.onDelete}></i>
                            <i className="fa-solid fa-pen" onClick={this.EditBtn}></i>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


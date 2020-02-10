import React, {Component} from 'react';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taksname: '', tasklevel:0
    };
    this.onClickCancel = this.onClickCancel.bind(this);
    this.onClickSubmit = this.onClickSubmit.bind(this);
    this.TaskName = this.TaskName.bind(this);

  }

  onClickCancel(){
    this.props.handleCancel();
  }
  TaskName(event){
    const target = event.target;    // input selectbox
            const value  = target.type === 'checkbox' ? target.checked : target.value;
            const name   = target.name;
    this.setState({[name]: value});
  }
  onClickSubmit(event){
    let item = {
      name: this.state.taskname,
      level: this.state.tasklevel,
  };

      this.props.handleSubmit(item);
      event.preventDefault();
  }
  render(){
    return (
      <div className='row'>
          <div className="col-md-offset-7 col-md-5">
            <form onSubmit={this.onClickSubmit} className="form-inline">
              <div className="form-group">
                    <label className="sr-only" >label</label>
                    <input

                        onChange = {this.TaskName}
                        value = {this.state.taskname}
                        name="taskname"
                        type="text"
                        className="form-control"
                        placeholder="Task Name" />
              </div>
              <div className="form-group">
                    <label className="sr-only">label</label>
                    <select name="tasklevel" id="inputDs" className="form-control" required="required"
                            onChange = {this.TaskName}
                            value = {this.state.tasklevel}
                    >
                      Low
                      <option value={0}>Low</option>
                      <option value={1}>Medium</option>
                      <option value={2}>High</option>
                    </select>
              </div>
                  <button onClick={this.onClickSubmit}type="button" className="btn btn-primary">Submit</button>
                  <button onClick={this.onClickCancel} type="button" className="btn btn-default">Cancel</button>
              </form>
            </div>
       </div>

    );
  }
}
export default Form

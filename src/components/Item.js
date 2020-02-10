import React, {Component} from 'react';
class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render(){
    let item=this.props.item;
    let index=this.props.index;
    let elmLevel = <span className="alert alert-primary">LOW</span>
    if (item.level === 1)
      elmLevel = <span className="alert alert-warning" >MEDIUM</span>
    else if (item.level === 2)
      elmLevel = <span className="alert alert-danger" >HIGH</span>
    return (
        <tr>
          <td className="text-center">{index+1}</td>
          <td className="text text-info">{item.name}</td>
          <td className="text-center">{elmLevel}</td>
          <td>
            <button type="button" className="btn btn-warning">Edit</button>
            <button type="button" className="btn btn-danger">Delete</button>
          </td>
        </tr>

    );
  }
}
export default Item

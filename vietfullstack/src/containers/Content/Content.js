import React, { Component } from 'react';
import Right_SideBar from './Right_SideBar';
class Content extends Component {
  render() {
    return (
      <div className="container-fluid">
  			<div className="row">
          <Right_SideBar />			
        </div>
		</div>
    );
  }
}

export default Content;
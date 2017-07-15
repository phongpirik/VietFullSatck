import React, { Component } from 'react';

class Widget_Statistic extends Component {
  render() {
    return (
        <div className="widget widget-statistic">
	    	<ul>
	    		<li className="questions-count">
	    			<p>Questions</p>
	    			<span>999</span>
	    		</li>
	    		<li className="members-count">
	    			<p>Answers</p>
	    			<span>9999</span>
	    		</li>
	    	</ul>
		</div>
    );
  }
}

export default Widget_Statistic;
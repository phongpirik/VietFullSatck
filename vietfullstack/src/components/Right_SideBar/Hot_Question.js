import React, { Component } from 'react';

class Hot_Question extends Component {
  render() {
    return (
     <div className="widget widget-hot-questions hot-user-question">
        <h3>HOT QUESTIONS</h3>
        <ul>
        {this.props.posts.map((post, i) => <li key={i}>
                <a href="details">
                    <span className="topic-avatar">
                        <span className="number" alt="">{i+1}</span> </span>
                    <span className="topic-title">{post.title}</span>
                </a>
            </li>
        )}
			
        </ul>
    </div>
    );
  }
}

export default Hot_Question;
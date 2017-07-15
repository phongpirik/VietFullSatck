import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../../actions';
import Widget_Statistic from '../../components/Right_SideBar/Widget_Statistic';
import Hot_Question from '../../components/Right_SideBar/Hot_Question';
import Posts from '../../components/Posts'
class Right_SideBar extends Component {
constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  componentDidMount() {
    const { dispatch, selectedSubreddit } = this.props
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }

  componentDidUpdate(prevProps) {
    if (this.props.selectedSubreddit !== prevProps.selectedSubreddit) {
      const { dispatch, selectedSubreddit } = this.props
      dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }
  }

  handleChange(nextSubreddit) {
    this.props.dispatch(selectSubreddit(nextSubreddit))
    this.props.dispatch(fetchPostsIfNeeded(nextSubreddit))
  }

  handleRefreshClick(e) {
    e.preventDefault()

    const { dispatch, selectedSubreddit } = this.props
    dispatch(invalidateSubreddit(selectedSubreddit))
    dispatch(fetchPostsIfNeeded(selectedSubreddit))
  }
  render() {
  	const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
    return (
        <div className="col-md-2 disable-mobile right-sidebar">
            <Widget_Statistic />
            {isFetching && posts.length === 0 && <h2>Loading...</h2>}
	        {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
	        {posts.length > 0 &&
	          <div style={{ opacity: isFetching ? 0.5 : 1 }}>
	            <Hot_Question posts={posts} />
	          </div>}
        </div>
    )
 }
}
Right_SideBar.propTypes = {
  selectedSubreddit: PropTypes.string.isRequired,
  posts: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { selectedSubreddit, postsBySubreddit } = state
  const {
    isFetching,
    lastUpdated,
    items: posts
  } = postsBySubreddit[selectedSubreddit] || {
    isFetching: true,
    items: []
  }

  return {
    selectedSubreddit,
    posts,
    isFetching,
    lastUpdated
  }
}	
export default connect(mapStateToProps)(Right_SideBar);
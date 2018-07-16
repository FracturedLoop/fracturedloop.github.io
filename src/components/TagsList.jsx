import React, { Component } from 'react';
import Link from 'gatsby-link';

const postTagsList = tags =>
  tags
    .sort((a, b) => {
      if (a > b) {
        return 1;
      }
      return -1;
    })
    .map(tag => (
      <Link className="left-underline" to={`/tags/${tag}`} key={`tag-${tag}`}>
        {tag}
      </Link>
    ));

class TagsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    const wasOpen = this.state.isOpen;
    this.setState({
      isOpen: !wasOpen,
    });
  }

  render() {
    return (
      <div className={this.state.isOpen ? 'post-tags open' : 'post-tags'}>
        <ul>{postTagsList(this.props.tags)}</ul>
        <div className="handle" onClick={this.toggleOpen}>
          <h4 style={{ margin: 0, cursor: 'pointer' }}>Tags</h4>
        </div>
      </div>
    );
  }
}

export default TagsList;

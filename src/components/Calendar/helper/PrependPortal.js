import React from 'react';
import ReactDOM from 'react-dom';

// props: container, ReactComponent
class PrependPortal extends React.Component {
  constructor(props) {
    super(props);
    this.parentId = this.createRandomId();
    this.parent = document.createElement('div');
    this.parent.id = this.parentId;
  }
  createRandomId = () => {
    // helper 함수로 뺴둘것
    return Math.random().toString(36).substring(2, 11);
  };
  componentWillUnmount() {
    // console.log(['this.parent 제거, container'], this.parent);
    this.props.container.removeChild(this.parent);
  }
  componentDidMount() {
    // console.log(['this.parent 추가'], this.parent);
    this.props.container.prepend(this.parent);
  }

  render() {
    const { Component } = this.props;
    return ReactDOM.createPortal(Component, this.parent);
  }
}

export default PrependPortal;

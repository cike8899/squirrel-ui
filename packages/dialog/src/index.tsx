import * as React from 'react';
import * as ReactDom from 'react-dom';
import './index.scss';

export default class Dialog extends React.Component<any> {
  private modalTarget: any = '';
  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'dialog-wrapper';
    document.body.appendChild(this.modalTarget);
  }
  componentWillUpdate() {
    this.renderModal();
  }

  componentWillUnmount() {
    ReactDom.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  renderModal() {
    ReactDom.render(<div>{this.props.children}</div>, this.modalTarget);
  }
  render() {
    return <noscript />;
  }
}

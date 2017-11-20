import * as React from 'react';
import * as ReactDom from 'react-dom';
import './index.scss';
import IDialogProps from './IDialogProps';

export default class Dialog extends React.Component<IDialogProps> {
  static defaultProps = {
    prefixKlass: 'squirrel-dialog'
  };
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
    const { prefixKlass } = this.props;
    const wrapper = (
      <div className={`${prefixKlass}-wrapper`}>
        <div className={`${prefixKlass}-mask`} />
        <section className={`${prefixKlass}-pane`}>
          <header className={`${prefixKlass}-header`}>header</header>
          <div className={`${prefixKlass}-body`}>{this.props.children}</div>
          <footer className={`${prefixKlass}-footer`}>footer</footer>
        </section>
      </div>
    );
    ReactDom.render(wrapper, this.modalTarget);
  }
  render() {
    return <noscript />;
  }
}

import React from 'react';

import './style.css';

export default class Button extends React.Component {
  renderAddButton() {
    return(
      <button 
        className={'btn btn-add'} 
        disabled={this.props.disabled} 
        onClick={this.props.onClick}>{this.props.buttonText}
      </button>
    )
  }
  
  renderDeleteButton() {
    return(
      <button 
        className={'btn btn-delete'} 
        disabled={this.props.disabled} 
        onClick={this.props.onClick}>{this.props.buttonText}
      </button>
    )
  }

  renderStartButton() {
    return(
      <button 
        className={'btn btn-start'} 
        disabled={this.props.disabled} 
        onClick={this.props.onClick}>{this.props.buttonText}
      </button>
    )
  }

  renderRedirectButton() {
    return(
      <button 
        className={'btn btn-redirect'} 
        disabled={this.props.disabled} 
        onClick={this.props.onClick}>{this.props.buttonText}
      </button>
    )
  }

  render() {
    const { type } = this.props;
    return(
      <React.Fragment>
        {type === 'add' && this.renderAddButton()}
        {type === 'delete' && this.renderDeleteButton()}
        {type === 'start' && this.renderStartButton()}
        {type === 'redirect' && this.renderRedirectButton()}
      </React.Fragment>
    )
  }
}

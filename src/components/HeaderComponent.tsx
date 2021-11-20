import React, { Component } from 'react';
import './HeaderComponent.css';

interface Props {
  title: string;
  navigate: Function;
  showGoBack?: boolean;
}
interface State {}
class HeaderComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  goToList() : void {   
    this.props.navigate("/");
  }
  render() {
    return (
      <div className="header">
      <h3 className="title">{this.props.title}</h3>
      {this.props.showGoBack &&
      <div 
        onClick={() => this.goToList()}
        className="go-back-button">
          Go Back
        </div>}
      </div>
    );
  }
}
export default HeaderComponent;
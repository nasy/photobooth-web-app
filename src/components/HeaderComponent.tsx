import React, { Component } from 'react';
import { MAIN_COLOR_DARKER, WHITE_COLOR } from '../styles';
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
        onMouseLeave={(e: any) => {
          e.target.style.background = MAIN_COLOR_DARKER;
          e.target.style.color = WHITE_COLOR;
        }}
        onMouseOver={(e: any) => {
          e.target.style.background = WHITE_COLOR;
          e.target.style.color = MAIN_COLOR_DARKER;
        }}
        className="go-back-button">
          Go Back
        </div>}
      </div>
    );
  }
}
export default HeaderComponent;
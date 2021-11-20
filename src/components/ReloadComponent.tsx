import React, { Component } from 'react';
import './ReloadComponent.css';

interface Props {
  reload: Function;
}
interface State {}
class ReloadComponent extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div 
        onClick={() => this.props.reload()}
        className="reload-button">
        Reload
      </div>
    );
  }
}
export default ReloadComponent;
import React, { Component } from 'react';
import './LoadingComponent.css';
import Lottie from 'react-lottie';
import animationData from './../assets/loading.json';
interface Props {}
interface State {}
class LoadingComponent extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {}
  }
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };
    return (
      <div className="">
       <Lottie 
        options={defaultOptions}
          height={200}
          width={200}
        />
      </div>
    );
  }
}
export default LoadingComponent;
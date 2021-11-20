import React, { Component } from 'react';
import { useParams } from 'react-router';
import { ImageEntity } from '../common/models/ImageEntity';
import { ListImageEntity } from '../common/models/ListImageEntity';
import { ServiceContainer } from '../common/services/serviceContainer';
import HeaderComponent from './HeaderComponent';
import './ImageViewComponent.css';
import LoadingComponent from './LoadingComponent';
import ReloadComponent from './ReloadComponent';

interface Props {
  id?: any;
  navigate: Function;
}
interface State {
  image: ImageEntity|null;
  loading: boolean;
  loadingError: boolean;
}
const withRouter = (ImageViewComponent: React.ComponentClass) => (props: Props) => {
  const params = useParams(); 
  const idProps = {...params, ...props};
  return (
    <ImageViewComponent
      {...idProps}
    />
  );
};

class ImageViewComponent extends Component<Props, State> {
  constructor (props: any) {  
    super(props);
    this.state = {
      image: null,
      loading: false,
      loadingError: false
    }
  }
  componentDidMount() {
    this.load();
  }
  load() : void {
    this.setState({loading: true, loadingError: false})
    ServiceContainer
    .getGetImageService()
    .execute(this.props.id)
    .then((image: ListImageEntity) => {
      this.setState({ image: image, loading: false})
    }).catch((e) => {
      this.setState({loading: false, loadingError: true})
    })
  }
  render() {
    return (
      <div>
        <HeaderComponent 
          navigate={this.props.navigate}
          showGoBack={true}
          title={'View Image'}>
        </HeaderComponent>
        <div className="content">
          {this.state.image &&
          <div>
            <img src={this.state.image.largeUrl}/>
            <div className="photographer">{this.state.image.photographer}</div>
            <div className="primary-color">
              Primary color <div 
                className="label"
                style={{ backgroundColor: this.state.image.avgColor}}></div>
            </div>
          </div>}
        </div>
        {this.state.loadingError &&
         <div className="reload">
        <ReloadComponent reload={this.load.bind(this)}/>
        </div>}
        {this.state.loading &&
        <LoadingComponent/>}
      </div>
    );
  }
}

export default withRouter(ImageViewComponent);
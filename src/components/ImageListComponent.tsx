import React, { Component } from 'react';
import { ListImageEntity } from '../common/models/ListImageEntity';
import { PaginatedImageList } from '../common/models/PaginatedImageListEntity';
import { ServiceContainer } from '../common/services/serviceContainer';
import HeaderComponent from './HeaderComponent';
import LoadingComponent from './LoadingComponent';
import ReloadComponent from './ReloadComponent';
import './ImageListComponent.css';
import { MAIN_COLOR, MAIN_COLOR_DARKER } from '../styles';

interface Props {
  navigate: Function;
}
interface State {
  images: ListImageEntity[];
  perPage: number;
  page: number;
  loading: boolean;
  loadingError: boolean;
  query: string;
}
class ImageListComponent extends Component<Props, State> {
  
  constructor(props: Props) {
    super(props);
    this.state = {
      images: [],
      perPage: 25,
      page: 1,
      loading: false,
      loadingError: false,
      query: 'nature'
    }
  }
  componentDidMount() {
    this.load();
  }
  load(): void {
    this.setState({ loading: true, loadingError: false });
    ServiceContainer
    .getGetImagesService()
    .execute(this.state.query, this.state.page, this.state.perPage)
    .then((list: PaginatedImageList) => {
      this.setState({images: this.state.images.concat(list.images), loading: false})
    }).catch((e) => {
      this.setState({loading: false, loadingError: true})
    })
  }
  loadMore() : void {
    let nextPage = this.state.page + 1;
    this.setState({ page: nextPage}, () => this.load())
  }
  goToImage(imageId: string) : void {   
    this.props.navigate("/image/" + imageId);
  }
  render() {
    return (
      <div style={{ }}>
         <HeaderComponent 
          navigate={this.props.navigate}
          title={'Images Library'}></HeaderComponent>
        <div className="content">
          <div className="images">
          {this.state.images.map((image: ListImageEntity, i) => {       
            return (
            <div 
              key={image.id}
              className="image"
              onClick={() => this.goToImage(image.id)}>
              <img src={image.url}/>
              <div className="details">
                <div className="details-button">
                  Details
                </div>
                <div className="photographer">{image.photographer}</div>
                <div className="primary-color">
                  Primary color <div 
                    className="color-label"
                    style={{ backgroundColor: image.avgColor}}></div>
                </div>
              </div>
            </div>) 
          })}
          </div>
        </div>
        
        <div className="controls">
        {this.state.loadingError &&
         <div className="reload">
        <ReloadComponent reload={this.load.bind(this)}/>
        </div>}
        {this.state.loading &&
        <LoadingComponent/>}

        {!this.state.loading && !this.state.loadingError &&
        <div 
          onClick={() => this.loadMore()}
          className="load-more">
          Load More
          </div>}
        </div>
      </div>
    );
  }
}

export default ImageListComponent;
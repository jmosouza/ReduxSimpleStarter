import _ from 'lodash';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyBw-Nn7T2yrRHT5PcJNXOX9gOhMwnN5lfA'

class App extends Component {
  constructor() {
    super()
    this.state = {
      videos: [],
      selectedVideo: null
    }

    this.searchVideo('nintendo switch')
  }

  searchVideo(term) {
    YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      })
    })
  }

  render() {
    const searchVideo = _.debounce((term) => { this.searchVideo(term) }, 300)

    return (
      <div>
        <SearchBar onInputChange={term => searchVideo(term)} />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          videos={this.state.videos}
          onVideoSelect={selectedVideo => this.setState({selectedVideo})} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector('.container'))

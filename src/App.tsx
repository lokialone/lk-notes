import * as React from 'react';
import './App.css';
import MarkList from './components/MarkList';
import { MarkItem } from './types/Mark';

class App extends React.Component<{}, { url: string }>{
  constructor(props: any){
    super(props);
    this.state = {
      url: 'http://baidu.com'
	};
	// this.openUrl.bind(this);
  }
  openUrl(item: MarkItem) {
	  console.log('this', this);
	  this.setState({
		  url: item.url
	  });
  }

  render() {
    return (
      <div className="App">
        <MarkList openUrl={(item) => this.openUrl(item)} />
        <webview src={this.state.url} className="webview">jjj</webview>
      </div>
    );
  }
}

export default App;

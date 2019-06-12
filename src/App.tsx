import * as React from 'react';
import './App.css';
import MarkList from './components/MarkList';


class App extends React.Component<{}, { url: string }>{
  constructor(props: any){
    super(props);
    this.state = {
      url: 'http://baidu.com'
    };
  }

  public render() {
    return (
      <div className="App">
        <MarkList />
        <iframe src={this.state.url} className="webview" />
      </div>
    );
  }
}

export default App;

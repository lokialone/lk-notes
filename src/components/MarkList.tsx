import * as React from 'react';
import { MarkItem } from '../types/Mark';
interface MyState {
    list: MarkItem[]
}

interface Prop {
	openUrl?: (item: MarkItem) => void;
}
class MarkList extends React.Component<Prop, MyState> {
    constructor(props:any) {
        super(props);
        this.state = {
            list: [
                {
                    url: 'http://www.google.com',
					title: 'google',
					addTime: ''
                },
                {
					url: 'http://www.baidu.com',
					title: '百度',
					addTime: ''
                }
            ]
		}
		// this.handleClick.bind(this);
		// this.openUrl.bind(this);
	}

	handleClick(item: MarkItem) {
		// console.log('this is:', item);
		if (typeof this.props.openUrl === 'function') {
			this.props.openUrl(item);
		}

	}


    render() {
      return (
        <div className="App">
          <div className="marks">
				{this.state.list.map((item, index) => <div key={index} onClick={() => this.handleClick(item)}> {item.title}</div>)}
          </div>
        </div>
      );
	}

  }

export default MarkList;


import React from 'react';
import List from './List.js';
import store from '../Store.js';
import { formatRelativeDate } from '../helpers';

export default class HistoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      historyList: [],
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch() {
    const historyList = store.getHistoryList();
    this.setState({ historyList });
  }

  // handleClickRemoveHistory(event, keyword) {
  //   event.stopPropagation();
  //   store.removeHistory(keyword);
  //   this.fetch();
  // }

  handleClickRemove(keyword) {
    store.removeHistory(keyword);
    this.fetch();
  }

  // render() {
  //   return (
  //     <List
  //       data={this.state.historyList}
  //       onClick={this.props.onClick}
  //       renderItem={(item) => {
  //         return (
  //           <>
  //             <span>{item.keyword}</span>
  //             <span className="date">{formatRelativeDate(item.date)}</span>
  //             <button
  //               className="btn-remove"
  //               onClick={event => this.handleClickRemoveHistory(event, item.keyword)}
  //             />
  //           </>
  //         );
  //       }}
  //     />
  //   );
  // }

  render() {
    return (
      <List
        data={this.state.historyList}
        onClick={this.props.onClick}
        hasDate
        onRemove = {(keyword) => this.handleClickRemove(keyword)}
      />
    );
  }

}

// export default class HistoryList extends List {
//   componentDidMount() {
//     this.fetch();
//   }
//
//   fetch() {
//     const data = store.getHistoryList();
//     this.setState({data});
//   }
//
//   handleClickRemoveHistory(event, keyword) {
//     event.stopPropagation();
//     store.removeHistory(keyword);
//     this.fetch();
//   }
//
//   renderItem(item, index) {
//     return (
//       <>
//         <span>{item.keyword}</span>
//         <span className="date">{formatRelativeDate(item.date)}</span>
//         <button
//           className="btn-remove"
//           onClick={event => this.handleClickRemoveHistory(event, item.keyword)}
//         />
//       </>
//     );
//   }
// }
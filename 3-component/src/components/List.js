import React from 'react';
import {formatRelativeDate} from "../helpers";

const List = ({ data = [], onClick, hasIndex = false, hasDate = false, onRemove }) => {

  const handleClickRemove = (event, keyword) => {
    event.stopPropagation();
    onRemove(keyword);
  }

  return (
    <ul className="list">
      {data.map((item, index) => {
        return (
          <li key={item.id} onClick={() => onClick(item.keyword)}>
            {hasIndex && <span className="number">{index + 1}</span>}
            <span>{item.keyword}</span>
            {hasDate && (<span className="date">{formatRelativeDate(item.date)}</span>)}
            {!!onRemove && (
              <button
                className="btn-remove"
                onClick={event => handleClickRemove(event, item.keyword)}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
};

// const List = ({data = [], onClick, renderItem}) => {
//   return (
//     <ul className="list">
//       {data.map((item, index) => {
//         return (
//           <li key={item.id} onClick={() => onClick(item.keyword)}>
//             {renderItem(item, index)}
//           </li>
//         );
//       })}
//     </ul>
//   );
// };

export default List;

// export default class List extends React.Component {
//   constructor() {
//     super();
//
//     this.state = {
//       data: []
//     }
//   }
//
//   renderItem(item, index) {
//     throw 'renderItem()을 구현하세요'
//   }
//
//   render() {
//     const { onClick } = this.props;
//     const { data } = this.state;
//     return (
//       <ul className="list">
//         {data.map((item, index) => {
//           return (
//             <li key={item.id} onClick={() => onClick(item.keyword)}>
//               {this.renderItem(item, index)}
//             </li>
//           );
//         })}
//       </ul>
//     );
//   }
// }
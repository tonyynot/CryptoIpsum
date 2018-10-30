import React from 'react';
import Lorem from 'react-lorem-component';

class MyLorem extends React.Component {
  render() {
    return (
      <div>
        <h1>Hiya, Twitch</h1>
        <Lorem count={this.props.count || 1} />
      </div>
    );
  }
}

// const MyLorem = () => {
//   return (
//     <div>
//       <h1>Hiya, Twitch</h1>
//       <Lorem />
//     </div>
//   );
// }

export default MyLorem
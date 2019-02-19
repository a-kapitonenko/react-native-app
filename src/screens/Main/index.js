// import React, { Component } from 'react';
// import { ListView } from 'react-native';
// import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';
// const datas = [
//   'Simon Mignolet',
//   'Nathaniel Clyne',
//   'Dejan Lovren',
//   'Mama Sakho',
//   'Alberto Moreno',
//   'Emre Can',
//   'Joe Allen',
//   'Phil Coutinho',
// ];
// export default class SwipeableListExample extends Component {
//   constructor(props) {
//     super(props);
//     this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     this.state = {
//       basic: true,
//       listViewData: datas,
//     };
//   }
//   deleteRow(secId, rowId, rowMap) {
//     rowMap[`${secId}${rowId}`].props.closeRow();
//     const newData = [...this.state.listViewData];
//     newData.splice(rowId, 1);
//     this.setState({ listViewData: newData });
//   }
//   render() {
//     const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
//     return (
//       <FlatList
//         style={this.props.style}
//         data={this.state.data}
//         ItemSeparatorComponent={this.renderSeparator}
//         renderItem={({item}) => this.renderItem(item)}
//         scrollEnabled={this.state.enable}
//       />
//     );
//   }
// }

import React, { Component } from 'react';
import { Container, Button, Segment, Content, Text } from 'native-base';

const segmentData = [
  {
    title: 'Work',
    value: 1,
  },
  {
    title: 'People',
    value: 2,
  },
  {
    title: 'List',
    value: 3,
  },
];

class SegmentOutsideHeaderExample extends Component {
  state = {
    activeSegment: 1,
  };

  setSegment = (newSegment) => {
    const { activeSegment } = this.state;

    if (newSegment !== activeSegment) {
      this.setState({
        activeSegment: newSegment,
      });
    }
  };

  render() {
    const { activeSegment } = this.state;

    return (
      <Container>
        <Text>dsdsdsd</Text>
        <Segment>
          {segmentData.map((segment, index, array) => {
            return (
              <Button
                first={index === 0}
                last={index === array.length - 1}
                key={segment.value}
                active={activeSegment === segment.value}
                onPress={() => this.setSegment(segment.value)}
              >
                <Text>{segment.title}</Text>
              </Button>
            );
          })}
        </Segment>
        <Content padder>
          {activeSegment === 1 && <Text>The first segment!!!</Text>}
          {activeSegment === 2 && <Text>The second segment!!!</Text>}
          {activeSegment === 3 && <Text>The third segment!!!</Text>}
        </Content>
      </Container>
    );
  }
}

export default SegmentOutsideHeaderExample;

import React, { Component }  from 'react';
import Tree from 'react-d3-tree';

const myTreeData = [
  {
    name: 'VARA MOKKA',
    attributes: {
      keyA: 'val A',
      keyB: 'val B',
      keyC: 'val C',
    },
    children: [
      {
        name: 'VARA DOUBLE MOKKA',
        attributes: {
          keyA: 'val A',
          keyB: 'val B',
          keyC: 'val C',
        },
      },
      {
        name: 'Level 2: B',
      },
    ],
  },
];


const style = {
  links: {
    stroke: 'blue',
    strokeWidth: 5
  },
  nodes: {
    node: {
      circle: {
        fill: 'red',
        stroke: 'blue',
        strokeWidth: 3
      },
      name: {
        stroke: 'white'
      },
      attributes: {
        stroke: 'white'
      }
    },
    leafNode: {
      circle: {
        fill: 'red',
        stroke: 'blue',
        strokeWidth: 3
      },
      name: {
        stroke: 'white'
      },
      attributes: {
        stroke: 'white'
      }
    }
  },
}


export default class FamilyTree extends Component {
  render() {
    return (
      <div style={{ height: '100vh', color: 'white'}}>
        <Tree 
          data={myTreeData} 
          collapsible={false}
          scaleExtent={{min: 1, max: 2}}
          orientation="vertical"
          nodeSvgShape={{shape: 'circle', shapeProps: {r: 50}}}
          translate={{x: 1000, y: 100}}
          separation={{siblings: 2}}
          textLayout={{x: -25, y: 0}}
          styles={style}
        />
      </div>

    );
  }
}

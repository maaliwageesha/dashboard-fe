import React, { useEffect, useRef } from 'react';
import { DataSet, Network } from 'vis-network/standalone';

const NetworkGraph = () => {
  const networkRef = useRef(null);

  useEffect(() => {
    const nodes = new DataSet([
      { id: 1, label: 'Renewable' },
      { id: 2, label: 'Energy' },
      { id: 3, label: 'Solar' },
      { id: 4, label: 'Wind' },
      { id: 5, label: 'Climate' },
      { id: 6, label: 'Change' },
      { id: 7, label: 'Australia' }
    ]);

    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 2, to: 3 },
      { from: 3, to: 4 },
      { from: 5, to: 6 },
      { from: 1, to: 7 }
    ]);

    const data = { nodes, edges };
    const options = {
      nodes: {
        shape: 'dot',
        size: 15
      },
      edges: {
        width: 2
      }
    };
    
    const network = new Network(networkRef.current, data, options);
  }, []);

  return <div ref={networkRef} style={{ height: '500px', width: '100%' }}></div>;
};

export default NetworkGraph;

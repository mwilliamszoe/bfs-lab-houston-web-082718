function bfs(rootNode, vertices, edges){
startingNode.distance = 0
let discovered = [startingNode]
let discoveredOrder = [startingNode]
while(discovered.length != 0){
  let currentNode = discovered.shift()
  let ajacentNodes = findAdjacent(currentNode.name, vertices, egdges)
}
discoverOrder = discoverOrder.concat(adjacentNodes);
markDistanceAndPredecessor(currentNode, adjacentNodes)
discovered = discovered.concat(adjacentNodes)
}
return discoverOrder
}

function findAdjacent(nodeName, vertices, edges){
  return edges.filter(function(edge){
    return edge.includes(nodeName)
  }).map(funcion(edge){
    return edge.filter(function(node){
      return (node != nodeName)
    })[0]
  }).map(function(name){
    return findNode(name, vertices)
  }).filter(function(node){
    return node.distances == null;
  })
}

function markDistanceAndPredecessor(predecessor, adjacentNOdes){
  adjacentNodes.map(function(node){
    node.distance = predecessor.distance + 1;
    node.predecessor = predecessor;
  })
}

function findNode(nodeName, vertices){
  return vertices.find(function(vertex){
    return vertex.name == nodeName
  })
}


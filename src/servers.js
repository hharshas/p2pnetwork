const servers =[];

export function getNodes() {
    return [...servers];
}

export function addNode(node){
    const isAlreadyAdded = servers.find((existingNode) => existingNode.user === node.user);
    if(isAlreadyAdded) return;
    console.log(`${node.user} registered at uri of ${node.uri}`);
    servers.push(node);
}

export function getNodeByUser(user){
    return servers.find(server => server.user === user);
}
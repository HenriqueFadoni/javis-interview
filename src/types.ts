export interface NodeType {
  data: string,
  next: NodeType,
  prev: NodeType
}

export interface LinkedListType {
  list: {
    head: NodeType,
    tail: NodeType
  }
}

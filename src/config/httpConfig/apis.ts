export enum APIs {
    GET_DIAGRAM_DATA = '/node/list',
    GET_LIST_EVENT = '/event/search/load-more',
    GET_LIST_EVENT_PAGING = '/event/search/paging',
  }
  
  export enum ErrorCode {
    ERR = 'ERR',
    ERR_SOCKET = 'ERR_SOCKET',
    ERR_SOCKET_DEVICE_NOTFOUND = 'ERR_SOCKET_DEVICE_NOTFOUND',
    ERR_VIRUS = 'ERR_VIRUS',
    ERR_EXCEED_THRESHOLD = 'ERR_EXCEED_THRESHOLD',
    ERR_NETWORK = 'ERR_NETWORK',
    ERR_CANCELED = 'ERR_CANCELED',
  }
  
export interface TextArtMetadata {
    text: string;
    fontSize: number;
    fontFamily: string;
    backgroundColor: string;
    textColor: string;
    name?: string;
  }
  
  export interface CollectionResponse {
    id: string;
    actionId: string;
    status: string;
  }
  
  export interface MintResponse {
    actionId: string;
    status: string;
  }
  
  export interface StatusResponse {
    status: 'pending' | 'processing' | 'completed' | 'failed';
    error?: string;
  }
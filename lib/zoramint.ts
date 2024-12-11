// zoraMint.ts
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
  
  export const createZoraCollection = async (apiKey: string): Promise<string> => {
    try {
      const response = await fetch('/api/zora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey
        },
        body: JSON.stringify({
          action: 'createCollection'
        })
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json() as CollectionResponse;
      return data.id;
    } catch (error) {
      console.error('Error creating collection:', error);
      throw error;
    }
  };
  
  export const mintToZora = async (
    apiKey: string, 
    collectionId: string, 
    metadata: TextArtMetadata
  ): Promise<MintResponse> => {
    try {
      const response = await fetch('/api/zora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey
        },
        body: JSON.stringify({
          action: 'mintNFT',
          collectionId,
          metadata
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      return await response.json() as MintResponse;
    } catch (error) {
      console.error('Minting error:', error);
      throw error;
    }
  };
  
  export const checkMintStatus = async (
    actionId: string,
    apiKey: string
  ): Promise<StatusResponse['status']> => {
    try {
      const response = await fetch('/api/zora', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-API-KEY': apiKey
        },
        body: JSON.stringify({
          action: 'checkStatus',
          actionId
        })
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json() as StatusResponse;
      return data.status;
    } catch (error) {
      console.error('Error checking mint status:', error);
      throw error;
    }
  };
// app/api/zora/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('Received request to /api/zora');
    
    const apiKey = process.env.CROSSMINT_API_KEY;
    const walletAddress = process.env.WALLET_ADDRESS;
    
    if (!apiKey || !walletAddress) {
      console.error('Missing required environment variables');
      return NextResponse.json(
        { error: 'Missing configuration' },
        { status: 500 }
      );
    }

    const body = await request.json();
    console.log('Request body:', { ...body, apiKey: '[REDACTED]' });
    
    const { action, ...data } = body;

    let response;
    
    switch (action) {
      case 'createCollection': {
        console.log('Creating collection...');
        const createCollectionBody = {
          chain: "zora",
          contractType: "erc-1155",
          metadata: {
            name: "Testing",
            description: "A collection of typographic art pieces",
            symbol: "TXTART"
          },
          environment: "staging"
        };

        console.log('Collection creation payload:', createCollectionBody);

        response = await fetch('https://www.crossmint.com/api/2022-06-09/collections', {
          method: 'POST',
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(createCollectionBody)
        });

        const collectionResult = await response.text();
        console.log('Collection creation response:', collectionResult);

        if (!response.ok) {
          throw new Error(`Crossmint API error: ${response.status} - ${collectionResult}`);
        }

        return NextResponse.json(JSON.parse(collectionResult));
      }

      case 'mintNFT': {
        console.log('Minting NFT...');
        const { collectionId, metadata } = data;
        
        if (!collectionId) {
          return NextResponse.json(
            { error: 'Collection ID is required' },
            { status: 400 }
          );
        }

        const mintBody = {
          recipient: `zora:${walletAddress}`,
          metadata: {
            name: metadata.name || "Text Art",
            description: metadata.text,
            image: `ipfs://QmX9MmLDHARfjadxQp9oXzySCP1R8uXkaTXLZ3dSiEN73y`,
            attributes: [
              {
                trait_type: "Font Size",
                value: metadata.fontSize.toString()
              },
              {
                trait_type: "Font Family",
                value: metadata.fontFamily
              },
              {
                trait_type: "Background Color",
                value: metadata.backgroundColor
              },
              {
                trait_type: "Text Color",
                value: metadata.textColor
              }
            ]
          }
        };

        console.log('Mint payload:', { ...mintBody, recipient: '[REDACTED]' });

        response = await fetch(`https://www.crossmint.com/api/2022-06-09/collections/${collectionId}/nfts`, {
          method: 'POST',
          headers: {
            'X-API-KEY': apiKey,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(mintBody)
        });

        const mintResult = await response.text();
        console.log('Mint response:', mintResult);

        if (!response.ok) {
          throw new Error(`Crossmint API error: ${response.status} - ${mintResult}`);
        }

        return NextResponse.json(JSON.parse(mintResult));
      }

      case 'checkStatus': {
        console.log('Checking status...');
        const { actionId } = data;
        
        if (!actionId) {
          return NextResponse.json(
            { error: 'Action ID is required' },
            { status: 400 }
          );
        }

        response = await fetch(`https://www.crossmint.com/api/2022-06-09/actions/${actionId}`, {
          method: 'GET',
          headers: {
            'X-API-KEY': apiKey
          }
        });

        const statusResult = await response.text();
        console.log('Status check response:', statusResult);

        if (!response.ok) {
          throw new Error(`Crossmint API error: ${response.status} - ${statusResult}`);
        }

        return NextResponse.json(JSON.parse(statusResult));
      }

      default:
        console.error('Invalid action:', action);
        return NextResponse.json(
          { error: 'Invalid action' },
          { status: 400 }
        );
    }

  } catch (error) {
    console.error('API route error:', error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Unknown error occurred' },
      { status: 500 }
    );
  }
}
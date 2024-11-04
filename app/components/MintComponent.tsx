import { NFTMintCard } from '@coinbase/onchainkit/nft';
import { NFTMedia } from '@coinbase/onchainkit/nft/view'; 
import {
  NFTCreator, 
  NFTCollectionTitle, 
  NFTQuantitySelector, 
  NFTAssetCost, 
  NFTMintButton, 
} from '@coinbase/onchainkit/nft/mint'; 
 
 export default function MintComponent() {
  return (
<NFTMintCard 
  contractAddress='0xed2f34043387783b2727ff2799a46ce3ae1a34d2' 
  tokenId='2'
> 
  <NFTCreator />
  <NFTMedia />
  <NFTCollectionTitle />
  <NFTQuantitySelector />
  <NFTAssetCost />
    <NFTMintButton />
</NFTMintCard>
  );
}

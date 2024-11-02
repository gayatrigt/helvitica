import { NFTCard } from '@coinbase/onchainkit/nft';
import { NFTMedia, NFTTitle, NFTOwner, NFTMintDate, NFTNetwork } from '@coinbase/onchainkit/nft/view';

const CONTRACT_ADDRESSES = [
  '0xb4703a3a73aec16e764cbd210b0fde9efdab8941',
  '0x34ee9c5307d2bbcbf0c961b14eea7faaaa2dbf21',
  '0xc5183533f98aa1520e6eff0c4b184c8b2c1b781e',
  '0xc6a1f929b7ca5d76e0fa21eb44da1e48765990c5',
  '0x03a4baf3c9450aa25ed21b042001f53d129caeb3',
  '0xd722ffa7fe325cae2939e8715b4384d1d8479d88',

] as const;

export default function MintComponents() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 max-w-5xl mx-auto w-full">
      {CONTRACT_ADDRESSES.map((address) => (
        <div key={address} className="max-w-[400px] mx-auto w-full">
          <NFTCard 
            contractAddress={`0x${address.substring(2)}`} 
            tokenId="1"
            className="w-full h-full"
          >
            <div className="aspect-square">
              <NFTMedia square />
            </div>
            <div className="p-4">
              <NFTTitle />
              <NFTOwner />
              <NFTMintDate />
              <NFTNetwork />
            </div>
          </NFTCard>
        </div>
      ))}
    </div>
  );
}

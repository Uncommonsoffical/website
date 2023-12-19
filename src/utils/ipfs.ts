import { IpfsGateway, isIpfsUrl } from '@crossbell/ipfs-gateway'

export const ipfsGateway = new IpfsGateway()

export const ipfsLinkToHttpLink = (link: string) => (isIpfsUrl(link) ? ipfsGateway.getSwWeb2Url(link) : link)

export const ipfsLinkToFallbackWeb2Url = (link: string) =>
  isIpfsUrl(link) ? ipfsGateway.getFallbackWeb2Url(link) : link

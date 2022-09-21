/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

export const Framework = require("@superfluid-finance/sdk-core");
export const ethers = require("ethers");

export const url =
  "https://polygon-mumbai.g.alchemy.com/v2/uny4ZM2m1-KrNvRxuflNcJ3d0psTynDL";
export const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
module.exports = nextConfig

export const formatAddress = (address) => {
  if (address.length <= 9) {
    return address
  }
  return `${address.slice(0, 5)}...${address.slice(-3)}`
}

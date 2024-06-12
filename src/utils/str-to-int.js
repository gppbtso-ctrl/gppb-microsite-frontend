function toNumber(data) {
  const convertedData = data?.map((value) => Number(value));
  return convertedData;
}

export default toNumber;

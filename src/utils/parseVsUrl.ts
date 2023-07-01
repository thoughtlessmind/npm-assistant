const parseVsUrl = (inputString: string) => {
  console.log('-c', inputString)
  if (!inputString) return [];
  const separator = "-vs-";
  return inputString.split(separator);
};

export default parseVsUrl;

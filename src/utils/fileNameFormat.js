import moment from "moment";

export default function fileNameFormat(filename) {
  const currentDate = moment();
  const formattedDate = currentDate.format("YYYY-MM-DD");
  const formatFilename = `${filename}_${formattedDate}`;

  return formatFilename;
}
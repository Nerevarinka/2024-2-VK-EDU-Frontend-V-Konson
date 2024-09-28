/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */
export function convertBytesToHuman(bytes) {
  if (typeof (bytes) != "number" || isNaN(bytes) || bytes < 0) {
    return false;
  }

  const bytesInKB = 1024;

  let fileSizeKB = bytes / bytesInKB;

  if (fileSizeKB < 1) {
    return `${+bytes.toFixed(2)} B`;
  }

  let fileSizeMB = fileSizeKB / bytesInKB;

  if (fileSizeMB < 1) {
    return `${+fileSizeKB.toFixed(2)} KB`;
  }

  let fileSizeGB = fileSizeMB / bytesInKB;

  if (fileSizeGB < 1) {
    return `${+fileSizeMB.toFixed(2)} MB`;
  }

  return `${+fileSizeGB.toFixed(2)} GB`;
}

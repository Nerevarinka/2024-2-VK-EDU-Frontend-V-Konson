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

  const units = ["B", "KB", "MB", "GB"];

  for (let i = 0; i < units.length; i++) {
    if (bytes < bytesInKB) {
      return `${+bytes.toFixed(2)} ${units[i]}`;
    }

    bytes /= bytesInKB;
  }
}


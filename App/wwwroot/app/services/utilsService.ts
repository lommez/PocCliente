export class UtilsService {
    findWithAttr(array, attr, value): any {
        for (var i = 0; i < array.length; i += 1) {
            if (array[i][attr] === value) {
                return array[i];
            }
        }
    };
}
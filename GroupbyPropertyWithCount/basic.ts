import { Products } from './model';
import { mockProduct } from './mock-product';

let productCount: Products[] = [];
productCount = Object.values(mockProduct.reduce((data, {Type}) => {
    if(data[Type] === undefined) {
        data[Type] = {Type: Type, occurrence: 1};
    } else {
        data[Type].occurrence++;
    }
    return data;

},{}));

console.log(productCount);
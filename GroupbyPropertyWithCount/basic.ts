import { Products } from './model';
import { mockProduct } from './mock-product';

let productCount: Products[] = [];
productCount = Object.values(mockProduct.reduce((Product, {Type}) => {
    if(Product[Type] === undefined) {
        Product[Type] = {Type: Type, occurrence: 1};
    } else {
        Product[Type].occurrence++;
    }
    return Product;
},{}));

console.log(productCount);
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterProducts'
})
export class FilterProductsPipe implements PipeTransform {

  transform(products: any[]): any[] {
    return products.filter((product: any) => {
      return product.discountPercentage > 10 && product.price > 1000;
    });
  }
}

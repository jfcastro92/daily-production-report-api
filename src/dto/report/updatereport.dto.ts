import { ProductEntity } from 'src/entities/product/product.entity';

export class CreateReportDto {
  productCode: string;
  name: string;
  lotNumber: string;
  allergen: string;
  quantity: number;
  weight: number;
  product: ProductEntity;
}

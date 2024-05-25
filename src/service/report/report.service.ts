import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ReportEntity } from 'src/entities/report/report.entity';
import { CreateReportParams, UpdateReportParams } from 'src/utils/types';
import { Repository } from 'typeorm';

@Injectable()
export class ReportService {
  constructor(
    @InjectRepository(ReportEntity)
    private productRepository: Repository<ReportEntity>,
  ) {}

  getProduct() {
    return this.productRepository.find();
  }

  createProduct(reportDetails: CreateReportParams) {
    const newProduct = this.productRepository.create({
      ...reportDetails,
      createdAt: new Date(),
    });
    return this.productRepository.save(newProduct);
  }

  updateProduct(id: number, updateReportDetails: UpdateReportParams) {
    return this.productRepository.update({ id }, { ...updateReportDetails });
  }

  deleteProduct(id: number) {
    return this.productRepository.delete(id);
  }
}

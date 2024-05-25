import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReportEntity } from '../report/report.entity';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column()
  productCode: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  allergen: boolean;

  @Column({ nullable: true })
  allergenDescription: string;

  @OneToMany(() => ReportEntity, (report) => report.product, {
    cascade: ['insert', 'remove'],
  })
  @JoinColumn()
  reports: ReportEntity[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  createdAt: Date;

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  updatedAt: Date;
}

export type CreateUserParams = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: CreateRolParams[];
};

export type UpdateUserParams = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: UpdateRolParams[];
};

export type CreateRolParams = {
  name: string;
  description: string;
};

export type UpdateRolParams = {
  name: string;
  description: string;
};

export type CreateReportParams = {
  productCode: string;
  name: string;
  lotNumber: string;
  allergen: string;
  quantity: number;
  weight: number;
  product: CreateProductParams;
};

export type UpdateReportParams = {
  productCode: string;
  name: string;
  lotNumber: string;
  allergen: string;
  quantity: number;
  weight: number;
  product: CreateProductParams;
};

export type CreateProductParams = {
  productCode: string;
  name: string;
  allergen: boolean;
  allergenDescription: string;
};

export type UpdateProductParams = {
  productCode: string;
  name: string;
  allergen: boolean;
  allergenDescription: string;
};

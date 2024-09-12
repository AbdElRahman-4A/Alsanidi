export interface iUser {
  id: number;
  fullName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  createdAt: string;
  isDefault: boolean;
}

export interface iUserAddress {
  id: number;
  streetName: string;
  address: string;
  city: string;
  country: string;
  zipcode: string;
  phone: string;
  isDefault: boolean;
}

export interface iProduct {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  currency:string,
  imagesUrl: {id: number, url: string}[];
  description: string;
  model: string;
  stock: number;
  categoryId: number;
  rating: number;
  matrial: string;
  color: string;
  size: string;
  SKU: string;
  reviews: iReview[];
  tags: string[];
  warranty: string;
}

export interface iProductInCart extends iProduct {
  quantity: number;
}

export interface iReview {
  id: number;
  username: string;
  comment: string;
  dateCreated: string;
  rate: number;
}

export interface iCategory {
  id: number;
  name: string;
  parentId?: number;
  imgUrl: string;
}

export interface Voucher {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  image: string;
}

export interface GiftDetails {
  recipientName: string;
  recipientEmail: string;
  giftMessage: string;
}

export interface CheckoutFormData {
  email: string;
  firstName: string;
  lastName: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
}
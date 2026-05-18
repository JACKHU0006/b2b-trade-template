export interface MedusaConfig {
  apiUrl: string;
  publishableKey: string;
}

export const medusaConfig: MedusaConfig = {
  apiUrl: import.meta.env.PUBLIC_MEDUSA_API_URL || 'https://api.medusa-commerce.example.com',
  publishableKey: import.meta.env.PUBLIC_MEDUSA_PUBLISHABLE_KEY || '',
};

export interface Product {
  id: string;
  title: string;
  description: string;
  thumbnail?: string;
  images?: string[];
  variants: Variant[];
  collection?: string;
  tags?: string[];
  price?: Price;
}

export interface Variant {
  id: string;
  title: string;
  sku: string;
  prices: Price[];
  inventory_quantity: number;
}

export interface Price {
  amount: number;
  currency_code: string;
}

export interface Cart {
  id: string;
  items: CartItem[];
  total: number;
}

export interface CartItem {
  variant_id: string;
  quantity: number;
  product: Product;
}

let cart: Cart | null = null;

export function getCart(): Cart | null {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('medusa_cart');
    if (stored) {
      cart = JSON.parse(stored);
    }
  }
  return cart;
}

export function createCart(): Cart {
  cart = {
    id: crypto.randomUUID(),
    items: [],
    total: 0,
  };
  saveCart();
  return cart;
}

export function addToCart(product: Product, variantId: string, quantity: number = 1): Cart {
  if (!cart) {
    cart = createCart();
  }

  const existingIndex = cart.items.findIndex(item => item.variant_id === variantId);
  
  if (existingIndex > -1) {
    cart.items[existingIndex].quantity += quantity;
  } else {
    cart.items.push({
      variant_id: variantId,
      quantity,
      product,
    });
  }

  calculateCartTotal();
  saveCart();
  return cart;
}

export function removeFromCart(variantId: string): Cart {
  if (!cart) return cart!;
  
  cart.items = cart.items.filter(item => item.variant_id !== variantId);
  calculateCartTotal();
  saveCart();
  return cart;
}

export function updateCartItemQuantity(variantId: string, quantity: number): Cart {
  if (!cart) return cart!;
  
  const item = cart.items.find(item => item.variant_id === variantId);
  if (item) {
    if (quantity <= 0) {
      return removeFromCart(variantId);
    }
    item.quantity = quantity;
  }
  
  calculateCartTotal();
  saveCart();
  return cart;
}

export function clearCart(): void {
  cart = null;
  if (typeof window !== 'undefined') {
    localStorage.removeItem('medusa_cart');
  }
}

function calculateCartTotal(): void {
  if (!cart) return;
  
  cart.total = cart.items.reduce((sum, item) => {
    const variant = item.product.variants.find(v => v.id === item.variant_id);
    if (variant && variant.prices.length > 0) {
      return sum + (variant.prices[0].amount * item.quantity);
    }
    return sum;
  }, 0);
}

function saveCart(): void {
  if (typeof window !== 'undefined' && cart) {
    localStorage.setItem('medusa_cart', JSON.stringify(cart));
  }
}

export async function initMedusa(): Promise<boolean> {
  if (typeof window === 'undefined') return false;
  
  try {
    getCart();
    return true;
  } catch (error) {
    console.error('Failed to initialize Medusa:', error);
    return false;
  }
}

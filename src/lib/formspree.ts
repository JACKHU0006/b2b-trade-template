export interface FormspreeConfig {
  formId: string;
  endpoint: string;
}

export const formspreeConfig: FormspreeConfig = {
  formId: import.meta.env.PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID',
  endpoint: `https://formspree.io/f/${import.meta.env.PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID'}`,
};

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
}

export interface ProductInquiryData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  productId: string;
  productName: string;
  quantity: string;
  message: string;
}

export async function submitContactForm(data: ContactFormData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(formspreeConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `Contact Form: ${data.subject}`,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error || 'Form submission failed' };
    }
  } catch (error) {
    return { success: false, error: 'Network error. Please try again.' };
  }
}

export async function submitProductInquiry(data: ProductInquiryData): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch(formspreeConfig.endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: `Product Inquiry: ${data.productName}`,
      }),
    });

    if (response.ok) {
      return { success: true };
    } else {
      const errorData = await response.json();
      return { success: false, error: errorData.error || 'Form submission failed' };
    }
  } catch (error) {
    return { success: false, error: 'Network error. Please try again.' };
  }
}

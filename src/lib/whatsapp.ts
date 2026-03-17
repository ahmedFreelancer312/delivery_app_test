import { CartItem } from "@/store/useCart";

export interface CustomerInfo {
  name: string;
  phone: string;
  address: string;
  notes: string;
}

export const formatWhatsAppOrder = (
  customer: CustomerInfo,
  items: CartItem[],
  total: number,
) => {
  const deliveryFee = 20;
  const grandTotal = total + deliveryFee;

  const grouped = items.reduce<Record<string, CartItem[]>>((acc, item) => {
    if (!acc[item.restaurantName]) acc[item.restaurantName] = [];
    acc[item.restaurantName].push(item);
    return acc;
  }, {});

  let message = `طلب جديد من تطبيق ZestFlow \n\n`;
  message += `العميل: ${customer.name}\n`;
  message += `الموبايل: ${customer.phone}\n`;
  message += `العنوان: ${customer.address}\n`;
  if (customer.notes) message += `ملاحظات: ${customer.notes}\n`;
  message += `\n------------------\n`;

  Object.entries(grouped).forEach(([resName, resItems]) => {
    message += `\n${resName}\n`;
    resItems.forEach((item) => {
      message += `  - ${item.name_ar} x ${item.quantity} = ${item.price * item.quantity} ج.م\n`;
    });
  });

  message += `\n------------------\n`;
  message += `حساب الاكل: ${total} ج.م\n`;
  message += `خدمة التوصيل: ${deliveryFee} ج.م\n`;
  message += `الاجمالي النهائي: ${grandTotal} ج.م`;

  const phone = "+201060940751";
  const encoded = encodeURIComponent(message);
  const url = `https://api.whatsapp.com/send?phone=${phone.replace("+", "")}&text=${encoded}`;
  console.log("WhatsApp URL:", url);
  return url;
};

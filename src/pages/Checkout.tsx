import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Send } from 'lucide-react';
import { useCart } from '@/store/useCart';
import { formatWhatsAppOrder, CustomerInfo } from '@/lib/whatsapp';
import Header from '@/components/Header';
import { toast } from 'sonner';

const Checkout = () => {
  const { items, getTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const total = getTotal();

  const [form, setForm] = useState<CustomerInfo>({
    name: '',
    phone: '',
    address: '',
    notes: '',
  });

  const grouped = items.reduce<Record<string, typeof items>>((acc, item) => {
    if (!acc[item.restaurantName]) acc[item.restaurantName] = [];
    acc[item.restaurantName].push(item);
    return acc;
  }, {});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.address) {
      toast.error('من فضلك املأ البيانات المطلوبة');
      return;
    }
    if (items.length === 0) {
      toast.error('السلة فاضية');
      return;
    }

    const url = formatWhatsAppOrder(form, items, total);
    const newWindow = window.open(url, '_blank');
    if (!newWindow) {
      toast.error('تعذر فتح واتساب، جرب انسخ الرابط يدوياً أو أطفي مانع النوافذ المنبثقة');
      return;
    }
    clearCart();
    toast.success('تم إرسال الطلب بنجاح!');
    navigate('/');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container flex flex-col items-center justify-center py-24 text-muted-foreground">
          <p className="text-lg font-bold mb-4">السلة فاضية</p>
          <Link to="/" className="text-primary font-bold hover:underline">ارجع للمطاعم</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container py-6 max-w-lg">
        <Link to="/" className="flex items-center gap-2 text-muted-foreground text-sm mb-4 hover:text-foreground transition-colors">
          <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
          رجوع للمطاعم
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-extrabold mb-6"
        >
          إتمام الطلب
        </motion.h1>

        {/* Order Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-4 mb-6 space-y-4"
        >
          <h2 className="font-bold text-foreground">ملخص الطلب</h2>
          {Object.entries(grouped).map(([resName, resItems]) => (
            <div key={resName} className="space-y-2">
              <h3 className="text-sm font-bold text-muted-foreground">{resName}</h3>
              {resItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span>{item.name_ar} × {item.quantity}</span>
                  <span className="font-mono tabular-nums">{item.price * item.quantity} ج.م</span>
                </div>
              ))}
            </div>
          ))}
          <div className="border-t border-border pt-3 space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">حساب الأكل</span>
              <span className="font-mono tabular-nums">{total} ج.م</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">التوصيل</span>
              <span className="font-mono tabular-nums">٢٠ ج.م</span>
            </div>
            <div className="flex justify-between text-base font-bold pt-1">
              <span>الإجمالي</span>
              <span className="text-primary font-mono tabular-nums">{total + 20} ج.م</span>
            </div>
          </div>
        </motion.div>

        {/* Customer Form */}
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <h2 className="font-bold text-foreground">بيانات التوصيل</h2>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">الاسم الكامل *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm(f => ({ ...f, name: e.target.value }))}
              className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
              placeholder="محمد أحمد"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">رقم الموبايل *</label>
            <input
              type="tel"
              required
              dir="ltr"
              value={form.phone}
              onChange={(e) => setForm(f => ({ ...f, phone: e.target.value }))}
              className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm text-left focus:border-primary focus:outline-none transition-colors font-mono"
              placeholder="01XXXXXXXXX"
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">العنوان بالتفصيل *</label>
            <textarea
              required
              value={form.address}
              onChange={(e) => setForm(f => ({ ...f, address: e.target.value }))}
              className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors resize-none"
              rows={3}
              placeholder="الشارع، المبنى، الدور، الشقة، علامة مميزة..."
            />
          </div>

          <div>
            <label className="text-xs uppercase tracking-widest text-muted-foreground mb-1 block">ملاحظات (اختياري)</label>
            <input
              type="text"
              value={form.notes}
              onChange={(e) => setForm(f => ({ ...f, notes: e.target.value }))}
              className="w-full bg-input border border-border rounded-xl px-4 py-3 text-foreground text-sm focus:border-primary focus:outline-none transition-colors"
              placeholder="مثلاً: من غير بصل..."
            />
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-primary text-primary-foreground font-bold py-4 rounded-xl flex items-center justify-center gap-2 text-base mt-4"
          >
            <Send className="w-5 h-5" strokeWidth={1.5} />
            إرسال الطلب عبر واتساب
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Checkout;

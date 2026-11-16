import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { FooterSection } from '../components/FooterSection';
import { FadeIn } from '../components/ui/FadeIn';
import { ProductImage } from '../components/ui/ProductImage';

export const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const [isSummaryOpen, setIsSummaryOpen] = useState(false);
  const [isOrderAccepted, setIsOrderAccepted] = useState(false);
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'express'>('standard');
  const [paymentMethod, setPaymentMethod] = useState<'credit_card' | 'paypal' | 'apple_pay'>('credit_card');
  const [agreeTerms, setAgreeTerms] = useState(true);
  const [orderRef] = useState(() => `#KZK-${Math.floor(100000 + Math.random() * 900000)}`);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cartItems = [
    { id: 'jacket3', name: 'Top Coat Amon', size: 'M', color: 'Black', price: 1320, img: new URL('../assets/product/jacket3.png', import.meta.url).href },
    { id: 'dress1', name: 'Dress Bastet', size: 'S', color: 'Black', price: 910, img: new URL('../assets/product/dress1.png', import.meta.url).href },
    { id: 'jacket1', name: 'Robe Nimti', size: 'M', color: 'Black', price: 1530, img: new URL('../assets/product/jacket1.png', import.meta.url).href },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discount = promoApplied ? subtotal * 0.15 : 0;
  const shippingCost = shippingMethod === 'express' ? 15 : 0;
  const total = subtotal - discount + shippingCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoApplied(true);
  };

  return (
    <div className="bg-[#EBEBEB] min-h-screen text-[#1A1A1A] font-sans selection:bg-black selection:text-white pb-0">
      <Navbar darkLinks={true} />
      
      <main className="max-w-7xl mx-auto px-3.5 xs:px-4 sm:px-6 py-6 xs:py-8 md:py-20 mt-4 sm:mt-10">
        <FadeIn delay={0.1} y={30}>
          <div className="flex flex-col mb-6 sm:mb-12">
            <span className="text-[10px] uppercase font-bold tracking-[0.3em] text-black/40 mb-2">Secure Checkout</span>
            <h1 className="text-3xl xs:text-4xl sm:text-7xl md:text-[8rem] font-black uppercase tracking-tighter leading-none text-[#1A1A1A]">
              Checkout
            </h1>
          </div>
        </FadeIn>

        {/* Mobile Collapsible Order Summary */}
        <div className="lg:hidden mb-8 bg-white/90 border border-[#1A1A1A]/10 rounded-2xl overflow-hidden shadow-sm">
          <button
            onClick={() => setIsSummaryOpen(!isSummaryOpen)}
            className="w-full px-4 xs:px-5 py-4 flex items-center justify-between text-left min-h-[50px] active:bg-black/5"
            aria-expanded={isSummaryOpen}
          >
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
              <span className="text-black">Order Summary</span>
              <span className="text-[10px] bg-black/10 px-2 py-0.5 rounded-full font-bold">{cartItems.length} items</span>
              <span className="text-[#1A1A1A]/60 text-xs">{isSummaryOpen ? '▲' : '▼'}</span>
            </div>
            <span className="text-sm font-bold text-black">${total.toFixed(2)}</span>
          </button>
          
          {isSummaryOpen && (
            <div className="px-4 xs:px-5 pb-5 pt-2 border-t border-[#1A1A1A]/10 flex flex-col gap-4">
              {cartItems.map((item, i) => (
                <div key={i} className="flex gap-3 xs:gap-4 items-center">
                  <div className="w-12 h-16 bg-[#E0E0E0] overflow-hidden flex-shrink-0 rounded p-1">
                    <img src={item.img} alt={item.name} className="w-full h-full object-contain mix-blend-multiply" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-xs font-bold truncate">{item.name}</h4>
                    <p className="text-[10px] text-[#1A1A1A]/60 font-medium">Size: {item.size} · Color: {item.color}</p>
                  </div>
                  <span className="text-xs font-bold">${item.price.toFixed(2)}</span>
                </div>
              ))}

              {/* Mobile Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2 pt-2 border-t border-[#1A1A1A]/10">
                <input
                  type="text"
                  placeholder="Promocode (e.g. KOWAI15)"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  className="flex-1 bg-black/5 px-3 py-2 text-xs font-mono outline-none rounded-lg"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-4 py-2 text-[10px] font-bold uppercase rounded-lg hover:bg-[#DFA09D] hover:text-black transition-colors"
                >
                  {promoApplied ? 'Applied ✓' : 'Apply'}
                </button>
              </form>

              <div className="pt-2 border-t border-[#1A1A1A]/10 space-y-1.5 text-xs font-medium">
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/60">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-green-700 font-bold">
                    <span>Discount (15% OFF)</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="text-[#1A1A1A]/60">Shipping</span>
                  <span className={shippingCost === 0 ? "text-green-700 font-bold" : ""}>
                    {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between font-bold text-sm pt-2 border-t border-[#1A1A1A]/10">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-8 sm:gap-16 lg:gap-32">
          {/* Left: Form Sections */}
          <div className="flex flex-col gap-8 sm:gap-12">
            
            {/* Information Section */}
            <section>
              <div className="flex justify-between items-baseline mb-4 sm:mb-8">
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight">Information</h2>
                <span className="text-[10px] text-[#1A1A1A]/60">Already have an account? <Link to="/about" className="text-[#1A1A1A] underline underline-offset-2 hover:text-black">Log in</Link></span>
              </div>
              
              <div className="space-y-6 sm:space-y-10">
                <div>
                  <h3 className="text-xs sm:text-sm font-bold mb-3 sm:mb-6 uppercase tracking-wider text-black/70">Personal details</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
                    <input type="text" placeholder="First name" defaultValue="Mikasa" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                    <input type="text" placeholder="Last name" defaultValue="Ackerman" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                    <input type="tel" placeholder="Phone number" defaultValue="+1 (555) 234-8901" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                    <input type="email" placeholder="Email" defaultValue="mikasa@kaizoku.com" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                  </div>
                </div>

                <div>
                  <h3 className="text-xs sm:text-sm font-bold mb-3 sm:mb-6 uppercase tracking-wider text-black/70">Shipping address</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6">
                    <input type="text" placeholder="Country / Region" defaultValue="United States" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                    <input type="text" placeholder="City" defaultValue="New York" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                    <input type="text" placeholder="Address" defaultValue="742 Evergreen Terrace, Atelier 4B" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                    <input type="text" placeholder="Zip / Postal code" defaultValue="10001" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                  </div>
                </div>
              </div>
            </section>

            {/* Delivery Section */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Delivery Method</h2>
              <div className="border-t border-b border-[#1A1A1A]/10 flex flex-col bg-white/40 rounded-xl overflow-hidden">
                <label 
                  onClick={() => setShippingMethod('standard')}
                  className="flex items-center justify-between p-4 sm:py-5 cursor-pointer group border-b border-[#1A1A1A]/10 min-h-[54px] hover:bg-black/5 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <input 
                      type="radio" 
                      name="delivery" 
                      className="accent-[#1A1A1A] w-4 h-4 cursor-pointer" 
                      checked={shippingMethod === 'standard'} 
                      onChange={() => setShippingMethod('standard')} 
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">Standard Atelier Delivery</span>
                      <span className="text-[10px] text-[#1A1A1A]/50">Tracked dispatch within 4-6 business days</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-green-700">Free</span>
                </label>

                <label 
                  onClick={() => setShippingMethod('express')}
                  className="flex items-center justify-between p-4 sm:py-5 cursor-pointer group min-h-[54px] hover:bg-black/5 transition-colors"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <input 
                      type="radio" 
                      name="delivery" 
                      className="accent-[#1A1A1A] w-4 h-4 cursor-pointer" 
                      checked={shippingMethod === 'express'} 
                      onChange={() => setShippingMethod('express')} 
                    />
                    <div className="flex flex-col">
                      <span className="text-sm font-bold">Express Courier Air</span>
                      <span className="text-[10px] text-[#1A1A1A]/50">Priority delivery within 1-2 business days</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold">$15.00</span>
                </label>
              </div>
            </section>

            {/* Payment Section */}
            <section className="mb-4">
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-4 sm:mb-6">Payment</h2>
              <div className="border-t border-b border-[#1A1A1A]/10 flex flex-col bg-white/40 rounded-xl overflow-hidden">
                 <div className="p-4 sm:py-5 border-b border-[#1A1A1A]/10">
                    <div className="flex justify-between items-center mb-4 sm:mb-6">
                       <label 
                         onClick={() => setPaymentMethod('credit_card')}
                         className="flex items-center gap-3 sm:gap-4 cursor-pointer min-h-[36px]"
                       >
                         <input 
                           type="radio" 
                           name="payment" 
                           className="accent-[#1A1A1A] w-4 h-4 cursor-pointer" 
                           checked={paymentMethod === 'credit_card'} 
                           onChange={() => setPaymentMethod('credit_card')} 
                         />
                         <span className="text-sm font-bold">Credit / Debit Card</span>
                       </label>
                       <div className="flex items-center gap-2">
                          <span className="text-blue-800 font-black italic text-xs">VISA</span>
                          <div className="flex -space-x-1"><div className="w-3 h-3 rounded-full bg-red-500 opacity-90"/><div className="w-3 h-3 rounded-full bg-yellow-500 opacity-90"/></div>
                       </div>
                    </div>
                    {paymentMethod === 'credit_card' && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-4 sm:gap-y-6 mb-2">
                         <input type="text" placeholder="Card number" defaultValue="4532 •••• •••• 8912" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                         <input type="text" placeholder="Cardholder name" defaultValue="Mikasa Ackerman" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                         <input type="text" placeholder="Expiration (MM/YY)" defaultValue="08/29" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                         <input type="text" placeholder="CVV" defaultValue="714" className="w-full bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-base sm:text-xs outline-none focus:border-black transition-colors placeholder:text-[#1A1A1A]/40 min-h-[42px]" />
                      </div>
                    )}
                 </div>

                 <label 
                   onClick={() => setPaymentMethod('paypal')}
                   className="flex items-center justify-between p-4 sm:py-5 border-b border-[#1A1A1A]/10 cursor-pointer group min-h-[52px] hover:bg-black/5 transition-colors"
                 >
                   <div className="flex items-center gap-3 sm:gap-4">
                     <input 
                       type="radio" 
                       name="payment" 
                       className="accent-[#1A1A1A] w-4 h-4 cursor-pointer" 
                       checked={paymentMethod === 'paypal'} 
                       onChange={() => setPaymentMethod('paypal')} 
                     />
                     <span className="text-sm font-bold">PayPal Checkout</span>
                   </div>
                   <span className="text-blue-600 font-black italic text-sm tracking-tight">PayPal</span>
                 </label>

                 <label 
                   onClick={() => setPaymentMethod('apple_pay')}
                   className="flex items-center justify-between p-4 sm:py-5 cursor-pointer group min-h-[52px] hover:bg-black/5 transition-colors"
                 >
                   <div className="flex items-center gap-3 sm:gap-4">
                     <input 
                       type="radio" 
                       name="payment" 
                       className="accent-[#1A1A1A] w-4 h-4 cursor-pointer" 
                       checked={paymentMethod === 'apple_pay'} 
                       onChange={() => setPaymentMethod('apple_pay')} 
                     />
                     <span className="text-sm font-bold">Apple Pay One-Touch</span>
                   </div>
                   <span className="text-[#1A1A1A] font-bold text-sm"> Pay</span>
                 </label>
              </div>

              <label className="flex items-center gap-3 cursor-pointer mt-5 sm:mt-8 mb-6 sm:mb-8 group min-h-[40px]">
                <input 
                  type="checkbox" 
                  checked={agreeTerms} 
                  onChange={(e) => setAgreeTerms(e.target.checked)} 
                  className="accent-black w-4 h-4 cursor-pointer" 
                />
                <span className="text-xs text-[#1A1A1A]/70">I agree to bespoke atelier terms and order processing</span>
              </label>

              <button 
                onClick={() => setIsOrderAccepted(true)}
                className="w-full bg-[#1F1F1F] text-white font-black py-4 sm:py-5 text-xs sm:text-[11px] uppercase tracking-[0.25em] hover:bg-black transition-all min-h-[52px] flex items-center justify-center rounded-xl sm:rounded-none active:scale-[0.99] shadow-xl"
              >
                Pay ${total.toFixed(2)} and Place Order →
              </button>
            </section>
          </div>

          {/* Right: Shopping Bag Summary (Desktop) */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-32 bg-white/60 p-8 rounded-3xl border border-black/5">
              <h2 className="text-2xl font-bold tracking-tight mb-6">Shopping Bag ({cartItems.length})</h2>
              
              <div className="border-t border-[#1A1A1A]/10">
                {cartItems.map((item, i) => (
                  <div key={i} className="flex gap-5 items-start py-5 border-b border-[#1A1A1A]/10">
                    <div className="w-[72px] h-[96px] bg-[#E0E0E0] overflow-hidden flex-shrink-0 rounded-xl p-1">
                      <ProductImage
                        id={item.id}
                        alt={item.name}
                        baseImage={item.img}
                        className="w-full h-full mix-blend-multiply opacity-90 object-contain"
                      />
                    </div>
                    <div className="flex-1 flex justify-between">
                      <div className="flex flex-col">
                        <h3 className="text-xs font-bold mb-1.5">{item.name}</h3>
                        <div className="text-[10px] text-[#1A1A1A]/60 space-y-1 font-medium">
                          <p><span className="inline-block w-12">Size:</span> {item.size}</p>
                          <p><span className="inline-block w-12">Color:</span> {item.color}</p>
                          <p><span className="inline-block w-12">Qty:</span> 1</p>
                        </div>
                      </div>
                      <span className="text-xs font-bold">${item.price.toFixed(2)}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <form onSubmit={handleApplyPromo} className="flex gap-3 mb-6">
                  <input 
                    type="text" 
                    placeholder="Promocode (KOWAI15)" 
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 bg-transparent border-b border-[#1A1A1A]/20 pb-2 text-xs font-mono outline-none focus:border-black placeholder:text-[#1A1A1A]/40" 
                  />
                  <button 
                    type="submit" 
                    className="bg-black text-white px-6 py-2.5 text-[10px] font-bold uppercase rounded-lg hover:bg-[#DFA09D] hover:text-black transition-colors"
                  >
                    {promoApplied ? 'Applied ✓' : 'Apply'}
                  </button>
                </form>

                <div className="space-y-3 text-xs py-4 border-b border-[#1A1A1A]/10 font-medium">
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {promoApplied && (
                    <div className="flex justify-between text-green-700 font-bold">
                      <span>Discount (15% OFF)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="text-[#1A1A1A]/60">Shipping</span>
                    <span className={shippingCost === 0 ? "text-green-700 font-bold" : ""}>
                      {shippingCost === 0 ? 'Free' : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end pt-5">
                  <span className="text-base font-bold">Total:</span>
                  <span className="text-2xl font-black">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      
        {/* Order Accepted Modal Dialog */}
        {isOrderAccepted && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3.5 xs:p-4 bg-black/75 backdrop-blur-md">
            <div className="bg-[#111] border border-white/15 rounded-3xl max-w-lg w-full max-h-[92dvh] overflow-y-auto p-6 xs:p-8 sm:p-10 text-center text-white shadow-[0_25px_60px_rgba(0,0,0,0.8)] relative">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#DFA09D]/15 border-2 border-[#DFA09D] flex items-center justify-center text-[#DFA09D] text-2xl font-bold">
                ✓
              </div>
              <span className="inline-block px-3 py-1 bg-[#DFA09D]/15 border border-[#DFA09D]/40 text-[#DFA09D] rounded-full text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                ORDER ACCEPTED & CONFIRMED
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight italic mb-2">
                Thank You For Your Order
              </h2>
              <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-6">
                Your bespoke order has been accepted into our Manhattan atelier fulfillment pipeline. Courier handover initiated.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6 text-left space-y-2.5 text-xs font-mono">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40 uppercase">Order ID</span>
                  <span className="text-[#DFA09D] font-bold">{orderRef}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40 uppercase">Items Ordered</span>
                  <span className="text-white">{cartItems.length} Piece(s)</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40 uppercase">Total Paid</span>
                  <span className="text-white font-bold">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-white/40 uppercase">Delivery Speed</span>
                  <span className="text-white">{shippingMethod === 'express' ? 'Express Courier 1-2 Days' : 'Standard 4-6 Days'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/40 uppercase">Status</span>
                  <span className="text-[#10b981] font-bold">Payment Accepted & Packing</span>
                </div>
              </div>

              <button
                onClick={() => navigate('/products')}
                className="w-full py-4 bg-[#DFA09D] text-black font-black uppercase text-xs tracking-[0.2em] rounded-xl hover:bg-white transition-all shadow-lg min-h-[48px]"
              >
                Continue Shopping →
              </button>
            </div>
          </div>
        )}
      </main>

      <FooterSection />
    </div>
  );
};

export default function Cart({ children }) {
  return (
    <div
      className={
        " w-80 bg-roast border border-espresso p-6 text-center text-cream shadow-2xl  rounded-md"
      }
    >
      <h1 className="text-2xl font-serif mb-4 border-b border-stone-700 pb-2">
        Your Cart
      </h1>
      <div className="space-y-4">
        <p className="text-stone-400 italic">Your cart is currently empty.</p>
        {children}
        <div className="mt-6 pt-4 border-t border-stone-700">
          <div className="flex justify-between items-center mb-6 font-semibold">
            <span>Subtotal</span>
            <span>₹0.00</span>
          </div>
          <button className="w-full bg-amber-900 hover:bg-amber-800 text-white py-3 px-4 rounded transition-all duration-200 uppercase tracking-widest text-sm">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

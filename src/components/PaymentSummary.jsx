// PaymentSummary.jsx
const PaymentSummary = ({ getTotalPrice, voucherCode, handleVoucherChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between font-semibold">
        <span className="text-third">Tax</span>
        <span className="text-third">Rp0</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span className="text-third">Platform Fee</span>
        <span className="text-third">Rp9,000</span>
      </div>
      <div className="flex justify-between font-semibold">
        <span className="text-third">Discount</span>
        <span className="text-third">Rp0</span>
      </div>
      <div className="flex text-third">
        <input
          type="text"
          value={voucherCode}
          onChange={handleVoucherChange}
          placeholder="Input Voucher Code"
          className="w-full p-2 rounded-l-lg border-2 border-third focus:outline-none"
        />
        <button className="bg-third text-white p-2 rounded-r-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
      <div className="flex justify-between text-third font-bold">
        <span>Total Payment</span>
        <span>Rp{(getTotalPrice() + 9000).toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PaymentSummary;
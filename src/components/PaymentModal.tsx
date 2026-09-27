import React, { useState, useEffect } from 'react';
import { Course } from '../data/coursesData';
import { 
  X, 
  ShieldCheck, 
  CreditCard, 
  Smartphone, 
  Building2, 
  Clock, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Tag, 
  Lock, 
  QrCode,
  AlertCircle,
  Download,
  Copy,
  Check
} from 'lucide-react';

interface PaymentModalProps {
  course: Course;
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: (courseId: string, customerData: { name: string; email: string; phone: string }) => void;
  currentUser?: { name: string; email: string } | null;
  onGoToAccount?: () => void;
}

type PaymentTab = 'upi' | 'card' | 'netbanking' | 'emi';

export const PaymentModal: React.FC<PaymentModalProps> = ({
  course,
  isOpen,
  onClose,
  onPaymentSuccess,
  currentUser,
  onGoToAccount
}) => {
  // Parse numeric price from course.price (e.g. "₹54,999" -> 54999)
  const basePriceNumber = parseInt(course.price.replace(/[^0-9]/g, ''), 10) || 49999;

  // Form State
  const [name, setName] = useState(currentUser?.name || '');
  const [email, setEmail] = useState(currentUser?.email || '');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');

  // Discount & Coupon State
  const [couponInput, setCouponInput] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>('AIYUG40'); // Default early bird
  const [couponError, setCouponError] = useState('');

  // Payment Method State
  const [activeTab, setActiveTab] = useState<PaymentTab>('upi');
  const [upiMethod, setUpiMethod] = useState<'qr' | 'id' | 'app'>('qr');
  const [customUpiId, setCustomUpiId] = useState('');
  const [selectedUpiApp, setSelectedUpiApp] = useState('gpay');

  // Card details
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardName, setCardName] = useState('');

  // Net banking details
  const [selectedBank, setSelectedBank] = useState('hdfc');

  // EMI details
  const [selectedEmiMonths, setSelectedEmiMonths] = useState<number>(6);

  // Flow State: 'checkout' -> 'processing' -> 'otp' -> 'success'
  const [step, setStep] = useState<'checkout' | 'processing' | 'otp' | 'success'>('checkout');
  const [otpCode, setOtpCode] = useState('');
  const [txnId, setTxnId] = useState('');
  const [copiedTxn, setCopiedTxn] = useState(false);

  // Sync user info if currentUser changes
  useEffect(() => {
    if (currentUser) {
      if (currentUser.name) setName(currentUser.name);
      if (currentUser.email) setEmail(currentUser.email);
    }
  }, [currentUser]);

  if (!isOpen) return null;

  // Calculate discounts
  let discountAmount = 0;
  if (appliedCoupon === 'AIYUG40') {
    discountAmount = Math.round(basePriceNumber * 0.40);
  } else if (appliedCoupon === 'SCHOLAR10') {
    discountAmount = 10000;
  } else if (appliedCoupon === 'EARLYBIRD') {
    discountAmount = 5000;
  }

  const finalAmount = Math.max(1, basePriceNumber - discountAmount);

  // Handle coupon apply
  const handleApplyCoupon = (codeToApply?: string) => {
    const code = (codeToApply || couponInput).trim().toUpperCase();
    setCouponError('');
    if (code === 'AIYUG40') {
      setAppliedCoupon('AIYUG40');
      setCouponInput('');
    } else if (code === 'SCHOLAR10') {
      setAppliedCoupon('SCHOLAR10');
      setCouponInput('');
    } else if (code === 'EARLYBIRD') {
      setAppliedCoupon('EARLYBIRD');
      setCouponInput('');
    } else {
      setCouponError('Invalid coupon code. Try AIYUG40 for 40% scholarship grant.');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
  };

  // Card input formatters
  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, '').slice(0, 16);
    const formatted = raw.replace(/(\d{4})(?=\d)/g, '$1 ');
    setCardNumber(formatted);
  };

  const handleExpiryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (raw.length >= 2) {
      raw = raw.slice(0, 2) + '/' + raw.slice(2);
    }
    setCardExpiry(raw);
  };

  // Submit payment
  const handleInitiatePayment = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert('Please provide your name and email address to confirm admission.');
      return;
    }

    if (activeTab === 'card') {
      setStep('processing');
      setTimeout(() => {
        setStep('otp');
      }, 1200);
    } else {
      // UPI, Netbanking, EMI
      setStep('processing');
      setTimeout(() => {
        completePayment();
      }, 2000);
    }
  };

  const handleVerifyOtp = () => {
    setStep('processing');
    setTimeout(() => {
      completePayment();
    }, 1500);
  };

  const completePayment = () => {
    const generatedTxn = 'PAY-AIYUG-' + Math.floor(100000 + Math.random() * 900000);
    setTxnId(generatedTxn);
    setStep('success');
    onPaymentSuccess(course.id, { name, email, phone });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#070B1A]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-[#D9DFFF] overflow-hidden my-4 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div className="h-2 w-full bg-[#008CFF]" />

        {/* Modal Header */}
        <div className="px-6 py-4 sm:px-8 sm:py-5 border-b border-slate-100 flex items-center justify-between bg-white shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-[#008CFF] text-white flex items-center justify-center font-bold text-sm shadow-sm">
              <Lock className="w-4 h-4 text-white" />
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900 text-base sm:text-lg flex items-center gap-2 leading-none">
                <span>AIYUG Instant Admissions Checkout</span>
                <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                  256-Bit SSL
                </span>
              </h3>
              <p className="text-xs text-slate-500 mt-1">Official Enrollment &amp; Payment Gateway</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ===================== STEP: PROCESSING ===================== */}
        {step === 'processing' && (
          <div className="py-20 px-6 text-center flex flex-col items-center justify-center space-y-4">
            <div className="w-16 h-16 border-4 border-[#008CFF]/20 border-t-[#008CFF] rounded-full animate-spin" />
            <h4 className="text-xl font-bold text-slate-900">Connecting with Secure Payment Gateway...</h4>
            <p className="text-xs text-slate-500 max-w-sm">
              Please do not refresh or press back. We are encrypting your transaction with banking servers.
            </p>
          </div>
        )}

        {/* ===================== STEP: OTP SIMULATION (3D Secure) ===================== */}
        {step === 'otp' && (
          <div className="py-12 px-6 sm:px-12 max-w-lg mx-auto text-center space-y-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#008CFF] flex items-center justify-center mx-auto border border-blue-100">
              <ShieldCheck className="w-6 h-6" />
            </div>

            <div>
              <h4 className="text-xl font-bold text-slate-900">3D Secure Bank Verification</h4>
              <p className="text-xs text-slate-500 mt-1">
                Enter the One-Time Password (OTP) sent to your registered mobile number for card ending in **{cardNumber.slice(-4) || '4242'}.
              </p>
            </div>

            <div className="space-y-3">
              <input
                type="text"
                maxLength={6}
                value={otpCode}
                onChange={(e) => setOtpCode(e.target.value)}
                placeholder="Enter 6-digit OTP"
                className="w-full text-center tracking-[0.5em] text-2xl font-mono py-3 border border-slate-300 rounded-xl focus:outline-none focus:border-[#008CFF]"
              />

              <button
                type="button"
                onClick={() => setOtpCode('749201')}
                className="text-[11px] text-[#008CFF] font-semibold hover:underline block mx-auto cursor-pointer"
              >
                Auto-fill demo OTP (749201)
              </button>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep('checkout')}
                className="flex-1 py-3 px-4 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleVerifyOtp}
                className="btn-alyug-primary flex-1 py-3 px-4 rounded-xl font-bold text-xs text-white cursor-pointer"
              >
                Confirm &amp; Pay ₹{finalAmount.toLocaleString('en-IN')}
              </button>
            </div>
          </div>
        )}

        {/* ===================== STEP: SUCCESS ===================== */}
        {step === 'success' && (
          <div className="p-6 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-[11px] uppercase font-bold tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Payment Confirmed &bull; Admission Granted
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-3">
                Welcome to AIYUG, {name}!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-md mx-auto">
                You have successfully enrolled in <strong>{course.title}</strong>. An official invoice and batch schedule has been dispatched to <strong>{email}</strong>.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2.5">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500">Transaction ID:</span>
                <div className="flex items-center gap-1.5 font-mono font-bold text-slate-900">
                  <span>{txnId}</span>
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(txnId);
                      setCopiedTxn(true);
                      setTimeout(() => setCopiedTxn(false), 2000);
                    }}
                    className="text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    {copiedTxn ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Program:</span>
                <span className="font-bold text-slate-900">{course.title}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Duration &amp; Format:</span>
                <span className="font-semibold text-slate-700">{course.duration} &bull; {course.format}</span>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-slate-500">Total Paid (Inclusive of GST):</span>
                <span className="font-black text-emerald-700 text-sm">₹{finalAmount.toLocaleString('en-IN')}</span>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-200">
                <span className="text-slate-500">Batch Kickoff:</span>
                <span className="font-bold text-[#008CFF]">October 15, 2026 (Live Orientation)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                onClick={() => {
                  onClose();
                  if (onGoToAccount) onGoToAccount();
                }}
                className="btn-alyug-primary w-full sm:w-auto px-8 py-3 rounded-xl text-xs font-bold text-white flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Go to Student Portal &amp; Access LMS</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  alert(`Invoice #${txnId} downloaded successfully.`);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 flex items-center justify-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Official Invoice</span>
              </button>
            </div>
          </div>
        )}

        {/* ===================== STEP: CHECKOUT FORM ===================== */}
        {step === 'checkout' && (
          <form onSubmit={handleInitiatePayment} className="p-6 sm:p-8 overflow-y-auto max-h-[80vh]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Student Details & Payment Options (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* 1. Student Personal Details */}
                <div>
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                    <span>1. Candidate &amp; Certificate Information</span>
                  </h4>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name (For Certificate) *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Mobile Phone (WhatsApp Updates) *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Current City / Location
                      </label>
                      <input
                        type="text"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        placeholder="e.g. Bengaluru / Remote"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs focus:outline-none focus:border-[#008CFF]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Payment Method Selector */}
                <div className="pt-2">
                  <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-500 mb-3 flex items-center justify-between">
                    <span>2. Select Payment Mode</span>
                    <span className="text-[10px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      0% Transaction Fee
                    </span>
                  </h4>

                  {/* Tabs */}
                  <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl mb-4">
                    <button
                      type="button"
                      onClick={() => setActiveTab('upi')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        activeTab === 'upi' ? 'bg-white text-[#008CFF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Smartphone className="w-3.5 h-3.5" />
                      <span>UPI</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('card')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        activeTab === 'card' ? 'bg-white text-[#008CFF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <CreditCard className="w-3.5 h-3.5" />
                      <span>Card</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('netbanking')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        activeTab === 'netbanking' ? 'bg-white text-[#008CFF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>Net Banking</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setActiveTab('emi')}
                      className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                        activeTab === 'emi' ? 'bg-white text-[#008CFF] shadow-xs' : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5" />
                      <span>0% EMI</span>
                    </button>
                  </div>

                  {/* TAB 1: UPI */}
                  {activeTab === 'upi' && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                      <div className="flex gap-2 text-xs font-bold">
                        <button
                          type="button"
                          onClick={() => setUpiMethod('qr')}
                          className={`flex-1 py-1.5 px-3 rounded-lg border cursor-pointer ${
                            upiMethod === 'qr' ? 'bg-[#008CFF] text-white border-[#008CFF]' : 'bg-white text-slate-700 border-slate-200'
                          }`}
                        >
                          Scan QR Code
                        </button>
                        <button
                          type="button"
                          onClick={() => setUpiMethod('id')}
                          className={`flex-1 py-1.5 px-3 rounded-lg border cursor-pointer ${
                            upiMethod === 'id' ? 'bg-[#008CFF] text-white border-[#008CFF]' : 'bg-white text-slate-700 border-slate-200'
                          }`}
                        >
                          Enter UPI ID
                        </button>
                      </div>

                      {upiMethod === 'qr' ? (
                        <div className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-slate-200">
                          {/* Simulated Interactive Dynamic QR */}
                          <div className="w-32 h-32 rounded-xl bg-white p-2 border-2 border-slate-900 flex flex-col items-center justify-center shadow-xs shrink-0 relative">
                            <QrCode className="w-24 h-24 text-slate-900" />
                            <span className="text-[9px] font-black uppercase text-[#008CFF] tracking-widest mt-0.5">
                              BHIM &bull; UPI
                            </span>
                          </div>

                          <div className="text-center sm:text-left space-y-1.5">
                            <span className="text-[11px] font-bold text-slate-900 block">
                              Scan with any UPI App:
                            </span>
                            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-1.5 text-[10px] font-bold">
                              <span className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded border border-blue-200">GPay</span>
                              <span className="px-2 py-0.5 bg-purple-50 text-purple-700 rounded border border-purple-200">PhonePe</span>
                              <span className="px-2 py-0.5 bg-sky-50 text-sky-700 rounded border border-sky-200">Paytm</span>
                              <span className="px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded border border-emerald-200">Cred</span>
                            </div>
                            <p className="text-[11px] text-slate-500 pt-1">
                              Amount: <strong className="text-slate-900">₹{finalAmount.toLocaleString('en-IN')}</strong> &bull; Valid for 10:00 mins
                            </p>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold text-slate-700">
                            Enter Virtual Payment Address (VPA / UPI ID)
                          </label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={customUpiId}
                              onChange={(e) => setCustomUpiId(e.target.value)}
                              placeholder="e.g. mobile@okhdfcbank or user@paytm"
                              className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:border-[#008CFF]"
                            />
                            <button
                              type="button"
                              onClick={() => {
                                if (customUpiId.includes('@')) {
                                  alert('UPI ID Verified successfully!');
                                } else {
                                  alert('Please enter a valid UPI ID (e.g. name@upi)');
                                }
                              }}
                              className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 cursor-pointer"
                            >
                              Verify
                            </button>
                          </div>
                          <p className="text-[11px] text-slate-500">
                            A collect request will be pushed to your mobile UPI app for approval.
                          </p>
                        </div>
                      )}
                    </div>
                  )}

                  {/* TAB 2: CREDIT / DEBIT CARD */}
                  {activeTab === 'card' && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Card Number
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={cardNumber}
                            onChange={handleCardNumberChange}
                            placeholder="4532 8921 4012 9948"
                            className="w-full pl-3.5 pr-10 py-2.5 rounded-xl border border-slate-300 text-xs font-mono bg-white focus:outline-none focus:border-[#008CFF]"
                          />
                          <CreditCard className="w-4 h-4 text-slate-400 absolute right-3 top-3" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Valid Thru (MM/YY)
                          </label>
                          <input
                            type="text"
                            value={cardExpiry}
                            onChange={handleExpiryChange}
                            placeholder="12/28"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono bg-white focus:outline-none focus:border-[#008CFF]"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            CVV / CVC
                          </label>
                          <input
                            type="password"
                            maxLength={4}
                            value={cardCvv}
                            onChange={(e) => setCardCvv(e.target.value.replace(/\D/g, ''))}
                            placeholder="•••"
                            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs font-mono bg-white focus:outline-none focus:border-[#008CFF]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Name on Card
                        </label>
                        <input
                          type="text"
                          value={cardName}
                          onChange={(e) => setCardName(e.target.value)}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-xs bg-white focus:outline-none focus:border-[#008CFF]"
                        />
                      </div>

                      <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-500">
                        <Lock className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Encrypted with bank-grade 3D Secure verification</span>
                      </div>
                    </div>
                  )}

                  {/* TAB 3: NET BANKING */}
                  {activeTab === 'netbanking' && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <label className="block text-xs font-semibold text-slate-700">
                        Select Your Bank
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                        {[
                          { id: 'hdfc', label: 'HDFC Bank' },
                          { id: 'icici', label: 'ICICI Bank' },
                          { id: 'sbi', label: 'State Bank of India' },
                          { id: 'axis', label: 'Axis Bank' },
                          { id: 'kotak', label: 'Kotak Bank' },
                          { id: 'other', label: 'Other Banks' }
                        ].map((bank) => (
                          <button
                            type="button"
                            key={bank.id}
                            onClick={() => setSelectedBank(bank.id)}
                            className={`p-2.5 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                              selectedBank === bank.id
                                ? 'bg-[#008CFF] text-white border-[#008CFF] shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
                            }`}
                          >
                            {bank.label}
                          </button>
                        ))}
                      </div>
                      <p className="text-[11px] text-slate-500 pt-1">
                        You will be redirected to your bank's secure netbanking portal for authentication.
                      </p>
                    </div>
                  )}

                  {/* TAB 4: 0% EMI */}
                  {activeTab === 'emi' && (
                    <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-slate-900">Choose 0% Interest Tenure</span>
                        <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px] border border-emerald-200">
                          Instant Approval
                        </span>
                      </div>

                      <div className="space-y-2">
                        {[
                          { months: 3, label: '3 Months No-Cost EMI' },
                          { months: 6, label: '6 Months No-Cost EMI' },
                          { months: 12, label: '12 Months No-Cost EMI' }
                        ].map((plan) => {
                          const monthly = Math.round(finalAmount / plan.months);
                          return (
                            <label
                              key={plan.months}
                              className={`flex items-center justify-between p-3 rounded-xl border cursor-pointer transition-all ${
                                selectedEmiMonths === plan.months
                                  ? 'bg-blue-50 border-[#008CFF]'
                                  : 'bg-white border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <input
                                  type="radio"
                                  name="emiPlan"
                                  checked={selectedEmiMonths === plan.months}
                                  onChange={() => setSelectedEmiMonths(plan.months)}
                                  className="text-[#008CFF]"
                                />
                                <div>
                                  <div className="text-xs font-bold text-slate-900">{plan.label}</div>
                                  <div className="text-[11px] text-slate-500">0% Interest &bull; Zero processing fee</div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-xs font-extrabold text-[#008CFF]">₹{monthly.toLocaleString('en-IN')}/mo</div>
                                <div className="text-[10px] text-emerald-600 font-bold">Total ₹{finalAmount.toLocaleString('en-IN')}</div>
                              </div>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                </div>

              </div>

              {/* Right Column: Order Summary & Coupon (5 Cols) */}
              <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 sm:p-6 space-y-5">
                
                {/* Course Mini Card */}
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-slate-500">
                    Enrolling Program
                  </span>
                  <h4 className="font-extrabold text-slate-900 text-base leading-snug mt-1">
                    {course.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-slate-600">
                    <span className="font-semibold">{course.categoryName}</span>
                    <span>&bull;</span>
                    <span>{course.duration}</span>
                    <span>&bull;</span>
                    <span className="text-emerald-700 font-bold">{course.format}</span>
                  </div>
                </div>

                {/* Coupon Box */}
                <div className="pt-2 border-t border-slate-200">
                  <label className="block text-xs font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#008CFF]" />
                    <span>Have a Scholarship / Coupon Code?</span>
                  </label>

                  {appliedCoupon ? (
                    <div className="p-2.5 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2 text-emerald-800">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <div>
                          <strong className="font-mono">{appliedCoupon}</strong> Applied
                          <span className="block text-[10px] text-emerald-600 font-medium">
                            {appliedCoupon === 'AIYUG40' ? '40% Early Admission Grant' : '₹10,000 Scholar Credit'}
                          </span>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={handleRemoveCoupon}
                        className="text-xs text-rose-600 font-bold hover:underline cursor-pointer"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={couponInput}
                          onChange={(e) => setCouponInput(e.target.value)}
                          placeholder="e.g. AIYUG40"
                          className="flex-1 px-3 py-2 rounded-xl border border-slate-300 text-xs font-mono uppercase bg-white focus:outline-none focus:border-[#008CFF]"
                        />
                        <button
                          type="button"
                          onClick={() => handleApplyCoupon()}
                          className="px-4 py-2 rounded-xl bg-[#008CFF] text-white font-bold text-xs hover:bg-[#0074d9] cursor-pointer"
                        >
                          Apply
                        </button>
                      </div>

                      {/* Fast Click Voucher */}
                      <button
                        type="button"
                        onClick={() => handleApplyCoupon('AIYUG40')}
                        className="text-[11px] text-[#008CFF] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span>Click to apply 40% Scholarship (AIYUG40)</span>
                      </button>

                      {couponError && (
                        <p className="text-[11px] text-rose-600 font-medium">{couponError}</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="pt-2 border-t border-slate-200 text-xs space-y-2">
                  <div className="flex justify-between text-slate-600">
                    <span>Program Tuition:</span>
                    <span className="line-through text-slate-400">{course.originalPrice || '₹89,999'}</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>Standard Admission Fee:</span>
                    <span>₹{basePriceNumber.toLocaleString('en-IN')}</span>
                  </div>

                  {discountAmount > 0 && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Scholarship Grant ({appliedCoupon}):</span>
                      <span>- ₹{discountAmount.toLocaleString('en-IN')}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-slate-600">
                    <span>NVIDIA GPU Credits &amp; Tools:</span>
                    <span className="text-emerald-700 font-bold">FREE (Worth ₹15,000)</span>
                  </div>

                  <div className="flex justify-between text-slate-600">
                    <span>GST (18% Included):</span>
                    <span>₹{Math.round(finalAmount * 0.18 / 1.18).toLocaleString('en-IN')}</span>
                  </div>

                  <div className="flex justify-between text-slate-900 font-extrabold text-sm pt-2 border-t border-slate-200">
                    <span>Net Payable Amount:</span>
                    <span className="text-[#008CFF] text-base">₹{finalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Submit Checkout Button */}
                <button
                  type="submit"
                  className="btn-alyug-primary w-full py-3.5 px-4 rounded-xl font-bold text-xs text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-600/25 active:scale-[0.99]"
                >
                  <Lock className="w-4 h-4" />
                  <span>Confirm Admission &amp; Pay ₹{finalAmount.toLocaleString('en-IN')}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Guarantees */}
                <div className="space-y-1.5 pt-1 text-[11px] text-slate-500">
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>7-Day 100% No-Questions Refund Policy</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dual Accredited ISO &amp; University Certificate</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>Dedicated 1:1 Silicon Valley Mentor Assigned</span>
                  </div>
                </div>

              </div>

            </div>
          </form>
        )}

      </div>

    </div>
  );
};

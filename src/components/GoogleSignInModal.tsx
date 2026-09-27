import React, { useState, useEffect } from 'react';
import { X, User, Plus, Trash2, ArrowRight, ShieldCheck, Check } from 'lucide-react';

export interface GoogleAccount {
  name: string;
  email: string;
  avatarColor?: string;
}

interface GoogleSignInModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAccount: (account: { name: string; email: string }) => void;
}

const STORAGE_KEY = 'aiyug_saved_google_accounts';

export const GoogleSignInModal: React.FC<GoogleSignInModalProps> = ({
  isOpen,
  onClose,
  onSelectAccount
}) => {
  const [savedAccounts, setSavedAccounts] = useState<GoogleAccount[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);

  // Load saved accounts on mount
  useEffect(() => {
    if (isOpen) {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed)) {
            setSavedAccounts(parsed);
            if (parsed.length === 0) {
              setShowAddForm(true);
            }
          }
        } else {
          setShowAddForm(true);
        }
      } catch {
        setShowAddForm(true);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleEmailChange = (val: string) => {
    setEmailInput(val);
    setErrorMsg('');
    // Auto suggest clean name from email if name input is empty
    if (!nameInput && val.includes('@')) {
      const handle = val.split('@')[0];
      const clean = handle
        .replace(/[._]/g, ' ')
        .split(' ')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ');
      setNameInput(clean);
    }
  };

  const handleAddNewAccount = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const email = emailInput.trim();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid Google email address.');
      return;
    }

    const name = nameInput.trim() || email.split('@')[0];
    setLoading(true);

    const newAccount: GoogleAccount = {
      name: name.charAt(0).toUpperCase() + name.slice(1),
      email,
      avatarColor: '#008CFF'
    };

    // Save to stored accounts
    const existing = savedAccounts.filter(a => a.email.toLowerCase() !== email.toLowerCase());
    const updated = [newAccount, ...existing];
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {}

    setTimeout(() => {
      setLoading(false);
      onSelectAccount({ name: newAccount.name, email: newAccount.email });
      onClose();
    }, 400);
  };

  const handleChooseExisting = (acc: GoogleAccount) => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      onSelectAccount({ name: acc.name, email: acc.email });
      onClose();
    }, 300);
  };

  const handleRemoveAccount = (e: React.MouseEvent, email: string) => {
    e.stopPropagation();
    const filtered = savedAccounts.filter(a => a.email !== email);
    setSavedAccounts(filtered);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
    } catch {}
    if (filtered.length === 0) {
      setShowAddForm(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 pb-4 border-b border-slate-100 flex items-start justify-between">
          <div className="space-y-1">
            {/* Google G Logo */}
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              <span className="text-xs font-semibold text-slate-600">Google Sign-In</span>
            </div>
            <h3 className="text-base font-bold text-slate-900">
              Sign in with Google
            </h3>
            <p className="text-xs text-slate-500">
              to continue to <strong className="text-slate-700">AIYUG Academy</strong>
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-1 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 cursor-pointer"
            aria-label="Close Google sign-in dialog"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 pt-4 space-y-4">
          
          {/* Saved Accounts List */}
          {savedAccounts.length > 0 && !showAddForm && (
            <div className="space-y-2">
              <span className="text-[11px] font-semibold text-slate-500 block mb-1">
                Choose an account from this browser
              </span>

              <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                {savedAccounts.map((acc) => (
                  <div
                    key={acc.email}
                    onClick={() => handleChooseExisting(acc)}
                    className="p-3 hover:bg-slate-50 flex items-center justify-between gap-3 cursor-pointer transition-colors group"
                  >
                    <div className="flex items-center gap-3 overflow-hidden">
                      <div className="w-8 h-8 rounded-full bg-[#008CFF] text-white font-bold text-xs flex items-center justify-center shrink-0">
                        {acc.name.charAt(0).toUpperCase()}
                      </div>
                      <div className="overflow-hidden">
                        <p className="text-xs font-bold text-slate-800 truncate group-hover:text-[#008CFF]">
                          {acc.name}
                        </p>
                        <p className="text-[11px] text-slate-500 truncate">
                          {acc.email}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => handleRemoveAccount(e, acc.email)}
                      className="p-1.5 text-slate-300 hover:text-red-500 rounded-lg hover:bg-red-50 cursor-pointer shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      title="Remove from saved accounts"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Use Another Account Button */}
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(true);
                  setEmailInput('');
                  setNameInput('');
                }}
                className="w-full py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-xs font-semibold text-slate-700 flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Plus className="w-3.5 h-3.5 text-[#008CFF]" />
                <span>Use another Google account</span>
              </button>
            </div>
          )}

          {/* Add Account / Enter Custom Account Form */}
          {showAddForm && (
            <form onSubmit={handleAddNewAccount} className="space-y-3.5">
              {savedAccounts.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowAddForm(false)}
                  className="text-xs text-[#008CFF] font-semibold hover:underline flex items-center gap-1 cursor-pointer mb-1"
                >
                  &larr; Back to saved accounts
                </button>
              )}

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Enter Your Google Account Email *
                </label>
                <input
                  type="email"
                  required
                  autoFocus
                  placeholder="yourname@gmail.com"
                  value={emailInput}
                  onChange={(e) => handleEmailChange(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]"
                />
                <span className="text-[10px] text-slate-400 mt-1 block">
                  You can use your actual Gmail address (e.g. brandmiz.tech@gmail.com)
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  Full Name (As displayed on Google)
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Your Full Name"
                  value={nameInput}
                  onChange={(e) => setNameInput(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:border-[#008CFF] focus:ring-1 focus:ring-[#008CFF]"
                />
              </div>

              {errorMsg && (
                <p className="text-xs text-red-500 font-medium">{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-2.5 px-4 rounded-xl bg-[#008CFF] hover:bg-[#0074d9] text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>{loading ? 'Connecting with Google...' : 'Continue to AIYUG Academy'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

        </div>

        {/* Footer Disclaimer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-100 text-[10px] text-slate-400 text-center flex items-center justify-center gap-1.5">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span>AIYUG will securely receive your name, email, and verified avatar.</span>
        </div>

      </div>
    </div>
  );
};

import React from 'react';
import { PageId } from './Navbar';
import { MapPin, Phone, Clock, ShieldAlert } from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenReviewNotes: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenReviewNotes }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Information Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Wordmark & Identity */}
          <div className="space-y-4">
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-white">
                PREMIUM LIFE
              </span>
              <span className="text-xs font-semibold tracking-wider text-teal-400 uppercase">
                SPECIALIST HOSPITAL
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Healthcare with care and compassion. Serving patients, families, and residents of New Haven and the Enugu metropolis.
            </p>
            <div className="pt-2">
              <span className="text-[11px] text-slate-400">
                Independent concept presentation · Enugu State, Nigeria
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Website Navigation
            </h3>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  About the Hospital
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Our Medical Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="text-slate-400 hover:text-white transition-colors cursor-pointer"
                >
                  Contact & Location
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenReviewNotes}
                  className="text-teal-400 hover:text-teal-300 font-medium transition-colors cursor-pointer"
                >
                  Hospital Management Notes
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Address */}
          <div>
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Location & Contact
            </h3>
            <ul className="space-y-3 text-xs text-slate-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>
                  4 Ebenator Street,<br />
                  New Haven, Enugu,<br />
                  Enugu State, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <a
                    href="tel:+2348036611740"
                    className="text-slate-200 hover:text-teal-300 font-mono transition-colors"
                  >
                    +234 803 661 1740
                  </a>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Listed telephone · Unconfirmed draft pending verification
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="text-slate-300">Outpatient Consultation:</span>
                  <p className="text-[11px] text-slate-400">
                    Subject to hospital official schedule
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Col 4: Important Patient Notice */}
          <div className="space-y-3">
            <h3 className="text-xs font-semibold text-white uppercase tracking-wider mb-4 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-teal-400" />
              Patient Guidance
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              If you or a loved one is experiencing a critical, life-threatening medical emergency, please proceed immediately to the nearest in-person hospital emergency department.
            </p>
            <div className="p-3 bg-slate-800/80 border border-slate-700/60 rounded-lg text-[11px] text-slate-300 leading-relaxed">
              Medical advice, specific prescriptions, and diagnoses must always be received directly from a licensed healthcare provider in consultation.
            </div>
          </div>
        </div>
      </div>

      {/* Lower Footer: Legal & Disclaimer */}
      <div className="border-t border-slate-800/80 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center md:text-left">
            <p>
              © {new Date().getFullYear()} Premium Life Specialist Hospital, Enugu. Temporary wordmark and draft website concept.
            </p>
            <p className="max-w-xl text-[11px] text-slate-400">
              Disclaimer: This website is an independently created demonstration concept intended to showcase web design and user experience capabilities to hospital management. It is not an officially commissioned website.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

import React from 'react';
import { X, CheckCircle2, AlertCircle, FileCheck, Phone, MapPin, Building, ShieldCheck } from 'lucide-react';

interface ReviewNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReviewNotesModal: React.FC<ReviewNotesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="review-notes-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs"
    >
      <div className="relative w-full max-w-2xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <h2 id="review-notes-title" className="text-lg font-bold tracking-tight">
              Hospital Management Review Notes
            </h2>
            <p className="text-xs text-slate-300 mt-0.5">
              Demonstration concept documentation for Premium Life Specialist Hospital, Enugu
            </p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-700">
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg text-teal-900 text-xs leading-relaxed">
            <p className="font-semibold text-teal-950 flex items-center gap-1.5 mb-1 text-sm">
              <FileCheck className="w-4 h-4 text-teal-700" />
              Purpose of this Website Prototype
            </p>
            This website is an independently developed frontend concept crafted to demonstrate modern, clean, mobile-optimized healthcare web design for <strong>Premium Life Specialist Hospital</strong> at 4 Ebenator Street, New Haven, Enugu. It is prepared for presentation to hospital management.
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
              Verified Public Information Used
            </h3>
            <ul className="space-y-2 text-xs border border-slate-200 rounded-lg p-3 bg-slate-50">
              <li className="flex items-start gap-2">
                <Building className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Institution Name:</strong> Premium Life Specialist Hospital
                </span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Reported Address:</strong> 4 Ebenator Street, New Haven, Enugu, Enugu State, Nigeria
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                <span>
                  <strong>Publicly Listed Telephone:</strong> +234 803 661 1740 (Marked as pending final hospital confirmation)
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600" />
              Items Awaiting Official Hospital Confirmation
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 border border-slate-200 rounded-lg bg-white">
                <strong className="block text-slate-900 font-semibold mb-1">Official Hospital Logo</strong>
                Currently using a clean typographic temporary wordmark. The vector/PNG logo can replace this directly.
              </div>
              <div className="p-3 border border-slate-200 rounded-lg bg-white">
                <strong className="block text-slate-900 font-semibold mb-1">Specific Medical Specialties</strong>
                Draft clinical categories are shown. Management can specify exact resident and visiting consultant specialties.
              </div>
              <div className="p-3 border border-slate-200 rounded-lg bg-white">
                <strong className="block text-slate-900 font-semibold mb-1">Consultation & Visiting Hours</strong>
                Draft hours are indicated. Hospital can provide exact clinic schedules and weekend availability.
              </div>
              <div className="p-3 border border-slate-200 rounded-lg bg-white">
                <strong className="block text-slate-900 font-semibold mb-1">Official Email / Contact Routing</strong>
                Demonstration form runs client-side validation without sending false emails. Live inbox can be attached easily.
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-2 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              Ethical & Photography Standards
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              In strict adherence to medical communication ethics, no patient outcomes, medical director biographies, or institutional awards were fabricated. All photographs depict authentic Black Nigerian healthcare professionals and clinical environments as representative editorial imagery.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
          >
            Close Notes
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Info, ExternalLink } from 'lucide-react';

interface ConceptNoticeProps {
  onOpenReviewNotes: () => void;
}

export const ConceptNotice: React.FC<ConceptNoticeProps> = ({ onOpenReviewNotes }) => {
  return (
    <aside aria-label="Concept notice" className="bg-slate-900 text-slate-200 text-xs py-2 px-4 border-b border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" aria-hidden="true" />
          <span>
            <strong className="font-semibold text-white">Independent Demonstration Concept:</strong>{' '}
            Prepared for Premium Life Specialist Hospital, New Haven, Enugu. Unconfirmed details are presented as draft proposals.
          </span>
        </div>
        <button
          onClick={onOpenReviewNotes}
          className="text-teal-400 hover:text-teal-300 font-medium underline underline-offset-2 flex items-center gap-1 cursor-pointer whitespace-nowrap shrink-0 transition-colors"
        >
          <span>Hospital Management Review Notes</span>
          <ExternalLink className="w-3 h-3" aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
};

import React from 'react';
import { PageId } from '../components/Navbar';
import { Building2, Heart, Shield, Award, Users, Compass, Target, Sparkles, MapPin, Phone, AlertCircle, FileText } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReviewNotes: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenReviewNotes }) => {
  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      
      {/* Page Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-teal-800 font-semibold">About Us</span>
              <span aria-hidden="true">·</span>
              <span>Premium Life Specialist Hospital</span>
              <span aria-hidden="true">·</span>
              <span>New Haven, Enugu</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              About Premium Life Specialist Hospital
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Dedicated to compassionate, dependable clinical healthcare for patients and families in New Haven and the greater Enugu community.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Overview & Location Identity */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Our Hospital & Community Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
              Healthcare at 4 Ebenator Street, New Haven
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Premium Life Specialist Hospital is an established healthcare facility situated in the quiet, accessible New Haven neighbourhood of Enugu. The hospital serves as a trusted medical point for outpatient consultations, family healthcare, and clinical evaluation.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Our clinical approach focuses on attentive patient listening, thorough medical assessment, and clear communication between doctors and patients. We understand that visiting a hospital can be a stressful experience, and our staff works to ensure every patient is treated with empathy, professional respect, and prompt attention.
            </p>

            {/* Verification Notice */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 flex items-start gap-3">
              <AlertCircle className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 font-semibold mb-0.5">
                  Institutional Copy Verification Notice
                </strong>
                Official historical records, medical director profile, and founding milestones have been deliberately omitted from this demonstration concept to avoid publishing unverified claims. Hospital administration can supply the official institutional brief upon final site approval.
              </div>
            </div>
          </div>

          {/* Authentic Nigerian Medical Professionals Photo */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-white">
              <img
                src="/src/assets/images/doctor_medical_team_1791890819147.jpg"
                alt="Nigerian medical professionals collaborating in a modern hospital setting"
                className="w-full h-auto object-cover aspect-4/3"
                referrerPolicy="no-referrer"
              />
              <div className="p-4 bg-white border-t border-slate-100">
                <p className="text-xs font-medium text-slate-900">
                  Professional Care Team Collaboration
                </p>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Representative photography depicting Nigerian clinical healthcare practitioners. Editorial image for prototype preview.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Sections (Clearly marked as Draft Proposals) */}
      <section className="bg-slate-50/80 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Institutional Direction
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Mission & Vision
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Proposed institutional framework formulated for hospital management consideration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Proposed Mission Card */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                  <Target className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Draft Proposal
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Our Proposed Mission
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Awaiting formal adoption by Hospital Management
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                "To deliver accessible, high-standard, and compassionate healthcare to individuals and families across Enugu State through diligent clinical practice, patient-first attention, and respectful bedside communication."
              </p>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                Hospital administrators may adapt or substitute this text with their verified institutional mission statement.
              </div>
            </div>

            {/* Proposed Vision Card */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-2xs space-y-4 relative">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                  Draft Proposal
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Our Proposed Vision
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Awaiting formal adoption by Hospital Management
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                "To stand as a recognized benchmark of clinical integrity, trusted outpatient care, and community healthcare excellence within Enugu and the wider southeastern region of Nigeria."
              </p>

              <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-500">
                Hospital administrators may adapt or substitute this text with their verified institutional vision statement.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
              Guiding Principles
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
              Core Healthcare Values
            </h2>
            <p className="text-xs text-slate-500 mt-1 max-w-2xl">
              Proposed values reflecting universal medical ethics and respectful patient care standards.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-teal-800 mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Care & Compassion
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Approaching every patient and caregiver with warmth, genuine empathy, and respectful listening.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-teal-800 mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Clinical Diligence
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Prioritizing patient safety, thorough examinations, and careful evaluation in all treatment recommendations.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-teal-800 mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Integrity & Privacy
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Protecting patient confidentiality, practicing transparent communication, and maintaining ethical honesty.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl border border-slate-200">
              <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-teal-800 mb-4">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-2">
                Community Service
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Dedicated to improving public health and wellness within the New Haven and broader Enugu urban community.
              </p>
            </div>

          </div>

          {/* Action Box to Contact */}
          <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-900">
                Have questions or need assistance?
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Visit the hospital at 4 Ebenator Street or reach out to our team.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Contact Hospital Directly
            </button>
          </div>

        </div>
      </section>

    </div>
  );
};

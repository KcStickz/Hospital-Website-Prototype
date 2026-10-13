import React from 'react';
import { PageId } from '../components/Navbar';
import { Phone, ArrowRight, MapPin, Clock, Stethoscope, HeartPulse, Shield, Users, CheckCircle, ChevronRight, FileText } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenReviewNotes: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, onOpenReviewNotes }) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      
      {/* Hero Section: 2-column layout on desktop, stacked on mobile */}
      <section className="bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Heading, Supporting Text, Action Buttons */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Quiet Location & Status Marker (No static pill clutter) */}
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <span className="text-teal-800 font-semibold">New Haven, Enugu</span>
                <span aria-hidden="true">·</span>
                <span>Enugu State, Nigeria</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-500">Draft Concept</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15] text-balance">
                Healthcare With Care and Compassion
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Learn more about Premium Life Specialist Hospital in New Haven, Enugu, and find information about available medical services and how to contact the hospital.
              </p>

              {/* Draft Copy Subtext */}
              <p className="text-xs text-slate-500 italic">
                * Draft website copy proposed for hospital management review and verification.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shadow-xs whitespace-nowrap"
                >
                  <Phone className="w-4 h-4 text-teal-300" aria-hidden="true" />
                  <span>Contact the Hospital</span>
                </button>
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>View Our Services</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" aria-hidden="true" />
                </button>
              </div>

              {/* Quick Contact & Address Snippet */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row sm:items-center gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                  <span>4 Ebenator Street, New Haven, Enugu</span>
                </div>
                <span className="hidden sm:inline text-slate-300">|</span>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-teal-700 shrink-0" aria-hidden="true" />
                  <a href="tel:+2348036611740" className="hover:text-teal-800 font-mono font-medium">
                    +234 803 661 1740
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Authentic Photography of Nigerian Medical Professional */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200/80 bg-white group">
                <img
                  src="/src/assets/images/hero_doctor_patient_consultation_1791890817640.jpg"
                  alt="Doctor in consultation with a patient in a Nigerian clinical setting"
                  className="w-full h-auto object-cover aspect-16/10"
                  referrerPolicy="no-referrer"
                />
                <div className="p-4 bg-white border-t border-slate-100">
                  <p className="text-xs text-slate-600 font-medium">
                    Patient-Centered Medical Care
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Representative photography of Nigerian healthcare consultation. Editorial image asset for concept display.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Hospital Overview & Introduction Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Authentic Reception Photography */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-slate-200 bg-white">
              <img
                src="/src/assets/images/hospital_reception_desk_1791890818603.jpg"
                alt="Hospital reception and patient welcoming area in a Nigerian medical facility"
                className="w-full h-auto object-cover aspect-16/10"
                referrerPolicy="no-referrer"
              />
              <div className="p-3.5 bg-slate-50 border-t border-slate-200 text-[11px] text-slate-500">
                Representative photograph of clinic reception and patient reception environment.
              </div>
            </div>
          </div>

          {/* Right Column: Introduction Prose */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-5">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Hospital Introduction
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 text-balance">
                Serving the Health and Wellbeing of Families in Enugu
              </h2>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Premium Life Specialist Hospital is situated at 4 Ebenator Street in the New Haven district of Enugu. Dedicated to professional clinical standards, the hospital aims to provide patient-focused medical evaluations, preventative healthcare, and therapeutic care for individuals and families across Enugu State.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed">
              As an established community healthcare provider, our commitment focuses on treating every patient with dignity, thorough clinical evaluation, and respectful bedside manner.
            </p>

            {/* Quiet feature points without artificial pill clutter */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2.5 mb-1.5 text-slate-900 font-semibold text-sm">
                  <MapPin className="w-4 h-4 text-teal-700" />
                  <span>Accessible New Haven Location</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Conveniently situated on Ebenator Street, easily accessible from Chime Avenue and surrounding residential zones.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-200 bg-white">
                <div className="flex items-center gap-2.5 mb-1.5 text-slate-900 font-semibold text-sm">
                  <Users className="w-4 h-4 text-teal-700" />
                  <span>Dedicated Medical Staff</span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Compassionate doctors, nursing staff, and medical personnel prioritizing patient safety and attentive care.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-800 hover:text-teal-950 transition-colors cursor-pointer"
              >
                <span>Read more about the hospital and our values</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Services Preview Section */}
      <section className="bg-slate-50/70 border-y border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Medical Services
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mt-1">
                Clinical Care & Medical Services
              </h2>
              <p className="text-xs text-slate-500 mt-1 max-w-2xl">
                The categories below represent standard clinical disciplines presented as draft proposals for hospital management to review and confirm.
              </p>
            </div>

            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-900 hover:text-teal-800 cursor-pointer transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>Explore all service categories</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Card 1 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-4">
                  <Stethoscope className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  General Outpatient Consultations
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Comprehensive primary medical assessments, diagnosis of common acute ailments, routine check-ups, and coordinated specialist referrals.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] text-teal-800 font-medium">Draft Category</span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-4">
                  <HeartPulse className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Specialist Clinical Reviews
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Specialized medical consultations subject to visiting and resident specialist schedule, covering tailored diagnostic investigations.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] text-teal-800 font-medium">Pending Confirmation</span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-2xs hover:border-slate-300 transition-colors flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800 mb-4">
                  <Shield className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">
                  Preventive Health & Family Wellness
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Health screenings, blood pressure checks, diabetes monitoring, routine wellness assessments, and patient dietary counseling.
                </p>
              </div>
              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="text-[11px] text-teal-800 font-medium">Draft Category</span>
                <button
                  onClick={() => onNavigate('services')}
                  className="text-slate-700 hover:text-teal-800 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Details <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>

          {/* Hospital Management Customization Prompt */}
          <div className="mt-8 p-4 bg-white border border-slate-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-teal-700 shrink-0" />
              <span>
                <strong>For Hospital Management:</strong> Provide your approved list of resident departments and clinic days to replace these placeholder categories.
              </span>
            </div>
            <button
              onClick={onOpenReviewNotes}
              className="text-teal-800 hover:text-teal-950 font-semibold underline underline-offset-2 whitespace-nowrap cursor-pointer"
            >
              View Management Checklist
            </button>
          </div>

        </div>
      </section>

      {/* Hospital Location & Quick Contact Block */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-2xl text-white p-8 lg:p-12 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-400">
                Location & Enquiries
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-balance">
                Visit Premium Life Specialist Hospital in New Haven
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                Located on 4 Ebenator Street in New Haven, Enugu. Whether you require general consultation or wish to inquire about available clinics, our staff is prepared to assist you.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs">
                <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">Physical Address:</strong>
                    <span>4 Ebenator Street, New Haven, Enugu, Enugu State</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-slate-800/80 rounded-lg border border-slate-700/60">
                  <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white mb-0.5">Telephone Inquiry:</strong>
                    <a href="tel:+2348036611740" className="text-teal-300 hover:text-teal-200 font-mono">
                      +234 803 661 1740
                    </a>
                    <span className="block text-[11px] text-slate-400">Publicly listed number</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3 justify-center">
              <button
                onClick={() => onNavigate('contact')}
                className="w-full py-3.5 px-5 bg-teal-600 hover:bg-teal-500 text-white font-semibold text-sm rounded-lg transition-colors cursor-pointer text-center shadow-xs"
              >
                Go to Contact & Map Page
              </button>
              <a
                href="tel:+2348036611740"
                className="w-full py-3 px-5 bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-xs rounded-lg transition-colors text-center border border-slate-700"
              >
                Call Hospital Line Directly
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

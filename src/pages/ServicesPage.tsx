import React, { useState } from 'react';
import { PageId } from '../components/Navbar';
import { 
  Stethoscope, 
  Activity, 
  HeartPulse, 
  Baby, 
  FileCheck2, 
  Pill, 
  CalendarClock, 
  Info, 
  Phone, 
  Check, 
  HelpCircle,
  FileText
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
  onOpenReviewNotes: () => void;
}

interface ServiceItem {
  id: string;
  category: 'consultation' | 'diagnostics' | 'family';
  title: string;
  badge: 'Draft Placeholder' | 'Provisional Review';
  summary: string;
  scope: string[];
  pendingConfirmation: string;
  icon: React.ReactNode;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate, onOpenReviewNotes }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const servicesList: ServiceItem[] = [
    {
      id: 'general-consultation',
      category: 'consultation',
      title: 'General Medical Consultations (Outpatient)',
      badge: 'Draft Placeholder',
      summary: 'Evaluation of routine illnesses, acute symptoms, health assessments, and guided medical referrals for adult and pediatric patients.',
      scope: [
        'Vital signs examination & medical history assessment',
        'Diagnosis and management of common medical ailments',
        'Prescription review and primary therapeutic counsel',
        'Appropriate referrals to sub-specialists when indicated'
      ],
      pendingConfirmation: 'Daily consulting schedules and resident medical officer shift times.',
      icon: <Stethoscope className="w-5 h-5" />
    },
    {
      id: 'specialist-clinics',
      category: 'consultation',
      title: 'Specialist Clinical Consultations',
      badge: 'Provisional Review',
      summary: 'Targeted specialist reviews. Specific clinical disciplines remain subject to hospital management verification.',
      scope: [
        'Dedicated clinical review sessions by appointment',
        'In-depth review of diagnostic investigations',
        'Coordinated follow-up for chronic condition management'
      ],
      pendingConfirmation: 'Hospital to confirm specific specialty disciplines (e.g. Internal Medicine, Surgery, Obstetrics & Gynaecology, Paediatrics).',
      icon: <HeartPulse className="w-5 h-5" />
    },
    {
      id: 'diagnostic-tests',
      category: 'diagnostics',
      title: 'Diagnostic Investigations & Health Checks',
      badge: 'Draft Placeholder',
      summary: 'Routine bedside and clinical laboratory testing for accurate clinical decision-making.',
      scope: [
        'Blood pressure and cardiovascular screening',
        'Blood glucose and metabolic monitoring',
        'Basic point-of-care screening tests as equipped'
      ],
      pendingConfirmation: 'Hospital to confirm in-house diagnostic laboratory equipment vs external reference lab partnerships.',
      icon: <Activity className="w-5 h-5" />
    },
    {
      id: 'maternal-child',
      category: 'family',
      title: 'Maternal & Child Healthcare Support',
      badge: 'Provisional Review',
      summary: 'Foundational wellness support for expectant mothers, infants, and growing children.',
      scope: [
        'Routine antenatal guidance and counseling',
        'Child wellness check-ups and growth monitoring',
        'Nutritional and developmental advice for parents'
      ],
      pendingConfirmation: 'Hospital to confirm delivery suite facilities, immunization availability, and pediatric admission capabilities.',
      icon: <Baby className="w-5 h-5" />
    },
    {
      id: 'pharmacy-medication',
      category: 'diagnostics',
      title: 'Dispensary & Medication Guidance',
      badge: 'Draft Placeholder',
      summary: 'Dispensation of essential registered medications and patient counseling regarding proper usage and adherence.',
      scope: [
        'Prescription fulfillment for outpatient care',
        'Patient instructions on dosage and precautions',
        'Guidance on potential drug interactions'
      ],
      pendingConfirmation: 'Hospital to confirm dispensary operating hours and on-site pharmaceutical stock availability.',
      icon: <Pill className="w-5 h-5" />
    },
    {
      id: 'preventive-screenings',
      category: 'family',
      title: 'Preventive Health Check-ups',
      badge: 'Draft Placeholder',
      summary: 'Periodic health assessments tailored to identify asymptomatic conditions early and promote lifelong wellness.',
      scope: [
        'Annual baseline wellness evaluations',
        'Hypertension and diabetes lifestyle counseling',
        'Preventative health recommendations'
      ],
      pendingConfirmation: 'Hospital to confirm available structured health check packages and corporate wellness programs.',
      icon: <FileCheck2 className="w-5 h-5" />
    }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? servicesList 
    : servicesList.filter(s => s.category === selectedCategory);

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      
      {/* Page Header */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-teal-800 font-semibold">Our Services</span>
              <span aria-hidden="true">·</span>
              <span>Premium Life Specialist Hospital</span>
              <span aria-hidden="true">·</span>
              <span>Draft Proposed Catalog</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Medical & Clinical Services
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Overview of proposed clinical service categories designed for the hospital's patients in New Haven, Enugu.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Verification and Integrity Banner */}
        <div className="p-4 sm:p-5 bg-teal-50/70 border border-teal-200 rounded-xl text-teal-950 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-sm text-teal-950">
                Ethical Healthcare Verification Protocol
              </p>
              <p className="text-xs text-teal-800 mt-0.5 leading-relaxed">
                To prevent misrepresentation, we do not claim medical specialties, specialized surgical theaters, or advanced diagnostic machines until officially confirmed by hospital management. All items below are draft categories awaiting approval.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenReviewNotes}
            className="px-3.5 py-2 bg-white text-teal-900 border border-teal-300 hover:bg-teal-50 rounded-lg font-semibold text-xs transition-colors shrink-0 cursor-pointer shadow-2xs"
          >
            Review Management Checklist
          </button>
        </div>

        {/* Filter Controls (Functional button segmented controls compliant with frontend rules) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg overflow-x-auto max-w-full">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Categories ({servicesList.length})
            </button>
            <button
              onClick={() => setSelectedCategory('consultation')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === 'consultation'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Consultations
            </button>
            <button
              onClick={() => setSelectedCategory('diagnostics')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === 'diagnostics'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Diagnostics & Dispensary
            </button>
            <button
              onClick={() => setSelectedCategory('family')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap cursor-pointer transition-colors ${
                selectedCategory === 'family'
                  ? 'bg-white text-slate-900 shadow-2xs font-semibold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Family & Wellness
            </button>
          </div>

          <span className="text-xs text-slate-500">
            Showing <strong className="text-slate-800">{filteredServices.length}</strong> proposed services
          </span>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200 shadow-2xs p-6 flex flex-col justify-between hover:border-slate-300 transition-colors space-y-5"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-800">
                    {service.icon}
                  </div>
                  <span className="text-[11px] font-medium text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded-md border border-amber-200">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-slate-900 leading-snug mb-2">
                  {service.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {service.summary}
                </p>

                {/* Scope items */}
                <div className="space-y-2 mb-4 pt-2 border-t border-slate-100">
                  <p className="text-[11px] font-semibold text-slate-700 uppercase tracking-wider">
                    Proposed Scope of Care:
                  </p>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {service.scope.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Pending confirmation note */}
              <div className="pt-3 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 rounded-b-xl text-[11px] text-slate-500">
                <span className="font-semibold text-slate-700 block mb-0.5">Awaiting Hospital Input:</span>
                {service.pendingConfirmation}
              </div>
            </div>
          ))}
        </div>

        {/* Feature Spotlight: Pediatric and Maternal Care Photography */}
        <section className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Patient & Family Care Standard
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                A Welcoming Care Environment for Parents and Children
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Healthcare is deeply personal. For families visiting Premium Life Specialist Hospital, our aim is to maintain an atmosphere where parents feel heard, infants receive gentle care, and treatment instructions are explained with clear, respectful guidance.
              </p>
              <div className="p-3 bg-white border border-slate-200 rounded-lg text-xs text-slate-600">
                <strong>Hospital Inquiry:</strong> To confirm visiting hours, doctor consultations, or immunization days, contact the hospital directly at 4 Ebenator Street, New Haven.
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-xs border border-slate-200 bg-white">
                <img
                  src="/src/assets/images/community_family_care_1791890819136.jpg"
                  alt="Doctor consulting with Nigerian mother and child in consultation room"
                  className="w-full h-auto object-cover aspect-4/3"
                  referrerPolicy="no-referrer"
                />
                <div className="p-3 bg-white text-[11px] text-slate-500 border-t border-slate-100">
                  Representative photography depicting pediatric healthcare consultation in a Nigerian clinical setting.
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Bottom CTA */}
        <div className="text-center p-8 bg-white border border-slate-200 rounded-xl space-y-3">
          <h3 className="text-base font-bold text-slate-900">
            Need to Enquire About a Medical Consultation?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto">
            Reach out to our enquiry desk or visit our clinic at 4 Ebenator Street, New Haven, Enugu.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-3">
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
            >
              Contact the Hospital
            </button>
            <a
              href="tel:+2348036611740"
              className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition-colors"
            >
              Call +234 803 661 1740
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};

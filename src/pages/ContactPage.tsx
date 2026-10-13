import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Clock, 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertTriangle, 
  ShieldCheck, 
  ExternalLink,
  Navigation,
  Compass
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiryType: 'General Enquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your contact phone number.';
    } else if (!/^[0-9+() -]{7,18}$/.test(formData.phone.trim())) {
      errs.phone = 'Please enter a valid telephone number (e.g. 0803 123 4567 or +234...).';
    }

    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email format or leave this field empty.';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please write your message or enquiry.';
    } else if (formData.message.trim().length < 10) {
      errs.message = 'Please provide a message with at least 10 characters.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedData({ ...formData });
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        enquiryType: 'General Enquiry',
        message: ''
      });
      setErrors({});
    }, 400);
  };

  return (
    <div className="space-y-16 lg:space-y-20 pb-16">
      
      {/* Header Banner */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <span className="text-teal-800 font-semibold">Contact Us</span>
              <span aria-hidden="true">·</span>
              <span>Premium Life Specialist Hospital</span>
              <span aria-hidden="true">·</span>
              <span>New Haven, Enugu</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Hospital Location & Enquiries
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Find our clinic address in New Haven, access our telephone line, and review directions for your visit.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Details + Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Hospital Contact Information & Location Guide */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Hospital Address
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Premium Life Specialist Hospital
              </h2>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-slate-900">
                      Physical Location:
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      4 Ebenator Street,<br />
                      New Haven,<br />
                      Enugu, Enugu State,<br />
                      Nigeria.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Telephone Contact Section */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Telephone Contact
              </span>
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-2xs space-y-3">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-semibold text-sm text-slate-900">
                      Publicly Listed Telephone Line
                    </p>
                    <a
                      href="tel:+2348036611740"
                      className="inline-block text-base font-bold font-mono text-teal-800 hover:text-teal-950 transition-colors"
                    >
                      +234 803 661 1740
                    </a>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                      * Listed public telephone line. Please treat this number as provisional pending final confirmation from the hospital administration. Clickable tel link is provided for convenience.
                    </p>
                  </div>
                </div>
                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <a
                    href="tel:+2348036611740"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-teal-300" />
                    <span>Call Telephone Number</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Location & Directions Guide */}
            <div className="space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                Directions & Landmarks
              </span>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Compass className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">
                      Navigating to New Haven, Enugu
                    </h3>
                    <p className="leading-relaxed text-slate-600 mb-2">
                      Ebenator Street is situated within New Haven, one of the central, well-connected residential and commercial districts of Enugu metropolis.
                    </p>
                    <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                      <li>Accessible from the principal Chime Avenue thoroughfare.</li>
                      <li>Readily reachable by commercial taxis and private vehicles from Independence Layout, Ogui Road, and Coal Camp.</li>
                      <li>Look for street signage entering Ebenator Street from the main road.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Honest Disclosure regarding Email & WhatsApp */}
            <div className="p-4 bg-slate-100 rounded-xl text-xs text-slate-600 space-y-1 border border-slate-200">
              <p className="font-semibold text-slate-800">Email & Messaging Status:</p>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                No official email address or WhatsApp business line has been published by the hospital. In line with ethical requirements, none have been fabricated. Hospital management can supply verified digital communication channels for integration.
              </p>
            </div>

          </div>

          {/* Right Column: Interactive Demonstration Form */}
          <div className="lg:col-span-7 space-y-8">
            
            <div className="bg-white rounded-2xl border border-slate-200 shadow-xs p-6 sm:p-8">
              <div className="space-y-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-teal-800">
                  Concept Demonstration Form
                </span>
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  Send an Enquiry
                </h2>
                <p className="text-xs text-slate-500">
                  Demonstration form designed with field validation. See delivery notice below.
                </p>
              </div>

              {/* Status Message if Submitted */}
              {submittedData && (
                <div className="mb-6 p-4 rounded-xl bg-teal-50 border border-teal-200 text-teal-950 text-xs space-y-2 animate-in fade-in duration-200">
                  <div className="flex items-center gap-2 font-bold text-sm text-teal-900">
                    <CheckCircle2 className="w-5 h-5 text-teal-600" />
                    <span>Demonstration Form Submission Recorded</span>
                  </div>
                  <p className="text-xs leading-relaxed text-teal-800">
                    Thank you, <strong>{submittedData.fullName}</strong>. Your test input has been validated and recorded locally within this browser session.
                  </p>
                  <div className="p-3 bg-white/80 rounded-lg border border-teal-200 text-[11px] text-slate-700 space-y-1">
                    <strong className="block text-slate-900">Important Operational Notice:</strong>
                    Because this is an independent website demonstration concept with no connected hospital email dispatch server, 
                    <strong> this message has NOT been transmitted to hospital staff</strong>.
                    For real inquiries, please reach the hospital directly via phone at <a href="tel:+2348036611740" className="text-teal-800 font-bold underline">+234 803 661 1740</a> or visit 4 Ebenator Street, New Haven.
                  </div>
                  <button
                    onClick={() => setSubmittedData(null)}
                    className="text-[11px] text-teal-700 hover:text-teal-900 font-semibold underline cursor-pointer"
                  >
                    Dismiss this notice to test again
                  </button>
                </div>
              )}

              {/* The Form */}
              <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-800 mb-1">
                    Full Name <span className="text-rose-600">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Chukwuma Eze"
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                      errors.fullName ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.fullName && (
                    <p className="text-rose-600 text-xs mt-1">{errors.fullName}</p>
                  )}
                </div>

                {/* Grid: Phone + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-800 mb-1">
                      Telephone Number <span className="text-rose-600">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 0803 661 1740"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                        errors.phone ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-rose-600 text-xs mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-800 mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. name@example.com"
                      className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                        errors.email ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-rose-600 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Enquiry Type */}
                <div>
                  <label htmlFor="enquiryType" className="block text-xs font-semibold text-slate-800 mb-1">
                    Nature of Enquiry
                  </label>
                  <select
                    id="enquiryType"
                    name="enquiryType"
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-teal-700"
                  >
                    <option value="General Enquiry">General Information & Visiting Questions</option>
                    <option value="Consultation Schedule">Outpatient Clinic Schedule Verification</option>
                    <option value="Hospital Administration">Hospital Management / Administration</option>
                    <option value="Website Concept Feedback">Website Concept Demonstration Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-800 mb-1">
                    Message / Question <span className="text-rose-600">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your enquiry here. Please do not submit confidential medical diagnoses or health records."
                    className={`w-full px-3.5 py-2.5 text-sm rounded-lg border bg-white text-slate-900 transition-colors focus:outline-hidden focus:ring-2 focus:ring-teal-700 ${
                      errors.message ? 'border-rose-400 bg-rose-50/20' : 'border-slate-300'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-rose-600 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {/* Privacy & Medical Records Notice */}
                <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600 space-y-1">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-900 text-xs">
                    <ShieldCheck className="w-4 h-4 text-teal-700" />
                    <span>Privacy & Medical Ethics Notice</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-slate-500">
                    Submitted information should be handled responsibly. For your privacy and clinical safety, please do not include confidential medical diagnoses, laboratory reports, or sensitive health data in web contact forms.
                  </p>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer shadow-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5 text-teal-300" />
                    <span>{isSubmitting ? 'Validating...' : 'Submit Demonstration Enquiry'}</span>
                  </button>
                </div>

              </form>
            </div>

            {/* Embedded Map Section */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white shadow-2xs">
              <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xs text-slate-900 flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5 text-teal-700" />
                    <span>Location Map: New Haven, Enugu</span>
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Enugu metropolis, Enugu State, Nigeria
                  </p>
                </div>
                <span className="text-[11px] text-slate-500">
                  OpenStreetMap
                </span>
              </div>

              {/* Clean Map Frame */}
              <div className="w-full h-72 sm:h-80 bg-slate-100 relative">
                <iframe
                  title="Map showing New Haven, Enugu, Nigeria"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight={0}
                  marginWidth={0}
                  src="https://www.openstreetmap.org/export/embed.html?bbox=7.4950%2C6.4350%2C7.5400%2C6.4600&amp;layer=mapnik&amp;marker=6.4470%2C7.5180"
                  className="border-0 w-full h-full"
                />
              </div>

              <div className="p-3 bg-white text-[11px] text-slate-500 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                <span>Coordinates: ~6.447° N, 7.518° E · New Haven, Enugu</span>
                <a
                  href="https://www.openstreetmap.org/?mlat=6.4470&amp;mlon=7.5180#map=15/6.4470/7.5180"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-teal-800 hover:text-teal-950 font-semibold inline-flex items-center gap-1"
                >
                  <span>Open Full Map View</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
};

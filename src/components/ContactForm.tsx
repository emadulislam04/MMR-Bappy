import React, { useState } from "react";
import { Phone, Mail, Linkedin, Send, CheckCircle2, ShieldAlert, MessageSquare } from "lucide-react";
import { PERSONAL_INFO } from "../data";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !subject.trim() || !message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, Subject Line, Message)");
      return;
    }
    if (!email.includes("@") || !email.includes(".")) {
      setErrorMessage("Please enter a valid email address");
      return;
    }
    setErrorMessage("");
    setIsSubmitted(true);
    
    // Save to local storage mock log to show high fidelity execution
    const inquiries = JSON.parse(localStorage.getItem("app_inquiries") || "[]");
    inquiries.push({ name, email, subject, message, date: new Date().toISOString() });
    localStorage.setItem("app_inquiries", JSON.stringify(inquiries));
  };

  return (
    <div className="max-w-6xl mx-auto bg-[#030922]/95 rounded-3xl shadow-[0_15px_60px_rgba(5,15,64,0.18)] overflow-hidden backdrop-blur-3xl" id="contact-inquiry-container">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Column (Quick Channels - 5 Cols) - Deepest black-blue overlay */}
        <div className="lg:col-span-5 bg-[#050F40] p-8 sm:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          {/* Subtle grid mesh representation */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="space-y-8 relative z-10 w-full">
            <div className="space-y-3">
              <span className="text-[10px] font-poppins font-extrabold text-[#38bdf8] uppercase tracking-widest block">
                Direct Channels
              </span>
              <h3 className="font-sans font-black text-2xl tracking-tight text-white animate-none">
                Connect Directly
              </h3>
              <p className="text-slate-300 font-poppins text-xs leading-relaxed">
                Connect via professional channels for instantaneous costing briefs, fabric validation, or textile resource deployment.
              </p>
            </div>

            <div className="space-y-4">
              {/* Phone Line Card */}
              <a 
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group backdrop-blur-2xl"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#142D95] to-[#38bdf8] text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-poppins font-bold text-slate-400 uppercase block">Mobile Hotline</span>
                  <span className="text-xs sm:text-sm font-poppins font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    +880 1911-543922
                  </span>
                </div>
              </a>

              {/* LinkedIn Link Card */}
              <a 
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group backdrop-blur-2xl"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-[#142D95] to-[#38bdf8] text-white">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-poppins font-bold text-slate-400 uppercase block">Professional LinkedIn</span>
                  <span className="text-xs sm:text-sm font-poppins font-bold text-white group-hover:text-[#38bdf8] transition-colors">
                    Inquire on LinkedIn
                  </span>
                </div>
              </a>

              {/* WhatsApp direct connection */}
              <a 
                href="https://wa.me/8801911543922"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group backdrop-blur-2xl"
              >
                <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-600 to-emerald-400 text-white">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-poppins font-bold text-slate-400 uppercase block">Instant WhatsApp</span>
                  <span className="text-xs sm:text-sm font-poppins font-bold text-white group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp +880
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className="mt-12 pt-6 border-t border-white/10 text-[10px] font-poppins text-slate-400 relative z-10 space-y-1">
            <p>Active Hours: 08:00 AM – 10:00 PM (UTC+6)</p>
            <p>Email Reply Standard: Under 4 Hours</p>
          </div>
        </div>        {/* Right Column (Inquiry Form - 7 Cols) - White background with premium gradient colors */}
        <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-center bg-white">
          
          {isSubmitted ? (
            <div className="text-center py-10 space-y-4 animate-fade-in text-slate-800">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto shadow-sm border border-emerald-200">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-sans font-black text-xl text-slate-900 bg-gradient-to-r from-[#142D95] to-[#2563eb] bg-clip-text text-transparent">
                Inquiry Logged Successfully!
              </h4>
              <p className="text-slate-600 font-poppins text-xs sm:text-sm max-w-sm mx-auto leading-relaxed font-normal">
                Thank you for reaching out, <strong>{name}</strong>. Muhyminur has received your specification guidelines under <strong>{subject}</strong> and will connect with you directly at <strong>{email}</strong>.
              </p>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  setName("");
                  setEmail("");
                  setSubject("");
                  setMessage("");
                }}
                className="px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-poppins text-xs rounded-xl font-bold uppercase transition-colors border border-slate-200"
              >
                Draft Another Specification
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="space-y-1">
                <h4 className="font-sans font-black text-transparent bg-clip-text bg-gradient-to-r from-[#142D95] via-[#2563eb] to-[#3b82f6] text-sm uppercase tracking-wide">
                  Technical specification sheet Form
                </h4>
                <p className="text-slate-500 text-[11px] font-poppins">Submit your product requirements or request direct resume portfolio reviews.</p>
              </div>

              {errorMessage && (
                <div className="p-3.5 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl flex items-center gap-2 font-poppins">
                  <ShieldAlert className="w-4 h-4 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Stacked Inputs */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-poppins font-bold text-slate-600 uppercase">Contact Name *</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Alexander Mercer"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#142D95] focus:ring-1 focus:ring-[#142D95] transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-poppins font-bold text-slate-600 uppercase">Email Address *</label>
                    <input 
                      type="email" 
                      placeholder="e.g. alexander@retailgroup.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#142D95] focus:ring-1 focus:ring-[#142D95] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[10px] font-poppins font-bold text-slate-600 uppercase">Subject Line *</label>
                  <input 
                    type="text" 
                    placeholder="e.g. Cotton polo bulk production inquiry"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required
                    className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#142D95] focus:ring-1 focus:ring-[#142D95] transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="block text-[10px] font-poppins font-bold text-slate-600 uppercase">Project message *</label>
                <textarea 
                  rows={4}
                  placeholder="Outline fiber blend requirements (e.g., 98% Cotton 2% Elastane), target CMT margins, or job specifications here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-3.5 py-2.5 text-xs text-slate-900 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:border-[#142D95] focus:ring-1 focus:ring-[#142D95] transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-6 py-3.5 bg-gradient-to-r from-[#142D95] to-[#2563eb] hover:from-[#11257c] hover:to-[#1d4ed8] text-white font-poppins font-black text-xs rounded-lg uppercase tracking-wider transition-all duration-150 hover:translate-y-[-1px] active:translate-y-[1px] shadow-[3px_3px_0px_#050F40] border-2 border-[#050F40] focus:outline-none cursor-pointer"
              >
                <Send className="w-3.5 h-3.5 text-white" />
                <span>Send Message</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
}

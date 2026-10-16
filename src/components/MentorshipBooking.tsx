import React, { useState } from 'react';
import { 
  Users, 
  MapPin, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Send, 
  X,
  GraduationCap
} from 'lucide-react';
import { Language, MentorItem } from '../types';
import { COUNSELLORS } from '../data/cameroonData';

interface MentorshipBookingProps {
  currentLang: Language;
}

export const MentorshipBooking: React.FC<MentorshipBookingProps> = ({
  currentLang
}) => {
  const [activeMentor, setActiveMentor] = useState<MentorItem | null>(null);
  const [bookingDate, setBookingDate] = useState('2026-10-20');
  const [selectedSlot, setSelectedSlot] = useState('14:00 - 15:00');
  const [topic, setTopic] = useState('GCE / Bac Subject Combination');
  const [studentName, setStudentName] = useState('');
  const [studentPhone, setStudentPhone] = useState('+237 6');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName) return;
    setBookingSuccess(true);
  };

  const handleClose = () => {
    setActiveMentor(null);
    setBookingSuccess(false);
    setStudentName('');
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded">
            {currentLang === 'en' ? 'One-on-One Educational & Career Counselling' : 'Conseil & Orientation Personnalisée 1-sur-1'}
          </span>
          <span className="text-xs text-slate-500 font-medium">
            {currentLang === 'en' ? 'Certified MINESEC Counsellors' : 'Conseillers MINESEC & Professionnels'}
          </span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900">
          {currentLang === 'en' ? 'Book a Session with a Guidance Counsellor' : 'Prenez Rendez-vous avec un Conseiller d\'Orientation'}
        </h1>
        <p className="text-sm text-slate-600 mt-1">
          {currentLang === 'en'
            ? 'Connect directly with certified educational psychologists and industry leads in Yaoundé, Douala, Buea, and Bamenda for personalized guidance.'
            : 'Échangez en direct avec des conseillers d\'orientation agréés et des professionnels à Yaoundé, Douala, Buea et Bamenda.'}
        </p>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {COUNSELLORS.map((mentor) => (
          <div
            key={mentor.id}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all flex flex-col justify-between space-y-5"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-emerald-400 font-bold flex items-center justify-center text-lg shadow-inner">
                  {mentor.name.slice(0, 2)}
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900 leading-tight">
                    {mentor.name}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{mentor.city}, Cameroon</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs font-semibold text-slate-800 block">
                  {currentLang === 'en' ? mentor.titleEn : mentor.titleFr}
                </span>
                <span className="text-xs text-slate-500 block">
                  {mentor.organization}
                </span>
              </div>

              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-100 space-y-2 text-xs">
                <div>
                  <span className="font-bold text-slate-700 block text-[11px] uppercase tracking-wider">
                    {currentLang === 'en' ? 'Key Specialization:' : 'Spécialité Principale :'}
                  </span>
                  <p className="text-slate-600 mt-0.5">
                    {mentor.specialization}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-200/60 flex items-center justify-between text-slate-500">
                  <span>{mentor.yearsExperience} {currentLang === 'en' ? 'yrs experience' : 'ans d\'expérience'}</span>
                  <span>{mentor.languages.join(' · ')}</span>
                </div>
              </div>
            </div>

            <div>
              <div className="text-xs text-slate-500 mb-3 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{mentor.availability}</span>
              </div>
              <button
                onClick={() => setActiveMentor(mentor)}
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
              >
                <Calendar className="w-4 h-4" />
                <span>{currentLang === 'en' ? 'Book 1-on-1 Guidance Session' : 'Réserver une Séance'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {activeMentor && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative space-y-6">
            <button
              onClick={handleClose}
              className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {!bookingSuccess ? (
              <form onSubmit={handleBook} className="space-y-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider">
                    {currentLang === 'en' ? 'Session Scheduling' : 'Planification de Séance'}
                  </span>
                  <h2 className="text-lg font-bold text-slate-900 mt-1">
                    {currentLang === 'en' ? `Book Session with ${activeMentor.name}` : `Rendez-vous avec ${activeMentor.name}`}
                  </h2>
                  <p className="text-xs text-slate-500">
                    {activeMentor.city} · {activeMentor.organization}
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {currentLang === 'en' ? 'Full Name (Student or Parent):' : 'Nom Complet (Élève ou Parent) :'}
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder="e.g. Samuel Nkwenti / Mme. Kouam"
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {currentLang === 'en' ? 'Cameroon Phone / WhatsApp Number:' : 'Numéro Téléphone / WhatsApp au Cameroun :'}
                    </label>
                    <input
                      type="text"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder="+237 6..."
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {currentLang === 'en' ? 'Preferred Date:' : 'Date Souhaitée :'}
                      </label>
                      <input
                        type="date"
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-slate-700 block mb-1">
                        {currentLang === 'en' ? 'Time Slot:' : 'Créneau Horaire :'}
                      </label>
                      <select
                        value={selectedSlot}
                        onChange={(e) => setSelectedSlot(e.target.value)}
                        className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                      >
                        <option value="10:00 - 11:00">10:00 - 11:00</option>
                        <option value="14:00 - 15:00">14:00 - 15:00</option>
                        <option value="16:00 - 17:00">16:00 - 17:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-slate-700 block mb-1">
                      {currentLang === 'en' ? 'Primary Discussion Topic:' : 'Sujet Principal à Aborder :'}
                    </label>
                    <select
                      value={topic}
                      onChange={(e) => setTopic(e.target.value)}
                      className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                    >
                      <option value="GCE / Bac Subject Combination">GCE / Baccalauréat Subject Combination</option>
                      <option value="Concours Preparation Strategy">Concours Preparation (ENSPY, FHS, ESSEC)</option>
                      <option value="Technical to Higher Ed Transition">Technical & Vocational Series Transition</option>
                      <option value="University Admission Dossier Review">University Admission Dossier Review</option>
                    </select>
                  </div>
                </div>

                <div className="pt-3 flex justify-end gap-2">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50"
                  >
                    {currentLang === 'en' ? 'Cancel' : 'Annuler'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>{currentLang === 'en' ? 'Confirm Appointment' : 'Confirmer le Rendez-vous'}</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4 space-y-4">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    {currentLang === 'en' ? 'Guidance Session Scheduled!' : 'Séance d\'Orientation Confirmée !'}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-sm mx-auto">
                    {currentLang === 'en'
                      ? `Thank you ${studentName}. An SMS reminder and Google Meet invitation will be sent to ${studentPhone}.`
                      : `Merci ${studentName}. Une confirmation SMS et un lien Google Meet ont été envoyés au ${studentPhone}.`}
                  </p>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-left space-y-1.5 text-slate-700">
                  <div><strong>Counsellor:</strong> {activeMentor.name}</div>
                  <div><strong>Date & Time:</strong> {bookingDate} at {selectedSlot}</div>
                  <div><strong>Topic:</strong> {topic}</div>
                </div>

                <button
                  onClick={handleClose}
                  className="px-6 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                >
                  {currentLang === 'en' ? 'Done' : 'Terminer'}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

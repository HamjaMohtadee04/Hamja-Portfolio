'use client';

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  // REPLACE "YOUR_FORM_ID" WITH YOUR ACTUAL ID FROM FORMSPREE
  const [state, handleSubmit] = useForm("https://formspree.io/f/xykkkbdl");

  if (state.succeeded) {
      return (
        <div className="bg-emerald-900/30 border border-emerald-500/50 text-emerald-400 px-4 py-4 rounded-lg text-center">
            <strong className="font-bold text-lg">System Message Received.</strong>
            <p className="mt-1">I will acknowledge your transmission shortly.</p>
        </div>
      );
  }

  return (
      <form onSubmit={handleSubmit} className="w-full space-y-4">
      
      <div>
        <label htmlFor="email" className="block text-slate-400 text-sm font-bold mb-2 font-mono uppercase tracking-wider">
          /user/email
        </label>
        <input
          id="email"
          type="email" 
          name="email"
          placeholder="recruiter@company.com"
          className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-mono"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <div>
        <label htmlFor="message" className="block text-slate-400 text-sm font-bold mb-2 font-mono uppercase tracking-wider">
          /user/message
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Initiating contact regarding QA opportunity..."
          className="w-full bg-slate-950 border border-slate-700 rounded p-3 text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition font-mono"
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs mt-1" />
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 rounded transition shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] uppercase tracking-widest text-sm"
      >
        {state.submitting ? 'Transmitting...' : 'Send Transmission'}
      </button>
    </form>
  );
}
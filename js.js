import React, { useState } from 'react';
import { Phone, MessageCircle, Search, MapPin, CheckCircle, Home, Menu } from 'lucide-react';

const AddohaWebsite = () => {
  const [activeCity, setActiveCity] = useState('Casablanca');

  return (
    <div className="font-sans bg-white text-slate-900">
      {/* --- STICKY HEADER --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold tracking-tighter text-blue-900">
          ADDOHA<span className="text-amber-500">.</span>
        </div>
        <div className="hidden md:flex space-x-8 font-medium text-sm uppercase tracking-widest">
          <a href="#" className="hover:text-amber-600 transition">Projects</a>
          <a href="#" className="hover:text-amber-600 transition">High Standing</a>
          <a href="#" className="hover:text-amber-600 transition">Financing</a>
        </div>
        <div className="flex items-center gap-4">
          <button className="bg-amber-500 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-amber-600 transition shadow-lg shadow-amber-200">
            BOOK A VISIT
          </button>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/api/placeholder/1920/1080" 
            alt="Modern Moroccan Apartment" 
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="text-4xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
            Find Your Ideal Home in <span className="text-amber-400">Morocco</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Affordable, modern, and luxury housing tailored to your lifestyle. Join 200,000+ happy Moroccan families.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-slate-100 transition">
              <Home className="w-5 h-5" /> View Projects
            </button>
            <button className="bg-green-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-green-600 transition shadow-xl">
              <MessageCircle className="w-5 h-5" /> Chat on WhatsApp
            </button>
          </div>
        </div>
      </section>

      {/* --- QUICK SEARCH FILTER --- */}
      <section className="relative z-20 -mt-12 px-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-2xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4 items-end border border-slate-100">
          <div>
            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">City</label>
            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500">
              <option>Casablanca</option>
              <option>Marrakech</option>
              <option>Rabat</option>
              <option>Tangier</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Property Type</label>
            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500">
              <option>Economy Apartment</option>
              <option>Middle Standing</option>
              <option>Luxury Villa</option>
            </select>
          </div>
          <div>
            <label className="text-xs font-bold uppercase text-slate-400 mb-2 block">Budget Max</label>
            <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-amber-500">
              <option>300,000 MAD</option>
              <option>700,000 MAD</option>
              <option>1,500,000 MAD+</option>
            </select>
          </div>
          <button className="w-full bg-blue-900 text-white p-4 rounded-lg font-bold hover:bg-blue-800 transition flex items-center justify-center gap-2">
            <Search className="w-5 h-5" /> SEARCH
          </button>
        </div>
      </section>

      {/* --- FEATURED PROJECTS --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-blue-900 mb-2">Exclusive Launches</h2>
            <p className="text-slate-500">Explore our newest residential complexes</p>
          </div>
          <a href="#" className="text-amber-600 font-bold border-b-2 border-amber-600 pb-1 uppercase text-sm tracking-widest">See All</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-2xl mb-4">
                <div className="absolute top-4 left-4 z-10 bg-amber-500 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">
                  Limited Units
                </div>
                <img 
                  src={`/api/placeholder/600/450`} 
                  alt="Project" 
                  className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-blue-900">Les Portes de Casa</h3>
                  <div className="flex items-center text-slate-400 text-sm mt-1">
                    <MapPin className="w-4 h-4 mr-1" /> Sidi Maârouf, Casablanca
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block uppercase">Starting from</span>
                  <span className="text-lg font-black text-amber-600">250,000 MAD</span>
                </div>
              </div>
              <button className="w-full mt-4 border border-slate-200 py-3 rounded-xl font-bold group-hover:bg-blue-900 group-hover:text-white transition">
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY CHOOSE ADDOHA (TRUST) --- */}
      <section className="py-20 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img src="/api/placeholder/800/800" className="rounded-3xl shadow-2xl" alt="Trust" />
            <div className="absolute -bottom-6 -right-6 bg-blue-900 text-white p-8 rounded-2xl hidden md:block">
              <p className="text-4xl font-black mb-1">30+</p>
              <p className="text-sm font-light opacity-80">Years of Building Dreams</p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-8 leading-tight">Morocco’s Most Trusted Developer</h2>
            <div className="space-y-6">
              {[
                { title: "Thousands of Homes Delivered", desc: "A track record of excellence in every city." },
                { title: "Strategic Locations", desc: "Proximity to transport, schools, and workplaces." },
                { title: "Financing Assistance", desc: "Direct partnerships with major Moroccan banks." }
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <CheckCircle className="w-6 h-6 text-amber-500 shrink-0" />
                  <div>
                    <h4 className="font-bold text-lg text-blue-900">{feature.title}</h4>
                    <p className="text-slate-500">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- WHATSAPP STICKY --- */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="absolute -top-12 right-0 bg-white px-3 py-1 rounded-lg shadow-md text-xs font-bold whitespace-nowrap animate-bounce">
          Questions? Chat with us! 👋
        </div>
        <button className="bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition transform">
          <MessageCircle className="w-8 h-8" />
        </button>
      </div>
    </div>
  );
};

export default AddohaWebsite;
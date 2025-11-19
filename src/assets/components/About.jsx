// src/components/About.jsx
import React from "react";
import aboutImg from "../../assets/about-tree.jpg";

export default function About() {
  return (
    <section className="w-full px-6 py-20 bg-[#f5efe8]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-light text-[#4e3f36] mb-6 tracking-tight">
            Rooted in Calm,  
            <span className="block mt-1 text-[#7b6656]">Guided by Presence</span>
          </h2>

          <p className="text-[#6d5d53] leading-relaxed text-lg md:text-xl">
            Our studio is inspired by natural rhythms, slow living, and grounded
            wellness. Every practice invites softness, deep rest, and intentional
            movement — helping you reconnect with your breath, your body, and 
            your inner stillness.
          </p>
        </div>

        {/* Image */}
       <div className="relative">
  <div className="absolute inset-0 bg-[#e8ded6] rounded-xl blur-xl opacity-40"></div>
  <img
    src={aboutImg}
    alt="Wellness studio"
    className="relative rounded-xl w-full px-4 py-4 object-cover shadow-xl"
  />
</div>


      </div>
    </section>
  );
}

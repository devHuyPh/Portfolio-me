import React from 'react'
import TitleHearder from '../components/TitleHearder';
import { testimonials } from '../constants';
import GlowCard from '../components/GlowCard';

const Testimonials = () => {
  return (
    <div>
      <section id="testimonials" className="flex-center section-padding">
        <div className="w-full h-full md:px-10 px-5">
          <TitleHearder
            title="What People Say About Me"
            sub="💬 Client Feedback  Highlings"
          />

          <div className="lg:columns-3 md:columns-2 columns-1 mt-16">
            {testimonials.map(({ imgPath, name, mentions, review }) => (
              <GlowCard key={name} card={{ review }}>
                <div className="flex items-center gap-3">
                  <div>
                    <img src={imgPath} alt={name} />
                  </div>
                  <div>
                    <p className="font-bold">{name}</p>
                    <p className="text-white-50">{mentions}</p>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonials

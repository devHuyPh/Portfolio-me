import React from "react";
import TitleHearder from "../components/TitleHearder";
import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";

const ExperienceSection = () => {
  return (
    <div>
      <section
        id="experience"
        className="w-full md:mt-40 mt-20 selection-[padding xl:px-0"
      >
        <div className="w-full h-full md:px-20 px-5">
          <TitleHearder
            title="Professional Work Experience"
            sub="💼 My Career Overview"
          />

          <div className="mt-32 relative">
            <div className="relative z-50 xs:space-y-32 space-y-10">
              {expCards.map((card, index) => (
                <div key={card.title} className="exp-card-wrapper">
                  <div className="xl:w-2/6">
                    <GlowCard card={card} index={index}>
                      <div>
                        <img src={card.imgPath} alt={card.title} />
                      </div>
                    </GlowCard>
                  </div>

                  <div className="xl:w-4/6">
                    <div className="flex items-start">
                      <div></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperienceSection;

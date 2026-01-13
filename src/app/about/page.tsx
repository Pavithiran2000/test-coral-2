"use client";

import * as React from "react";
import { useState, useEffect } from "react"; 

import {
  AboutHeroWrap,
  AboutHeroTitle,
  AboutHeroFrame,
  AboutHeroImg,
  AboutHeroOverlay,
  AboutHeroSkeleton,         
  AboutMVImageSkeleton,
  AboutBuildingImageSkeleton,
  AboutPortraitSkeleton,
  AboutBodyWrap,
  AboutBodyTitle,
  AboutBodyParas,
  AboutPara,
  MVWrap,
  MVImageBox,
  MVImage,
  MVRight,
  MVRow,
  MVStem,
  StemTop,
  StemLine,
  StemBottom,
  StemDot,
  MVTitle,
  MVCard,
  StatsWrap,
  StatCard,
  StatTop,
  StatNum,
  StatPlus,
  StatTitle,
  StatDesc,
  StatDivider,
  VisionImage,
  VisionImageFrame,
  VIntro,
  VLeft,
  VHeading,
  VisionariesWrap,
  VChairmanDesc,
  VPortrait,
  VPortraitCircle,
  VRight,
  VRole,
  VPerson,
  VChairmanDegree,
  VChairmanDisplayName,
  VDegreeLine,
  VLeftList,
  MobileTeamList,
  VListRow,
} from "../components/About.styles";

type LeaderId = "pirabaharan" | "vasiharan" | "nirogini" | "srikaran";
type ActiveLeaderId = LeaderId;

const LEADERS: Record<
  LeaderId,
  {
    id: LeaderId;
    name: string;
    role: string;
    bio: React.ReactNode;
    degree: React.ReactNode;
    image: string;
  }
> = {
  pirabaharan: {
    id: "pirabaharan",
    name: "Dr. S. Pirabaharan",
    role: "Chairman",
    bio: (
      <>
        Visionary leader with a deep understanding of strategic development{" "}
        and sustainable growth. Oversees corporate direction and ensures{" "}
        excellence across all projects.
      </>
    ),
    degree: "BVSc",
    image: "/Chairman/Mr.S.Pirabaharan.png",
  },
  vasiharan: {
    id: "vasiharan",
    name: "Mr. S. Vasiharan",
    role: "Managing Director",
    bio: (
      <>
        Expert in engineering and project management, responsible for
        operational excellence and maintaining the highest standards in design{" "}
        and construction.
      </>
    ),
    degree: (
      <>
        B.Eng, AMIE, A.M.ASCE
      </>
    ),
    image: "/Chairman/Mr.%20S.%20Vasiharan.png",
  },
  nirogini: {
    id: "nirogini",
    name: "Ms. S. Nirogini",
    role: "Director",
    bio: (
      <>
        Drives innovation and technology integration across the company,
        ensuring modern solutions for property management and client{" "}
        engagement.
      </>
    ),
    degree: (
      <>
        BSc Hons Computing,
        <br />
        Eng. Tech MBA
      </>
    ),
    image: "/Chairman/Ms.%20S.%20Nirogini.png",
  },
  srikaran: {
    id: "srikaran",
    name: "Mr. A. Srikaran",
    role: "Director",
    bio: (
      <>
        Focuses on strategic business growth, investment planning, and
        expanding Coral Properties’ footprint locally and internationally.
      </>
    ),
    degree: (
      <>
        BSc Eng Hons
      </>
    ),
    image: "/Chairman/Mr.%20A.%20Srikaran.png",
  },
};

export default function AboutPage() {
  const [activeId, setActiveId] = React.useState<ActiveLeaderId>("pirabaharan");
  const activeLeader = LEADERS[activeId];

  const handleClick = (id: LeaderId) => {
    if (activeId !== id) {
      setActiveId(id);
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AboutHeroWrap>
        <AboutHeroTitle>About Us</AboutHeroTitle>

        <AboutHeroFrame>
          {isLoading ? (
            <AboutHeroSkeleton />
          ) : (
            <>
              <AboutHeroImg
                src="/Background/ViewImage.png"
                alt="About hero"
                width={1280}
                height={350}
                priority
              />
              <AboutHeroOverlay />
            </>
          )}
        </AboutHeroFrame>

        <AboutBodyWrap>
          <AboutBodyTitle>
            Welcome to Coral – Experience Modern Living
          </AboutBodyTitle>

          <AboutBodyParas>
            <AboutPara>
              At Coral, we believe that great spaces make great lives. Based in Colombo, our internationally 
              owned property development company creates distinctive homes and mixed‑use developments across 
              Sri Lanka and overseas. With a portfolio spanning super luxury apartments, and retail complexes, 
              we deliver exceptional quality and value to every homeowner and investor.
            </AboutPara>

            <AboutPara>
              Beyond property development, we manage essential services that enhance daily living. Our Coral 
              Water service delivers pure, reliable drinking water, while Coral Constructions brings years of 
              engineering expertise to every project, ensuring safety, durability and beautiful design. Our goal 
              is not just to build structures, but to shape vibrant communities where convenience, comfort and 
              style come together.
            </AboutPara>

            <AboutPara>
              Driven by innovation and a passion for excellence, Coral is committed to sustainable building 
              practices and customer satisfaction. We invite you to discover how our projects - and our people 
              - can help you live the life you’ve always dreamed of.
            </AboutPara>
          </AboutBodyParas>

          <MVWrap>
            <MVImageBox>
              {isLoading ? (
                <AboutMVImageSkeleton />
              ) : (
                <MVImage
                  src="/products/MissionVision.jpg"
                  alt="Mission / Vision"
                  width={480}
                  height={550}
                  priority
                />
              )}
            </MVImageBox>

            <MVRight>
              <MVRow>
                <MVStem>
                  <StemTop />
                  <StemLine />
                  <StemDot />
                  <StemBottom />
                </MVStem>
                <div>
                  <MVTitle>Our Mission</MVTitle>
                  <MVCard>
                    We believe in building housing solutions where people live, love, work and play. The Coral way of life
                    will support the way children grow up, and pursue their dreams. The convenience in locations selected
                    will make an impression of a homemaker in society. We believe in giving you and your family the good life!
                  </MVCard>
                </div>
              </MVRow>

              <MVRow>
                <MVStem>
                  <StemTop />
                  <StemLine />
                  <StemDot />
                  <StemBottom />
                </MVStem>
                <div>
                  <MVTitle>Our Vision</MVTitle>
                  <MVCard>
                    Be the first international niche apartment developer in Sri Lanka to continuously innovate in providing
                    housing solutions to the discerning lifestyle of a homemaker and extend thefootprint globally.
                  </MVCard>
                </div>
              </MVRow>
            </MVRight>
          </MVWrap>

          <StatsWrap>
            <StatCard>
              <StatTop>
                <StatNum>8</StatNum>
                <StatPlus>+</StatPlus>
              </StatTop>
              <StatTitle>Completed Projects</StatTitle>
              <StatDesc>
                Successfully delivered 8 niche developments across Colombo and other prime locations.
              </StatDesc>
            </StatCard>

            <StatDivider />

            <StatCard>
              <StatTop>
                <StatNum>300</StatNum>
                <StatPlus>+</StatPlus>
              </StatTop>
              <StatTitle>Satisfied Clients</StatTitle>
              <StatDesc>
                Over 300 families and investors trust our developments for quality and reliability.
              </StatDesc>
            </StatCard>

            <StatDivider />

            <StatCard>
              <StatTop>
                <StatNum>20</StatNum>
                <StatPlus>+</StatPlus>
              </StatTop>
              <StatTitle>Years of Expertise</StatTitle>
              <StatDesc>
                Operating since 2003, combining local market knowledge with premium real estate solutions.
              </StatDesc>
            </StatCard>
          </StatsWrap>

          <VisionImageFrame>
            {isLoading ? (
              <AboutBuildingImageSkeleton />
            ) : (
              <VisionImage
                src="/products/Building.jpg"
                alt="Coral Properties building"
                width={1200}
                height={500}
                priority
              />
            )}
          </VisionImageFrame>

          <VisionariesWrap>
            <VLeft>
              <VHeading>Meet Our Visionaries</VHeading>
              <VIntro>
                Our leadership team combines expertise, innovation, and a passion for excellence, guiding Coral Properties
                to deliver landmark developments and exceptional client experiences
              </VIntro>

              <VLeftList>
                {Object.values(LEADERS).map((leader) => {
                  const isActive = leader.id === activeId;
                  return (
                    <React.Fragment key={leader.id}>
                      <VListRow
                        type="button"
                        data-active={isActive ? "true" : "false"}
                        onClick={() => handleClick(leader.id)}
                      >
                        <VPerson data-active={isActive ? "true" : "false"}>
                          {leader.name}
                        </VPerson>
                        <VRole data-active={isActive ? "true" : "false"}>
                          {leader.role}
                        </VRole>
                      </VListRow>

                      {isActive && (
                        <>
                          <VChairmanDesc>{leader.bio}</VChairmanDesc>
                          <VDegreeLine />
                        </>
                      )}
                    </React.Fragment>
                  );
                })}
              </VLeftList>
            </VLeft>

            <VRight>
              <VPortraitCircle>
                {isLoading ? (
                  <AboutPortraitSkeleton />
                ) : (
                  <VPortrait
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    width={220}
                    height={220}
                    priority
                  />
                )}
              </VPortraitCircle>
              <VChairmanDisplayName>
                {activeLeader.name}
              </VChairmanDisplayName>
              <VChairmanDegree>{activeLeader.degree}</VChairmanDegree>
            </VRight>

            <MobileTeamList>
              {Object.values(LEADERS).map((leader) => {
                const isActive = leader.id === activeId;
                return (
                  <React.Fragment key={leader.id}>
                    <VListRow
                      type="button"
                      data-active={isActive ? "true" : "false"}
                      onClick={() => handleClick(leader.id)}
                    >
                      <VPerson data-active={isActive ? "true" : "false"}>
                        {leader.name}
                      </VPerson>
                      <VRole data-active={isActive ? "true" : "false"}>
                        {leader.role}
                      </VRole>
                    </VListRow>

                    {isActive && (
                      <>
                        <VChairmanDesc>{leader.bio}</VChairmanDesc>

                        <VPortraitCircle>
                          {isLoading ? (
                            <AboutPortraitSkeleton />
                          ) : (
                            <VPortrait
                              src={leader.image}
                              alt={leader.name}
                              width={220}
                              height={220}
                              priority
                            />
                          )}
                        </VPortraitCircle>
                        <VChairmanDisplayName>
                          {leader.name}
                        </VChairmanDisplayName>
                        <VChairmanDegree>{leader.degree}</VChairmanDegree>
                        <VDegreeLine />
                      </>
                    )}
                  </React.Fragment>
                );
              })}
            </MobileTeamList>
          </VisionariesWrap>
        </AboutBodyWrap>
      </AboutHeroWrap>
    </>
  );
}

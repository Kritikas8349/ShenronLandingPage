import React, { useEffect, useRef, useState } from "react";
import {
  FaChartLine,
  FaBolt,
  FaRobot,
  FaShieldAlt,
  FaHeadset,
  FaGraduationCap,
} from "react-icons/fa";
import "./ForexHero.css";
import EnquiryForm from "./EnquiryForm";


import heroImg1 from "../assets/heroImg1.png";
import heroImg from "../assets/heroImg.png";

import avatar1 from "../assets/avatar1.png";
import avatar2 from "../assets/avatar2.png";
import avatar3 from "../assets/avatar3.png";
import avatar4 from "../assets/avatar4.png";


import logo from "../assets/shenron-logo.png";
import shenronVid from "../assets/Shenron-Global-Video.mp4";

const ForexHero = () => {
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);

  const handleEnquiryClick = () => {
    setIsEnquiryOpen(true);
  };

  const closeEnquiry = () => {
    setIsEnquiryOpen(false);
  };

  const faqData = [
    {
      question: "What’s the minimum I can start with?",
      answer:
        "We recommend a minimum starting equity of $1,000 for our services. You may join with any amount, but some services (copy trading, portfolio mandates) have higher suggested minimums for effective risk management.",
    },
    {
      question: "How much are your charges?",
      answer:
        "Our core signal plans are tiered (Essentials, Pro, Elite). Signals pricing, copy trading access and portfolio management fees are listed on the Pricing page. Portfolio management typically uses an AUM fee + optional performance fee; copy trading can use a subscription or performance-fee model.",
    },
    {
      question: "Do you have any additional charges?",
      answer:
        "No, all fees are disclosed before purchase.",
    },
    {
      question: "How will I receive your service?",
      answer:
        "Choose delivery channels in your account: web feed, email alerts, Telegram private channel, app push notifications, and SMS (optional). Premium subscribers get priority channels and real-time alerts.",
    },
    {
      question: "Which payment methods do you accept?",
      answer:
        "We accept major credit/debit cards, SEPA/ACH transfers where supported, and crypto payments for certain plans. Payment options are shown at checkout; corporate wire and invoicing are available for institutional clients.",
    },
  ];

  const testimonialSets = [
    [
      {
        name: "James Anderson",
        role: "Forex Trader",
        text: "The way the concepts were explained made market structure much easier to understand. I finally have a clear process before entering a trade.",
        rating: 5
      },
      {
        name: "Michael Carter",
        role: "Crypto Trader",
        text: "The sessions helped me understand risk management and stop taking random trades. The practical examples were the most useful part.",
        rating: 5
      },
      {
        name: "Daniel Williams",
        role: "Part-Time Trader",
        text: "I had watched a lot of trading content before, but this gave me a structured approach that I could actually follow.",
        rating: 5
      }
    ],
    [
      {
        name: "Alexander Miller",
        role: "Forex Trader",
        text: "The live market breakdowns were extremely helpful. I now understand what to look for instead of entering trades based on emotions.",
        rating: 5
      },
      {
        name: "Oliver Bennett",
        role: "Swing Trader",
        text: "Simple explanations, practical examples and a much better understanding of risk. Definitely improved the way I look at the market.",
        rating: 5
      },
      {
        name: "Lucas Moreau",
        role: "Beginner Trader",
        text: "I was completely confused about where to start. The structured sessions gave me a proper foundation and direction.",
        rating: 5
      }
    ],
    [
      {
        name: "Ethan Wilson",
        role: "Forex Trader",
        text: "The biggest difference for me was learning how to wait for confirmation instead of forcing trades. My approach is much more disciplined now.",
        rating: 5
      },
      {
        name: "Leon Schmidt",
        role: "Crypto Trader",
        text: "The concepts were explained without making them unnecessarily complicated. The practical trading examples made everything easier to connect.",
        rating: 5
      },
      {
        name: "Ryan Mitchell",
        role: "Market Learner",
        text: "A very useful learning experience for anyone who wants to understand trading properly instead of chasing quick profits.",
        rating: 5
      }
    ]
  ];


  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const curriculum = [
    {
      number: "1",
      day: "DAY 1",
      title: "Market Foundations + Price Action",
      points: [
        "Understand how Forex, Crypto, Indices & Commodities move",
        "Learn market structure and price action basics",
        "Identify trends, support, resistance and key levels",
      ],
    },
    {
      number: "2",
      day: "DAY 2",
      title: "Technical Analysis + Trading Strategy",
      points: [
        "Learn practical chart analysis and trade setups",
        "Understand entries, exits and market confirmations",
        "Explore technical tools used across different markets",
      ],
    },
    {
      number: "3",
      day: "DAY 3",
      title: "Risk Management + Trading Psychology",
      points: [
        "Build a structured approach to risk management",
        "Understand position sizing and trade planning",
        "Develop discipline and a rules-based trading process",
      ],
    },
  ];

  const packages = [
    {
      icon: "◈",
      title: "SMC Concept",
      price: "$199",
      description:
        "A compact intensive for traders who want a clean Smart Money structure and guided practice.",
      features: [
        "2-week intensive + practice period",
        "SMC recorded lectures for lifetime",
        "Live breakdowns and executions",
        "Research panel access",
      ],
    },
    {
      icon: "◈",
      title: "ICT Concept",
      price: "$299",
      description:
        "A focused ICT track for traders who want to understand smart-money behavior with live chart work.",
      features: [
        "1 month of structured ICT training",
        "ICT recordings for lifetime",
        "Real-time ICT trading sessions",
        "24/5 CMT & CFA-led support",
      ],
    },
    {
      icon: "◈",
      title: "Elite Trader",
      price: "$2,999",
      description:
        "The complete 3-month private mentorship for traders ready to rebuild their full decision process.",
      features: [
        "≈45 private 1:1 sessions",
        "ICT, SMC, fundamentals, sentiment and psychology",
        "Lifetime recording and research access",
        "Premium market-hours support",
      ],
    },
  ];


  const offers = [
    {
      icon: <FaChartLine />,
      title: "Multi-Asset Trading",
      description:
        "Trade Forex, Crypto, Commodities & Global Indices in one secure platform.",
    },
    {
      icon: <FaBolt />,
      title: "Lightning-Fast Execution",
      description:
        "Ultra-low latency execution ensures you never miss profitable market opportunities.",
    },
    {
      icon: <FaRobot />,
      title: "Advanced Trading Tools",
      description:
        "AI trading signals, analytics & automated strategy execution for smarter trading.",
    },
    {
      icon: <FaShieldAlt />,
      title: "High Liquidity & Security",
      description:
        "Encrypted & insured transactions backed by institutional-grade liquidity.",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 Customer Support",
      description:
        "Dedicated support team ready to help anytime — because markets never sleep.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Learn & Grow Program",
      description:
        "Webinars, tutorials & demo trading designed to help traders master the markets.",
    },
  ];

  const [currentSet, setCurrentSet] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % testimonialSets.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const nextSet = () => {
    setCurrentSet((prev) => (prev + 1) % testimonialSets.length);
  };

  const previousSet = () => {
    setCurrentSet(
      (prev) => (prev - 1 + testimonialSets.length) % testimonialSets.length
    );
  };

  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToHome = () => {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };




  return (
    <>
      <section
        className="forex-hero" id="home"
        style={{
          backgroundImage: `url(${heroImg1})`,
        }}
      >
        {/* Dark overlay */}
        <div className="forex-overlay"></div>

        {/* ================= MAIN HERO ================= */}
        <div className="forex-container">

          {/* ================= LEFT CONTENT ================= */}
          <div className="forex-left">

            {/* Rating */}
            <div className="rating-row">

              <div className="avatar-group">
                <img src={avatar1} alt="Student" />
                <img src={avatar2} alt="Student" />
                <img src={avatar3} alt="Student" />
                <img src={avatar4} alt="Student" />
              </div>

              <div className="stars">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>

            </div>


            {/* Heading */}
            <h1 className="forex-title">
              Learn <span>Forex Trading</span>
              <br />
              That Builds Real Skills
              <br />
              And <strong>Real Wealth</strong>
            </h1>


            {/* Description */}
            <p className="forex-description">
              Learn the exact framework behind consistent trading, risk
              management, and market analysis. Master strategies that work
              in real market conditions and trade with confidence.
            </p>


            {/* Session Dates */}
            <div className="session-cards">

              <div className="session-card">
                <span className="calendar-icon">▣</span>

                <div>
                  <strong>25th Oct</strong>
                  <span>11AM - 2PM</span>
                </div>
              </div>


              <div className="session-card">
                <span className="calendar-icon">▣</span>

                <div>
                  <strong>26th Oct</strong>
                  <span>11AM - 2PM</span>
                </div>
              </div>


              <div className="session-card">
                <span className="calendar-icon">▣</span>

                <div>
                  <strong>27th Oct</strong>
                  <span>11AM - 2PM</span>
                </div>
              </div>

            </div>


            <button
              type="button"
              className="forex-cta"
              onClick={handleEnquiryClick}
            >
              <span>♙</span>
              Lock My Seat Before It's Gone @$199
            </button>

          </div>


          {/* ================= RIGHT VIDEO ================= */}
          <div className="forex-right">

            <div className="video-card">

              <video
                src={shenronVid}
                className="video-thumbnail"
                controls
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>

            </div>

          </div>

        </div>


        {/* ================= STATS ================= */}
        <div className="stats-container">

          <div className="stat">
            <h2>21,000+</h2>
            <p>People Trained</p>
          </div>


          <div className="stat-divider"></div>


          <div className="stat">
            <h2>1.1B+</h2>
            <p>Views</p>
          </div>


          <div className="stat-divider"></div>


          <div className="stat">
            <h2>3 Days</h2>
            <p>Live Masterclass</p>
          </div>

        </div>

      </section>

      <section className="market-curriculum" id="curriculum">
        <div className="curriculum-glow"></div>

        <div className="curriculum-container">

          {/* Heading */}
          <div className="curriculum-header">
            <span className="curriculum-label">THE CURRICULUM</span>

            <h2>
              What You'll <span>Learn</span>
            </h2>

            <p>
              Three days. Four markets. One structured learning experience.
            </p>
          </div>

          {/* Curriculum Cards */}
          <div className="curriculum-cards">

            {curriculum.map((item, index) => (
              <React.Fragment key={item.number}>

                <div
                  className={`curriculum-card ${index === 1 ? "curriculum-card-active" : ""
                    }`}
                >

                  {/* Number */}
                  <div className="curriculum-number">
                    {item.number}
                  </div>

                  <span className="curriculum-day">
                    {item.day}
                  </span>

                  <h3>{item.title}</h3>

                  <ul>
                    {item.points.map((point, pointIndex) => (
                      <li key={pointIndex}>
                        <span className="bullet"></span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {index < curriculum.length - 1 && (
                  <div className="curriculum-connector"></div>
                )}

              </React.Fragment>
            ))}

          </div>

          {/* CTA */}
          <div className="curriculum-cta-wrapper">
            <button
              type="button"
              className="curriculum-cta"
              onClick={scrollToHome}
            >
              <span className="cta-icon">♙</span>
              Reserve Your Masterclass Seat @$199
            </button>

            <p className="curriculum-note">
              Instant access <span>•</span> Secure checkout
            </p>
          </div>

        </div>
      </section>

      <section className="complete-package" id="package">
        <div className="package-glow package-glow-left"></div>
        <div className="package-glow package-glow-right"></div>

        <div className="package-shape package-shape-one"></div>
        <div className="package-shape package-shape-two"></div>
        <div className="package-shape package-shape-three"></div>

        <div className="package-container">

          {/* Header */}
          <div className="package-header">
            <span className="package-label">
              PRICING COMPARISON
            </span>

            <h2>
              Choose Your <span>Mentorship Track</span>
            </h2>

            <p>
              Compare the three tracks by depth, duration, and support level
              before you apply.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="package-cards">
            {packages.map((item, index) => (
              <div className="package-card" key={index}>

                <div className="package-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <div className="package-price">
                  {item.price}
                </div>

                <p>{item.description}</p>

                <ul className="package-features">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  type="button"
                  className="package-card-button"
                  onClick={scrollToHome}
                >
                  Apply Now
                </button>

              </div>
            ))}
          </div>

          {/* Bottom Summary */}
          <div className="package-summary">

            <div className="summary-item">
              <span>Tracks</span>
              <strong>3</strong>
              <small>Mentorship Options</small>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-item">
              <span>Duration</span>
              <strong>2 Weeks – 3 Months</strong>
              <small>Depending on selected track</small>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-item">
              <span>Starting From</span>
              <strong>$199</strong>
              <small>SMC Concept</small>
            </div>

          </div>

          {/* CTA */}
          <div className="package-cta-wrapper">
            <button
              type="button"
              className="package-cta"
              onClick={scrollToHome}
            >
              <span>♙</span>
              Apply for Mentorship
            </button>
            <p className="package-note">
              Compare your options <span>•</span> Choose your track
            </p>
          </div>

        </div>
      </section>

      <section id="offers"
        ref={sectionRef}
        className={`next-steps ${isVisible ? "is-visible" : ""}`}
      >
        <div className="next-steps-glow"></div>

        <div className="next-steps-container">
          <div className="next-steps-header">
            <span className="next-steps-label">WHAT WE OFFER</span>

            <h2>
              Trade Smarter.
              <br />
              <span>Grow With Confidence.</span>
            </h2>

            <p>
              Everything you need to trade, analyze and build better market
              strategies in one place.
            </p>
          </div>

          <div className="offers-grid">
            {offers.map((offer, index) => (
              <div
                className="offer-card"
                key={index}
                style={{ "--delay": `${index * 0.1}s` }}
              >
                <div className="offer-icon">
                  {offer.icon}
                </div>

                <div className="offer-content">
                  <h3>{offer.title}</h3>

                  <p>{offer.description}</p>
                </div>

                <div className="offer-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faq-section" id="faq">
        <div className="faq-glow"></div>

        <div className="faq-container">
          <div className="faq-header">
            <span className="faq-label">QUESTIONS?</span>

            <h2>Quick FAQs</h2>
          </div>

          <div className="faq-list">
            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq-item ${isOpen ? "faq-item-active" : ""}`}
                  key={index}
                >
                  <button
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>

                    <span className="faq-icon">
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>

                  <div
                    className={`faq-answer-wrapper ${isOpen ? "faq-answer-open" : ""
                      }`}
                  >
                    <div className="faq-answer">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        className="final-cta"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="final-cta-overlay"></div>

        <div className="final-cta-content">
          <span className="final-cta-label">READY TO START?</span>

          <h2>
            Stop Watching.
            <br />
            <span>Start Trading Smarter.</span>
          </h2>

          <p className="final-cta-description">
            Build a structured approach to the markets with practical
            strategies, risk management and guided trading education.
          </p>

          <p className="final-cta-highlight">
            Learn the system. Build discipline. Trade with confidence.
          </p>

          <button
            type="button"
            className="final-cta-button"
            onClick={scrollToHome}
          >
            <span>♙</span>
            Reserve My Seat @$199
          </button>

          <div className="final-cta-benefits">
            <div className="final-benefit">
              <span className="benefit-icon">♙</span>
              <p>Secure Payment</p>
            </div>

            <div className="benefit-divider"></div>

            <div className="final-benefit">
              <span className="benefit-icon">◈</span>
              <p>Instant Confirmation</p>
            </div>

            <div className="benefit-divider"></div>

            <div className="final-benefit">
              <span className="benefit-icon">⚡</span>
              <p>Limited Seats</p>
            </div>
          </div>

          <div className="final-cta-price">
            <span>$2,999</span>
            <strong>$199 today</strong>
          </div>
        </div>
      </section>

      <section className="testimonials-section" id="testimonials">
        <div className="testimonials-container">

          <div className="testimonials-header">
            <span className="testimonials-label">
              TRADER EXPERIENCES
            </span>

            <h2>
              Real Traders. <span>Real Experiences.</span>
            </h2>

            <p>
              Hear from traders who are building a more structured,
              disciplined and informed approach to the markets.
            </p>
          </div>

          <div className="testimonials-carousel">

            <button
              className="testimonial-arrow testimonial-arrow-left"
              onClick={previousSet}
              aria-label="Previous testimonials"
            >
              ‹
            </button>

            <div className="testimonial-track-wrapper">
              <div className="testimonial-track" key={currentSet}>

                {testimonialSets[currentSet].map((testimonial, index) => (
                  <div className="testimonial-card" key={index}>

                    <div className="testimonial-stars">
                      {"★".repeat(testimonial.rating)}
                    </div>

                    <p className="testimonial-text">
                      "{testimonial.text}"
                    </p>

                    <div className="testimonial-person">
                      <div className="testimonial-avatar">
                        {testimonial.name.charAt(0)}
                      </div>

                      <div>
                        <h4>{testimonial.name}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>

                  </div>
                ))}

              </div>
            </div>

            <button
              className="testimonial-arrow testimonial-arrow-right"
              onClick={nextSet}
              aria-label="Next testimonials"
            >
              ›
            </button>

          </div>

          <div className="testimonial-dots">
            {testimonialSets.map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${currentSet === index ? "active" : ""
                  }`}
                onClick={() => setCurrentSet(index)}
                aria-label={`Show testimonial set ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </section>

      <footer className="main-footer">
        <div className="footer-container">

          <div className="footer-top">

            {/* Brand */}
            <div className="footer-brand">
              <img
                src={logo}
                alt="Company Logo"
                className="footer-logo"
              />

              <p className="footer-description">
                Research-led market guidance, trading education and practical
                resources for traders looking to build disciplined and informed
                market skills.
              </p>
            </div>

            {/* Learn */}
            <div className="footer-column">
              <h4>Learn</h4>

              <a href="#curriculum">
                Curriculum
              </a>

              <a href="#complete-package">
                Complete Package
              </a>


            </div>

            {/* Explore */}
            <div className="footer-column">
              <h4>Explore</h4>

              <a href="#testimonials">
                Testimonials
              </a>

              <a href="#faq">
                FAQ
              </a>

            </div>

            {/* Legal */}
            <div className="footer-column">
              <h4>Legal</h4>

              <a
                href="https://shenronglobal.com/legal/terms-and-conditions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>

              <a
                href="https://shenronglobal.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>

              <a
                href="https://shenronglobal.com/legal/risk-disclosure"
                target="_blank"
                rel="noopener noreferrer"
              >
                Risk Disclosure
              </a>
            </div>

          </div>

          {/* Get In Touch */}
          <div className="footer-contact-section">
            <h4>Get In Touch</h4>

            <div className="footer-contact">

              <p>
                <span>●</span>
                Business Centre, A3 Dubai South Business Park, Dubai, United
                Arab Emirates
              </p>

              <p>
                <span>✉</span>
                enquiry@shenronglobal.com
              </p>

              <p>
                <span>☎</span>
                +971565702852
              </p>

              <p>
                <span>◷</span>
                Mon - Fri: 9:00 AM - 6:00 PM (GST)
              </p>

            </div>
          </div>

          {/* Risk Warning */}
          <div className="footer-warning">

            <p>
              All content on this site, including market commentary, trading
              signals, analysis, reports, webinars, tutorials and other materials,
              is provided for educational and informational purposes only.
            </p>

            <p>
              Nothing on this site constitutes financial, investment, legal, tax
              or other professional advice tailored to your personal circumstances.
            </p>

            <p>
              Trading forex, precious metals, cryptocurrencies, indices and other
              leveraged instruments involves significant risk and may result in
              partial or total loss of capital.
            </p>

            <p>
              Market conditions can change rapidly, and you should never trade
              with funds you cannot afford to lose.
            </p>

            <p>
              Shenron makes no guarantee of profits, and past performance,
              testimonials, case studies and examples do not predict future
              results.
            </p>

            <p className="footer-final-warning">
              Shenron Global Trading involves risk. Educational content only.
            </p>
          </div>

          {/* Bottom */}
          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} All rights reserved.
            </p>



          </div>

        </div>
      </footer>

      <EnquiryForm
        isOpen={isEnquiryOpen}
        onClose={closeEnquiry}
      />


    </>
  );
};

export default ForexHero;
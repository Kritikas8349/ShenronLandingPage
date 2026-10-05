import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import {
  FaUser,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaTimes,
  FaCheckCircle
} from "react-icons/fa";

import "./EnquiryModal.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbw_gw-NQGl-UHKtFlOgHhl6cwAnIpS1YTWECjtnt3HGiBKnPCqg3tihmOHRI3SRX4OZ/exec";

const initialFormData = {
  name: "",
  whatsapp: "",
  email: "",
  experience: "",
  market: "",
  capital: ""
};

const EnquiryModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  // ================================
  // LOCK BACKGROUND SCROLL
  // ================================
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  // ================================
  // ESC KEY
  // ================================
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  // ================================
  // INPUT CHANGE
  // ================================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // ================================
  // SUBMIT
  // ================================
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setError("");

    try {
      const body = new URLSearchParams();

      Object.entries(formData).forEach(([key, value]) => {
        body.append(key, value);
      });

      await fetch(SCRIPT_URL, {
        method: "POST",
        body: body,
        mode: "no-cors"
      });

      setSubmitted(true);
      setFormData(initialFormData);

    } catch (err) {
      console.error("Form submission error:", err);

      setError(
        "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // ================================
  // CLOSE
  // ================================
  const handleClose = () => {
    setSubmitted(false);
    setError("");
    onClose();
  };

  // ================================
  // DON'T RENDER
  // ================================
  if (!isOpen) {
    return null;
  }

  // ================================
  // MODAL
  // ================================
  return createPortal(
    <div
      className="enquiry-modal-overlay"
      onClick={handleClose}
    >
      <div
        className="enquiry-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          type="button"
          className="enquiry-close"
          onClick={handleClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        {!submitted ? (
          <>
            {/* HEADER */}
            <div className="enquiry-modal-header">

              <span>
                GET IN TOUCH
              </span>

              <h2>
                Let's Understand
                <br />
                <strong>
                  Your Trading Goals.
                </strong>
              </h2>

              <p>
                Fill in your details and tell us
                a little about your trading journey.
              </p>

            </div>

            {/* FORM */}
            <form
              className="enquiry-modal-form"
              onSubmit={handleSubmit}
            >

              {/* NAME */}
              <div className="form-group">

                <label htmlFor="enquiry-name">
                  Name <span>*</span>
                </label>

                <div className="input-wrapper">

                  <FaUser />

                  <input
                    id="enquiry-name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                  />

                </div>
              </div>

              {/* WHATSAPP */}
              <div className="form-group">

                <label htmlFor="enquiry-whatsapp">
                  WhatsApp Number <span>*</span>
                </label>

                <div className="input-wrapper">

                  <FaWhatsapp />

                  <input
                    id="enquiry-whatsapp"
                    type="tel"
                    name="whatsapp"
                    placeholder="Enter WhatsApp number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    autoComplete="tel"
                    required
                  />

                </div>
              </div>

              {/* EMAIL */}
              <div className="form-group">

                <label htmlFor="enquiry-email">
                  Email <span>*</span>
                </label>

                <div className="input-wrapper">

                  <FaEnvelope />

                  <input
                    id="enquiry-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    required
                  />

                </div>
              </div>

              {/* EXPERIENCE */}
              <div className="form-group">

                <label htmlFor="enquiry-experience">
                  What best describes your trading experience?
                  <span>*</span>
                </label>

                <select
                  id="enquiry-experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select your experience
                  </option>

                  <option>
                    I'm completely new to trading
                  </option>

                  <option>
                    I have basic knowledge
                  </option>

                  <option>
                    I've been trading for less than 1 year
                  </option>

                  <option>
                    1–3 years
                  </option>

                  <option>
                    3+ years
                  </option>
                </select>

              </div>

              {/* MARKET */}
              <div className="form-group">

                <label htmlFor="enquiry-market">
                  Which markets are you interested in?
                  <span>*</span>
                </label>

                <select
                  id="enquiry-market"
                  name="market"
                  value={formData.market}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select a market
                  </option>

                  <option>
                    Forex
                  </option>

                  <option>
                    Crypto
                  </option>

                  <option>
                    Gold / Commodities
                  </option>

                  <option>
                    Indices
                  </option>

                  <option>
                    Multiple markets
                  </option>
                </select>

              </div>

              {/* CAPITAL */}
              <div className="form-group">

                <label htmlFor="enquiry-capital">
                  How much capital are you planning to start with?
                  <span>*</span>
                </label>

                <select
                  id="enquiry-capital"
                  name="capital"
                  value={formData.capital}
                  onChange={handleChange}
                  required
                >
                  <option value="">
                    Select approximate capital
                  </option>

                  <option>
                    Under $500
                  </option>

                  <option>
                    $500–$1,000
                  </option>

                  <option>
                    $1,000–$5,000
                  </option>

                  <option>
                    $5,000–$10,000
                  </option>

                  <option>
                    $10,000+
                  </option>
                </select>

              </div>

              {/* ERROR */}
              {error && (
                <div className="form-error">
                  {error}
                </div>
              )}

              {/* SUBMIT */}
              <button
                type="submit"
                className="enquiry-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Enquiry"}

                {!isSubmitting && (
                  <FaArrowRight />
                )}
              </button>

              {/* DISCLAIMER */}
              <p className="form-disclaimer">
                By submitting this form, you agree
                to be contacted regarding your enquiry.
                Trading involves risk.
              </p>

            </form>
          </>
        ) : (

          /* SUCCESS */
          <div className="enquiry-success">

            <FaCheckCircle />

            <h2>
              Thank You!
            </h2>

            <p>
              Your enquiry has been submitted
              successfully. Our team will get in
              touch with you shortly.
            </p>

            <button
              type="button"
              className="success-button"
              onClick={handleClose}
            >
              Close
            </button>

          </div>
        )}

      </div>
    </div>,

    document.body
  );
};

export default EnquiryModal;
import React, { useState } from "react";
import "./EnquiryForm.css";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby6NM2EhO1wNFOak34sxzYKwuc0DUYKW47Go8gkW7ClPLjkHjq2M0wkUJx6RlGJgXrI/exec";

const EnquiryForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    email: "",
    experience: "",
    market: "",
    capital: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    setIsSubmitting(true);
  
    try {
      const body = new URLSearchParams();
  
      body.append("name", formData.name);
      body.append("whatsapp", formData.whatsapp);
      body.append("email", formData.email);
      body.append("experience", formData.experience);
      body.append("market", formData.market);
      body.append("capital", formData.capital);
  
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });
  
      setSubmitted(true);
  
      setFormData({
        name: "",
        whatsapp: "",
        email: "",
        experience: "",
        market: "",
        capital: "",
      });
  
    } catch (error) {
      console.error("Form submission error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="enquiry-overlay" onClick={handleClose}>
      <div
        className="enquiry-modal"
        onClick={(e) => e.stopPropagation()}
      >

        {/* CLOSE BUTTON */}
        <button
          className="enquiry-close"
          onClick={handleClose}
          type="button"
        >
          ×
        </button>

        {!submitted ? (
          <>
            {/* HEADER */}
            <div className="enquiry-header">
              <span className="enquiry-small-title">
                GET STARTED
              </span>

              <h2>
                Start Your <span>Trading Journey</span>
              </h2>

              <p>
                Tell us a little about yourself and our team
                will get in touch with you.
              </p>
            </div>

            {/* FORM */}
            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
            >

              {/* NAME + WHATSAPP */}
              <div className="form-row">

                <div className="form-group">
                  <label>
                    Full Name <span>*</span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>
                    WhatsApp Number <span>*</span>
                  </label>

                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="Enter your whatsapp no."
                    value={formData.whatsapp}
                    onChange={handleChange}
                    required
                  />
                </div>

              </div>

              {/* EMAIL */}
              <div className="form-group full-width">
                <label>
                  Email Address <span>*</span>
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* EXPERIENCE + MARKET */}
              <div className="form-row">

                <div className="form-group">
                  <label>
                    Trading Experience <span>*</span>
                  </label>

                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select your experience
                    </option>

                    <option value="I'm completely new to trading">
                      I'm completely new to trading
                    </option>

                    <option value="I have basic knowledge">
                      I have basic knowledge
                    </option>

                    <option value="I've been trading for less than 1 year">
                      I've been trading for less than 1 year
                    </option>

                    <option value="1–3 years">
                      1–3 years
                    </option>

                    <option value="3+ years">
                      3+ years
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label>
                    Interested Markets <span>*</span>
                  </label>

                  <select
                    name="market"
                    value={formData.market}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>
                      Select a market
                    </option>

                    <option value="Forex">
                      Forex
                    </option>

                    <option value="Crypto">
                      Crypto
                    </option>

                    <option value="Gold / Commodities">
                      Gold / Commodities
                    </option>

                    <option value="Indices">
                      Indices
                    </option>

                    <option value="Multiple markets">
                      Multiple markets
                    </option>
                  </select>
                </div>

              </div>

              {/* CAPITAL */}
              <div className="form-group full-width">
                <label>
                  Planned Starting Capital <span>*</span>
                </label>

                <select
                  name="capital"
                  value={formData.capital}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Select your capital range
                  </option>

                  <option value="Under $500">
                    Under $500
                  </option>

                  <option value="$500–$1,000">
                    $500–$1,000
                  </option>

                  <option value="$1,000–$5,000">
                    $1,000–$5,000
                  </option>

                  <option value="$5,000–$10,000">
                    $5,000–$10,000
                  </option>

                  <option value="$10,000+">
                    $10,000+
                  </option>
                </select>
              </div>

              {/* SUBMIT */}
              <button
                type="submit"
                className="enquiry-submit"
                disabled={isSubmitting}
              >
                {isSubmitting
                  ? "Submitting..."
                  : "Submit Enquiry →"}
              </button>

              <p className="form-note">
                Your information is kept private and will only
                be used to contact you regarding your enquiry.
              </p>

            </form>
          </>
        ) : (

          /* SUCCESS */
          <div className="enquiry-success">

            <div className="success-icon">
              ✓
            </div>

            <h2>
              Thank You!
            </h2>

            <p>
              Your enquiry has been submitted successfully.
              Our team will contact you shortly.
            </p>

            <button
              className="success-close-btn"
              onClick={handleClose}
              type="button"
            >
              Done
            </button>

          </div>

        )}

      </div>
    </div>
  );
};

export default EnquiryForm;

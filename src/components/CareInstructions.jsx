import React, { useState } from "react";

const CareInstructions = () => {
  const [open, setOpen] = useState(null);

  const toggle = (type) => setOpen(open === type ? null : type);

  return (
    <section className="care-section fade-in-up">
      <h2 className="section-title">הוראות טיפול</h2>

      <div className="care-container">
        <div className="care-box slide-in">
          <button className="care-btn" onClick={() => toggle("open")}>
            🌿 טרריום פתוח
          </button>
          {open === "open" && (
            <p className="care-text">
              השקיה עדינה אחת לשבועיים, מיקום מואר אך ללא שמש ישירה.
              יש לנקות בעדינות אבק מהעלים במטלית רכה.
            </p>
          )}
        </div>

        <div className="care-box slide-in">
          <button className="care-btn" onClick={() => toggle("closed")}>
            🌱 טרריום סגור
          </button>
          {open === "closed" && (
            <p className="care-text">
              ללא השקיה – הלחות הפנימית מספקת. הימנעי מחשיפה לשמש ישירה
              ופתחי לאוורור אחת לחודש.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareInstructions;

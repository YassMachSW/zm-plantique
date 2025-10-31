import React, { useState } from "react";

const CareInstructions = () => {
  const [openType, setOpenType] = useState(null);

  return (
    <section className="care-section">
      <h2 className="section-title">הוראות טיפול</h2>
      <div className="care-options">
        <button
          className="care-button"
          onClick={() => setOpenType(openType === "open" ? null : "open")}
        >
          🌿 טרריום פתוח
        </button>
        {openType === "open" && (
          <p className="care-text fade-in">
            השקה קלה אחת לשבועיים, מיקום מואר אך ללא שמש ישירה, וניקוי אבק עדין מהעלים.
          </p>
        )}

        <button
          className="care-button"
          onClick={() => setOpenType(openType === "closed" ? null : "closed")}
        >
          🌱 טרריום סגור
        </button>
        {openType === "closed" && (
          <p className="care-text fade-in">
            אין צורך בהשקיה – הלחות הפנימית מספקת. הימנעי מחשיפה לשמש ישירה ופתחי לאוורור פעם בחודש.
          </p>
        )}
      </div>
    </section>
  );
};

export default CareInstructions;

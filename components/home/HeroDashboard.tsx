import React from "react";

export function HeroDashboard() {
  return (
    <div className="cluster" aria-hidden="true">
      <div className="glow"></div>
      <div className="glass g-profile">
        <div className="mini-row">
          <div className="avatar"></div>
          <div style={{ flex: 1 }}>
            <div className="bar short"></div>
            <div className="bar mid"></div>
          </div>
        </div>
        <div className="logo-pills">
          <span>B.E. — Year 2</span>
          <span>CGPA 8.4</span>
          <span>Resume updated</span>
        </div>
      </div>
      <div className="glass g-score">
        <div className="mini-label">Aptitude score</div>
        <div className="mini-val">
          92<span style={{ fontSize: "0.9rem", color: "var(--color-ink-40)" }}>/100</span>
        </div>
        <div className="spark">
          <i style={{ height: "38%" }}></i>
          <i style={{ height: "52%" }}></i>
          <i style={{ height: "44%" }}></i>
          <i style={{ height: "68%" }}></i>
          <i style={{ height: "80%" }}></i>
          <i style={{ height: "100%" }}></i>
        </div>
      </div>
      <div className="glass g-recruit">
        <div className="mini-label">Top recruiters — wishlisted</div>
        <div className="logo-pills">
          <span>Product</span>
          <span>Services</span>
          <span>Analytics</span>
          <span>Core</span>
          <span>+12</span>
        </div>
      </div>
      <div className="g-chip c1"></div>
      <div className="g-chip c2"></div>
      <div className="g-chip c3"></div>
    </div>
  );
}

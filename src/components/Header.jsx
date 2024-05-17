"use client"
import React from 'react';
import "../app/common_style.css";
import TextAppearDelay from './ui/TextAppearDelay';

function Header() {
  return (
    <header className="tc-header-style5">
      <div className="container">
        <div className="main-content">
          <div className="title">
            <TextAppearDelay text="WORLD CAPITAL TOWER" tag="h1" />
          </div>
          <h4 className="fsz-24 text-uppercase ml-50 mt-30 lh-4">
            <TextAppearDelay text="THE NEW HIGHLIGHT" tag="span" />
            <TextAppearDelay text="IN THE CITY" tag="span" />

          </h4>
        </div>
      </div>
    </header>
  );
}

export default Header;

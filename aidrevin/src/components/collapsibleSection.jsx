import React, { useState, useRef } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./CollapsibleSection.css";

/**
 * A reusable accordion-style component.
 * @param {string} title - The section title.
 * @param {ReactNode} children - The content of the section.
 * @param {boolean} [defaultOpen=false] - Whether the section is open by default.
 */
function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  // We'll calculate the content's height to animate the collapse/expand.
  const currentHeight =
    isOpen && contentRef.current ? contentRef.current.scrollHeight : 0;

  return (
    <div className="collapsible-section">
      {/* Header row: Title + Icon to toggle */}
      <div className="collapsible-header" onClick={toggleOpen}>
        <h3>{title}</h3>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {/* Collapsible content with dynamic max-height */}
      <div
        className="collapsible-content"
        ref={contentRef}
        style={{ maxHeight: currentHeight }}
      >
        {children}
      </div>
    </div>
  );
}

export default CollapsibleSection;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Accordion() {
  return (
    <div>
      <div class='accordion accordion-flush' id='accordionFlushExample'>
        <div class='accordion-item'>
          <h2 class='accordion-header'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseOne'
              aria-expanded='false'
              aria-controls='flush-collapseOne'
            >
              About Me
            </button>
          </h2>
          <div
            id='flush-collapseOne'
            class='accordion-collapse collapse'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              first item's accordion body.
            </div>
          </div>
        </div>
        <div class='accordion-item'>
          <h2 class='accordion-header'>
            <button
              class='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#flush-collapseTwo'
              aria-expanded='false'
              aria-controls='flush-collapseTwo'
            >
              My Work
            </button>
          </h2>
          <div
            id='flush-collapseTwo'
            class='accordion-collapse collapse'
            data-bs-parent='#accordionFlushExample'
          >
            <div class='accordion-body'>
              Placeholder content for this accordion, which is intended to
              demonstrate the <code>.accordion-flush</code> class. This is the
              second item's accordion body. Let's imagine this being filled with
              some actual content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import { NavLink, Form } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div>
        <Form id="search-form" role="search">
          <input
            id="q"
            aria-label="Search contacts"
            placeholder="Search"
            type="search"
            name="q"
          />
          <div
            id="search-spinner"
            aria-hidden
          />
          <div
            className="sr-only"
            aria-live="polite"
          />
        </Form>
        <Form method="post">
          <button type="submit">New</button>
        </Form>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/Mission"
            />
          </li>
        </ul>
      </nav>
    </>
  );
}

"use client";

import React from "react";
import Section from "../../components/Section";

export default function GalleryPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Gallery Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="text-center border p-4 rounded">
          <a href="#">
            <img src="../images/family.png" alt="Family" className="mx-auto mb-2" />
            <h2 className="font-semibold">Family</h2>
          </a>
        </div>
        <div className="text-center border p-4 rounded">
          <a href="#">
            <img src="../images/creativity.png" alt="Creativity" className="mx-auto mb-2" />
            <h2 className="font-semibold">Creativity</h2>
          </a>
        </div>
        <div className="text-center border p-4 rounded">
          <a href="#">
            <img src="../images/events.png" alt="Events" className="mx-auto mb-2" />
            <h2 className="font-semibold">Events</h2>
          </a>
        </div>
      </div>
      <Section title="Filters">
        <div className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="category-filter">Category:</label>
            <select id="category-filter" className="border p-2">
              <option value="all">All</option>
              <option value="family">Family</option>
              <option value="creativity">Creativity</option>
              <option value="events">Events</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="tag-filter">Tags:</label>
            <input id="tag-filter" type="text" placeholder="Enter tags" className="border p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="date-filter">Date:</label>
            <input id="date-filter" type="date" className="border p-2" />
          </div>
          <button className="bg-black text-white px-4 py-2 rounded">Apply Filters</button>
        </div>
      </Section>
      <Section title="Recent Images">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <img src="../images/recent1.png" alt="Recent Image 1" />
          </div>
          <div>
            <img src="../images/recent2.png" alt="Recent Image 2" />
          </div>
          <div>
            <img src="../images/recent3.png" alt="Recent Image 3" />
          </div>
        </div>
      </Section>
    </div>
  );
}

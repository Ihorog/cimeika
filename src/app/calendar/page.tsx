"use client";

import React from "react";
import Section from "../../components/Section";

export default function CalendarPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Manage Your Time with Cimeika</h1>
      <div id="calendar" className="mb-8" />
      <Section title="My Events">
        <div id="upcoming-events-content" />
      </Section>
      <Section title="Filter Events">
        <form className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="event-category">Category:</label>
            <select id="event-category" name="event-category" className="border p-2">
              <option value="all">All</option>
              <option value="work">Work</option>
              <option value="personal">Personal</option>
              <option value="family">Family</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label htmlFor="event-date">Date:</label>
            <input type="date" id="event-date" name="event-date" className="border p-2" />
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">
            Apply Filters
          </button>
        </form>
      </Section>
    </div>
  );
}

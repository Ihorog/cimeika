"use client";

import React from "react";
import Section from "../../components/Section";

export default function EventPage() {
  return (
    <div>
      <section className="mb-8">
        <h1 className="text-3xl font-semibold mb-4">Plan Your Events with Cimeika</h1>
        <p>
          Organize your events and tasks effortlessly with our interactive calendar and
          recommendations from Ci.
        </p>
      </section>
      <Section title="Interactive Calendar">
        <div id="calendar" className="mb-4" />
        <button className="bg-black text-white px-4 py-2 rounded">Add Event</button>
      </Section>
      <Section title="Add New Event">
        <form className="space-y-4" id="add-event-form">
          <div className="flex flex-col">
            <label htmlFor="event-name">Event Name:</label>
            <input id="event-name" type="text" name="event-name" required className="border p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="event-date">Date:</label>
            <input id="event-date" type="date" name="event-date" required className="border p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="event-location">Location:</label>
            <input id="event-location" type="text" name="event-location" required className="border p-2" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="event-notes">Additional Notes:</label>
            <textarea id="event-notes" name="event-notes" className="border p-2" />
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Save Event</button>
        </form>
      </Section>
      <Section title="Recommendations from Ci">
        <div id="ci-recommendations-content" />
      </Section>
      <Section title="Telegram Integration">
        <p>
          Interact with our event planning assistant directly through Telegram. Use the following
          commands:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li><strong>/create_event</strong> - Create a new event</li>
          <li><strong>/view_events</strong> - View your upcoming events</li>
          <li><strong>/delete_event</strong> - Delete an event</li>
        </ul>
      </Section>
    </div>
  );
}

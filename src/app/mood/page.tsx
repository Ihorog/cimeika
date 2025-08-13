"use client";

import React from "react";
import Section from "../../components/Section";

export default function MoodPage() {
  return (
    <div>
      <Section title="Mood Tracker">
        <canvas id="moodChart" className="w-full h-64 border" />
      </Section>
      <Section title="Exercises and Tips">
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Meditation</h3>
            <p>Take a few minutes to meditate and clear your mind.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Relaxation</h3>
            <p>Practice deep breathing exercises to relax your body.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Positive Thinking</h3>
            <p>Write down three things you are grateful for today.</p>
          </div>
        </div>
      </Section>
      <Section title="Update Your Mood">
        <form id="updateMoodForm" className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="currentMood">Current Mood:</label>
            <select id="currentMood" name="currentMood" className="border p-2">
              <option value="happy">Happy</option>
              <option value="sad">Sad</option>
              <option value="stressed">Stressed</option>
              <option value="relaxed">Relaxed</option>
            </select>
          </div>
          <button type="submit" className="bg-black text-white px-4 py-2 rounded">Update Mood</button>
        </form>
      </Section>
      <Section title="Mood Analysis and Recommendations">
        <div id="mood-analysis-content" />
      </Section>
    </div>
  );
}

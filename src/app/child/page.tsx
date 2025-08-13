"use client";

import React from "react";
import Section from "../../components/Section";

export default function ChildPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Child Creativity</h1>
      <Section title="Interactive Tasks">
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Draw Your Favorite Animal</h3>
            <p>Use your creativity to draw your favorite animal and share it with your family.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Create a Creative Collage</h3>
            <p>Gather different materials and create a unique collage. Let your imagination run wild!</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Build a Lego Structure</h3>
            <p>Use Lego blocks to build a structure of your choice and share it with your friends.</p>
          </div>
        </div>
      </Section>
      <Section title="Games">
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Memory Game</h3>
            <p>Test your memory with this fun and interactive game.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Puzzle Game</h3>
            <p>Solve puzzles and improve your problem-solving skills.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Math Challenge</h3>
            <p>Challenge yourself with fun math problems and improve your skills.</p>
          </div>
        </div>
      </Section>
      <Section title="Drawings">
        <div className="space-y-4">
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Upload Your Drawing</h3>
            <p>Upload your drawing directly to the gallery or share it with your family through the Telegram bot.</p>
          </div>
          <div className="border p-4 rounded">
            <h3 className="font-semibold">Upload Your Creative Work</h3>
            <p>Upload your creative work to Dropbox and share it with your friends and family.</p>
            <form id="uploadCreativeWorkForm" className="mt-2 space-y-2">
              <input type="file" id="creativeWorkFile" name="creativeWorkFile" required className="border p-2" />
              <button type="submit" className="bg-black text-white px-4 py-2 rounded">Upload</button>
            </form>
          </div>
        </div>
      </Section>
      <Section title="My Gallery">
        <p>Save and organize your creative works in your personal gallery.</p>
        <div id="personalGallery" />
      </Section>
    </div>
  );
}

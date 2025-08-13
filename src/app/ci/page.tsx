"use client";

import React from "react";
import Section from "../../components/Section";

export default function CiPage() {
  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6">Ci Assistant</h1>
      <Section title="Chat with Ci">
        <div id="chat-window" className="border p-4 mb-4 h-40 overflow-y-auto" />
        <div className="flex space-x-2">
          <input
            type="text"
            id="chat-input"
            placeholder="Type your message..."
            className="border p-2 flex-grow"
          />
          <button id="send-button" className="bg-black text-white px-4 py-2 rounded">
            Send
          </button>
        </div>
      </Section>
      <Section title="Quick Actions">
        <div className="space-x-2">
          <button className="bg-black text-white px-4 py-2 rounded">Add Event</button>
          <button className="bg-black text-white px-4 py-2 rounded">Upload Image</button>
          <button className="bg-black text-white px-4 py-2 rounded">Track Mood</button>
        </div>
      </Section>
      <Section title="Context-Based Tips">
        <p id="tips-content">Here you will see tips from Ci based on your activities.</p>
      </Section>
      <Section title="Ci: Functional Section and Interactive Assistant">
        <p>
          The "Ci" section is not just a project page or informational part. It is a unique
          interactive element that unites all components of Cimeika through the functionality of
          artificial intelligence. Ci is a digital companion, assistant, and guide that facilitates
          interaction with the project and supports the user in real-time.
        </p>
        <h3 className="text-xl font-semibold mt-4">Main Roles of "Ci":</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Assistant: Responds to queries, helps navigate the site, executes commands, and provides
            support in interacting with each section.
          </li>
          <li>
            Navigation Guide: Ci quickly transitions between project sections and offers
            recommendations based on user needs.
          </li>
          <li>
            Contextual Helper: Adapts to the section the user is in and provides tools that match the
            current context (e.g., helps add events in the "Calendar" section and organize images in
            the "Gallery").
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Functional Capabilities of "Ci":</h3>
        <h4 className="font-semibold mt-2">Interactive Assistant:</h4>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Context-Aware: Ci understands which section the user is in and offers appropriate tools.
            For example, helps register for events in the "Event" section and suggests creative
            ideas for children in the "Child" section.
          </li>
          <li>
            Conversational Bot: Ci functions as a chat-bot that can be accessed through a
            conversational interface. It responds to user queries, helps complete tasks, and provides
            advice.
          </li>
          <li>
            Voice Command Support: Ci can operate through voice commands, making interaction even
            more convenient.
          </li>
        </ul>
        <h4 className="font-semibold mt-2">Context Menu:</h4>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Ci Logo as a Call Button: The logo, located at the top of the screen or as a floating
            button, opens a context menu that adapts to each project section.
          </li>
          <li>
            Dynamic Menu: Depending on the page the user is on, Ci offers different options:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Event: "Register for an event", "Add event to calendar", "Get a reminder".</li>
              <li>Mood: "Get a meditation exercise", "Send a tip to improve mood".</li>
              <li>Child: "Start a creative exercise", "Upload a drawing".</li>
              <li>Calendar: "Add a new event", "Synchronize calendar", "Set reminders".</li>
              <li>Gallery: "Add a new image", "Organize albums", "Plan exhibitions".</li>
            </ul>
          </li>
        </ul>
        <h4 className="font-semibold mt-2">Navigation and Support:</h4>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Key Navigation Functions:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Move between sections without returning to the main page.</li>
              <li>Tips on available features in each section.</li>
              <li>
                Personalized Recommendations: Ci analyzes user activity and offers relevant features
                or content (e.g., if events are frequently used, it will suggest creating a new event
                or adding participants).
              </li>
            </ul>
          </li>
        </ul>
        <h4 className="font-semibold mt-2">Task Automation:</h4>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Reminders and Notifications: Ci can automatically send notifications about events,
            activities, or creative tasks.
          </li>
          <li>
            Integration with Other Sections: Ci helps create links between events, images in the
            Gallery, creative tasks in the "Child" section, and other activities.
          </li>
        </ul>
        <h4 className="font-semibold mt-2">Learning and Adaptation:</h4>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Improved Interaction: The more the user interacts with Ci, the better the assistant
            understands their needs, tailoring responses to specific queries.
          </li>
          <li>
            Flexible Scenarios: Ci learns new commands and can perform new functions depending on the
            project's development.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Uniqueness of "Ci":</h3>
        <ul className="list-disc list-inside space-y-2 mt-2">
          <li>
            Difference from Other Services: "Ci" is not a typical "About Us" or "Contact" page. It
            is smart and intuitive, acting as a personal assistant that supports the user at every
            step of their journey through the project.
          </li>
          <li>
            Interactivity at Every Level: Ci is not just a chat-bot; it connects all project
            functions into a single system, allowing easy and efficient interaction with all
            sections.
          </li>
        </ul>
        <h3 className="text-xl font-semibold mt-4">Example Interaction Scenario with "Ci":</h3>
        <ol className="list-decimal list-inside space-y-2 mt-2">
          <li>The user opens the site and clicks on the Ci logo, which immediately launches the chat-bot.</li>
          <li>
            The user asks: "What's new in the Event section?" Ci responds: "New events are being
            planned, such as the summer photo exhibition. Would you like to add it to the calendar?"
          </li>
          <li>The user chooses to add the event to their calendar.</li>
          <li>
            Then Ci offers to set a reminder a day before the event and the option to share it with
            friends through social media.
          </li>
        </ol>
        <h3 className="text-xl font-semibold mt-4">Conclusion:</h3>
        <p>
          Ci is an interactive assistant and functional element of the Cimeika project that helps
          users freely and conveniently navigate between different platform components. Its context
          menu adapts to each section, offering relevant features and real-time support.
        </p>
      </Section>
    </div>
  );
}

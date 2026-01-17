# Smart Research Assistant

**Built with:** Spring Boot & Spring AI  

## Project Overview
The **Smart Research Assistant** is an AI-powered web application that helps users quickly summarize text, save research notes, and manage research content efficiently. It integrates AI models to provide clear, concise summaries and suggestions for research content.

## Features
- Summarize selected text from any webpage.
- Save and manage research notes locally.
- Display AI-generated summaries in an interactive side panel.
- Seamless integration with Chrome extension for easy access.

## Tech Stack
- **Backend:** Spring Boot, Spring WebFlux  
- **AI Integration:** Gemini API (or Spring AI)  
- **Frontend:** HTML, CSS, JavaScript (Chrome Extension)  
- **Storage:** Chrome local storage for notes  

## How It Works
1. User selects text on a webpage and clicks **Summarize**.  
2. The selected text is sent to the AI model via the backend API.  
3. AI processes the text and returns a concise summary.  
4. Summary is displayed in the Chrome extension side panel.  
5. Users can select part or all of the summary and save it as research notes.  

## Installation & Setup
1. Clone the repository:  
   ```bash
   git clone <repo-url>

2. Navigate to the project directory:
  cd smart-research-assistant

3. Build and run the Spring Boot backend:
  ./mvnw spring-boot:run

4. Load the Chrome extension:
  Go to chrome://extensions/
  Enable Developer mode
  Click Load unpacked and select the extension folder.

Usage
Open any webpage.
Click the Research Assistant extension icon to open the side panel.
Select text on the page and click Summarize.
Select the generated summary and click Save Notes to save it locally.

Future Improvements
Add support for multiple AI operations (e.g., suggest related topics).
Enable exporting notes to PDF or cloud storage.
Improve UI/UX of the side panel for better interaction.

<img width="1470" height="941" alt="Screenshot 2026-01-17 at 7 09 57 PM" src="https://github.com/user-attachments/assets/877bae02-6621-42f2-867e-730078296ae4" />

document.addEventListener('DOMContentLoaded', () => {

  chrome.storage.local.get(['researchNotes'], (result) => {
    if (result.researchNotes) {
      document.getElementById('notesArea').value = result.researchNotes;
    }
  });

  document.getElementById('summarizeBtn')
    .addEventListener('click', summarizeText);

  document.getElementById('saveNotesBtn')
    .addEventListener('click', saveNotes);
});

async function summarizeText() {
  try {
    const [tab] = await chrome.tabs.query({
      active: true,
      currentWindow: true
    });

    const [{ result }] = await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => window.getSelection().toString()
    });

    if (!result) {
      showResult("Please select text to summarize.");
      return;
    }

    const response = await fetch(
      'http://localhost:8080/api/research/process',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          content: result,
          operation: 'summarize'
        })
      }
    );

    if (!response.ok) {
      throw new Error(`API error ${response.status}`);
    }

    const text = await response.text();
    showResult(text.replace(/\n/g, '<br>'));

  } catch (error) {
    // console.error(error);
    showResult('Error: ' + error.message);
  }
}



function saveNotes() {
  const notes = document.getElementById('notesArea').value;

  if (!notes.trim()) {
    alert('Notes are empty. Please add something first.');
    return;
  }

  chrome.storage.local.set(
    { researchNotes: notes },
    () => {
      alert('Research notes saved successfully.');
    }
  );
}



function showResult(content) {
  const resultsDiv = document.getElementById('results');

  resultsDiv.innerHTML = `
    <div class="result-item">
      <h3>Summary</h3>
      <div class="result-content" id="summaryContent">
        ${content}
      </div>
      <p><small>Select text from summary to add to notes</small></p>
    </div>
  `;

  // Attach selection listener AFTER rendering
  const summaryDiv = document.getElementById('summaryContent');

  summaryDiv.addEventListener('mouseup', () => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText) {
      document.getElementById('notesArea').value = selectedText;
    }
  });
}

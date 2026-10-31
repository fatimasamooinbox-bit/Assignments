const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postForm = document.getElementById("postForm");
const createButton = document.getElementById("createButton");
const putButton = document.getElementById("putButton");
const patchButton = document.getElementById("patchButton");
const deleteButton = document.getElementById("deleteButton");
const message = document.getElementById("message");
const statusCode = document.getElementById("statusCode");
const responseOutput = document.getElementById("responseOutput");

function showMessage(text, type = "") {
  message.textContent = text;
  message.className = type;
}

// Reusable helper: send a request with a URL, HTTP method, and optional body.
async function sendRequest(url, method = "GET", body = undefined) {
  const options = { method, headers: {} };

  if (body !== undefined) {
    // JSON.stringify converts a JavaScript object into JSON text for transmission.
    // Content-Type tells the server that the request body contains JSON.
    options.headers["Content-Type"] = "application/json; charset=UTF-8";
    options.body = JSON.stringify(body);
  }

  const response = await fetch(url, options);
  statusCode.textContent = `HTTP status: ${response.status} ${response.statusText}`;
  console.log(`${method} status:`, response.status);

  // A 404/500 response does not automatically reject fetch, so check response.ok.
  const responseText = await response.text();
  let responseData = null;
  if (responseText) {
    try {
      responseData = JSON.parse(responseText);
    } catch {
      responseData = responseText;
    }
  }

  if (!response.ok) {
    const error = new Error(`${method} request failed (HTTP ${response.status}).`);
    error.status = response.status;
    error.responseData = responseData;
    throw error;
  }

  return { status: response.status, data: responseData };
}

async function runRequest(method, url, body) {
  const buttons = [createButton, putButton, patchButton, deleteButton];
  buttons.forEach((button) => { button.disabled = true; });
  showMessage(`Sending ${method} request...`);
  responseOutput.textContent = "Waiting for API response...";

  try {
    const result = await sendRequest(url, method, body);
    showMessage(`${method} request completed successfully.`, "success");
    responseOutput.textContent = JSON.stringify(result.data, null, 2) || "(No response body)";
    if (method === "POST" && result.data && result.data.id !== undefined) {
      showMessage(`POST successful. Returned ID: ${result.data.id}.`, "success");
    }
  } catch (error) {
    showMessage(error.message || "A network error occurred.", "error");
    responseOutput.textContent = error.responseData
      ? JSON.stringify(error.responseData, null, 2)
      : "No response data was available. Check your internet connection and try again.";
    console.error(`${method} request error:`, error);
  } finally {
    buttons.forEach((button) => { button.disabled = false; });
  }
}

postForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value.trim();
  const body = document.getElementById("content").value.trim();
  const userId = Number(document.getElementById("userId").value);

  if (!title || !body || !Number.isInteger(userId) || userId < 1) {
    showMessage("Please enter a title, content, and valid positive user ID.", "error");
    return;
  }

  runRequest("POST", API_URL, { title, body, userId });
});

putButton.addEventListener("click", () => {
  // PUT sends the complete replacement representation of the post.
  runRequest("PUT", `${API_URL}/1`, {
    id: 1,
    title: "Updated announcement title",
    body: "This is the complete replacement content sent with PUT.",
    userId: 1
  });
});

patchButton.addEventListener("click", () => {
  // PATCH sends only the field that should be changed.
  runRequest("PATCH", `${API_URL}/1`, {
    title: "Title updated with PATCH"
  });
});

deleteButton.addEventListener("click", () => {
  runRequest("DELETE", `${API_URL}/1`);
});

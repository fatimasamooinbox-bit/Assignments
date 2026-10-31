const API_URL = "https://jsonplaceholder.typicode.com/posts";
const postsContainer = document.getElementById("postsContainer");
const postForm = document.getElementById("postForm");
const message = document.getElementById("message");
const statusLog = document.getElementById("statusLog");
const reloadButton = document.getElementById("reloadButton");
const postCount = document.getElementById("postCount");

// Keep a local copy because JSONPlaceholder does not permanently save changes.
let posts = [];

function showMessage(text, type = "") {
  message.textContent = text;
  message.className = `message ${type}`;
}

function logStatus(response) {
  statusLog.textContent = `HTTP status: ${response.status} ${response.statusText}`;
  console.log("HTTP status:", response.status, response.statusText);
}

async function loadPosts() {
  postsContainer.innerHTML = "<p>Loading posts...</p>";
  reloadButton.disabled = true;
  showMessage("Loading the first six posts...");
  try {
    const response = await fetch(`${API_URL}?_limit=6`);
    logStatus(response);
    if (!response.ok) throw new Error(`Could not load posts (HTTP ${response.status}).`);
    posts = await response.json();
    renderPosts();
    showMessage("Posts loaded successfully.", "success");
  } catch (error) {
    postsContainer.innerHTML = "";
    showMessage(error.message || "Network error while loading posts.", "error");
  } finally {
    reloadButton.disabled = false;
  }
}

function renderPosts() {
  postCount.textContent = `${posts.length} post${posts.length === 1 ? "" : "s"}`;
  postsContainer.innerHTML = "";
  if (posts.length === 0) {
    postsContainer.innerHTML = "<p>No posts to display.</p>";
    return;
  }

  posts.forEach((post) => {
    const card = document.createElement("article");
    card.className = "post-card";

    const meta = document.createElement("div");
    meta.className = "post-meta";
    meta.textContent = `Post ID: ${post.id} | User ID: ${post.userId}`;

    const title = document.createElement("h3");
    title.textContent = post.title;

    const body = document.createElement("p");
    body.textContent = post.body;

    const hint = document.createElement("p");
    hint.className = "hint";
    hint.textContent = "PUT replaces the full post. PATCH changes one field.";

    const actions = document.createElement("div");
    actions.className = "card-actions";

    const putButton = makeButton("PUT full post", "orange", () => updatePost(post.id, "PUT"));
    const patchTitleButton = makeButton("PATCH title", "green", () => updatePost(post.id, "PATCH", "title"));
    const patchBodyButton = makeButton("PATCH body", "green", () => updatePost(post.id, "PATCH", "body"));
    const deleteButton = makeButton("DELETE", "danger", () => deletePost(post.id));

    actions.append(putButton, patchTitleButton, patchBodyButton, deleteButton);
    card.append(meta, title, body, hint, actions);
    postsContainer.appendChild(card);
  });
}

function makeButton(label, colorClass, onClick) {
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = label;
  button.className = colorClass;
  button.addEventListener("click", onClick);
  return button;
}

async function updatePost(id, method, field = "") {
  const existingPost = posts.find((post) => post.id === id);
  if (!existingPost) return;

  let updatedData;
  if (method === "PUT") {
    updatedData = {
      userId: existingPost.userId,
      title: `${existingPost.title} (updated with PUT)`,
      body: `${existingPost.body} [Full post replaced locally]`
    };
  } else if (field === "title") {
    updatedData = { title: `${existingPost.title} (patched)` };
  } else {
    updatedData = { body: `${existingPost.body} [Body patched]` };
  }

  try {
    showMessage(`Sending ${method} request for post ${id}...`);
    const response = await fetch(`${API_URL}/${id}`, {
      method,
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify(updatedData)
    });
    logStatus(response);
    if (!response.ok) throw new Error(`${method} failed (HTTP ${response.status}).`);
    const returnedPost = await response.json();

    posts = posts.map((post) => post.id === id
      ? (method === "PUT"
          ? { ...post, ...updatedData, ...{ id: post.id } }
          : { ...post, ...updatedData })
      : post);
    renderPosts();
    showMessage(`${method} successful for post ${id}. The page was updated locally; the API does not permanently save it.`, "success");
    console.log(`${method} response:`, returnedPost);
  } catch (error) {
    showMessage(error.message || `Network error during ${method}.`, "error");
  }
}

async function deletePost(id) {
  try {
    showMessage(`Sending DELETE request for post ${id}...`);
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    logStatus(response);
    if (!response.ok) throw new Error(`DELETE failed (HTTP ${response.status}).`);
    await response.json().catch(() => null);
    posts = posts.filter((post) => post.id !== id);
    renderPosts();
    showMessage(`Post ${id} deleted from this page. The API does not permanently save the change.`, "success");
  } catch (error) {
    showMessage(error.message || "Network error during DELETE.", "error");
  }
}

postForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const title = document.getElementById("postTitle").value.trim();
  const userId = Number(document.getElementById("userId").value);
  const body = document.getElementById("postBody").value.trim();
  if (!title || !body || !Number.isInteger(userId) || userId < 1) {
    showMessage("Enter a title, content, and valid positive user ID.", "error");
    return;
  }

  try {
    showMessage("Adding post...");
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=UTF-8" },
      body: JSON.stringify({ title, body, userId })
    });
    logStatus(response);
    if (!response.ok) throw new Error(`POST failed (HTTP ${response.status}).`);
    const newPost = await response.json();
    // Add it to the browser's local state so the new post appears immediately.
    posts.unshift({ ...newPost, title, body, userId });
    renderPosts();
    postForm.reset();
    document.getElementById("userId").value = "1";
    showMessage(`Post added successfully (example ID ${newPost.id}). It exists locally on this page only.`, "success");
  } catch (error) {
    showMessage(error.message || "Network error while adding the post.", "error");
  }
});

reloadButton.addEventListener("click", loadPosts);
loadPosts();

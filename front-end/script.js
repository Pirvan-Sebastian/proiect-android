// POST NOTES
const form = document.getElementById("form-notes");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 1. Create the JSON object from input values
  const formData = {
    nume: document.getElementById("nume").value,
    description: "Add Descriction"
  };

  try {
    // 2. Send the POST request
    const response = await axios.post(
      "http://localhost:5555/api/card/createCard",
      formData,
    );
    console.log("Success:", response.data);
    // alert("Data sent successfully!");
  } catch (error) {
    console.error("Error:", error);
  }
  fetchUsers();
});
// GET NOTES
const userContainer = document.getElementById("post-it-home");

const fetchUsers = async () => {
  try {
    userContainer.innerHTML = "<p>Loading cards...</p>";

    const response = await axios.get(
      "http://localhost:5555/api/card/getAllCards",
    );
    const users = response.data;

    userContainer.innerHTML = users
      .map(
        (user) => `
        <div class="post-it" id="post-it-${user.id}">
          <h2>${user.nume}</h2>
           <p>${user.description}</p>
           <button class="delete-btn" onclick="deleteUser(${user.id})">x</button>
            <form id="post-notes">
                <input type="text" id="desc-input-${user.id}" name="newDesc" placeholder="  Add Description ... "><br />
                  <button  id="add-button-post" type="button" value="Submit" onclick="addTask(${user.id})">+Add</button>
            </form>
        </div>
      `,
      )
      .join("");
  } catch (error) {
    userContainer.innerHTML = "<p>Error loading data.</p>";
    console.error(error);
  }
};
// delete
window.deleteUser = async (id) => {
  try {
    await axios.delete(`http://localhost:5555/api/card/deleteCard/${id}`);

    const cardToRemove = document.getElementById(`post-it-${id}`);
    if (cardToRemove) {
      cardToRemove.remove();
    }

    console.log(`User ${id} deleted.`);
  } catch (error) {
    console.error("Delete failed:", error);
    alert("Could not delete the user.");
  }
};
// post
window.addTask = async (id) => {
  const input = document.getElementById(`desc-input-${id}`);
  const val = input.value;

  if (!val) return;

  try {

    await axios.put(`http://localhost:5555/api/card/updateCard/${id}`, {
      description: val
    });
    
    fetchUsers(); 
  } catch (error) {
    console.error("Update failed:", error);
  }
};

fetchUsers();

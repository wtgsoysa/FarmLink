async function registerFarmer() {
    const farmerData = {
        FirstName: document.getElementById("FirstName").value,
        LastName: document.getElementById("LastName").value,
        Email: document.getElementById("Email").value,
        Contact: document.getElementById("Contact").value,
        Address: document.getElementById("Address").value,
        NIC: document.getElementById("NIC").value,
        Gender: document.getElementById("Gender").value,
        AccNumber: document.getElementById("AccNumber").value,
        Location: document.getElementById("Location").value,
        Acres: parseFloat(document.getElementById("Acres").value),
        Compost: parseFloat(document.getElementById("Compost").value),
        Harvest: parseFloat(document.getElementById("Harvest").value),
    };

    try {
        const response = await fetch("http://localhost:5000/api/staff/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(farmerData),
        });

        const result = await response.json();
        if (response.ok) {
            alert("✅ Farmer Registered Successfully! Staff ID: " + result.StaffID);
            document.getElementById("farmerForm").reset(); // Clear form after submission
        } else {
            alert("⚠️ Error: " + result.error);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("⚠️ Failed to register farmer. Please try again!");
    }
}


// Function to fetch farmers and display them in the table
async function loadFarmers() {
    try {
        const response = await fetch("http://localhost:5000/api/staff/farmers");
        const farmers = await response.json();

        if (response.ok) {
            const tableBody = document.getElementById("farmerTableBody");
            tableBody.innerHTML = "";  // Clear any existing rows

            farmers.forEach(farmer => {
                // Create a new row for each farmer
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${farmer.StaffID}</td>
                    <td>${farmer.FirstName} ${farmer.LastName}</td>
                    <td>${farmer.Email}</td>
                    <td>${farmer.Contact}</td>
                    <td>${farmer.NIC}</td>
                    <td>${farmer.AccNumber}</td>
                    <td>${farmer.Location}</td>
                    <td>${farmer.Acres}</td>
                    <td>${farmer.Compost}</td>
                    <td>${farmer.Harvest}</td>
                `;
                
                tableBody.appendChild(row);  // Append the new row to the table body
            });
        } else {
            console.error("Error fetching farmers:", farmers.error);
        }
    } catch (error) {
        console.error("Error:", error);
    }
}

// Call loadFarmers when the page loads or when the section is shown
window.onload = loadFarmers;  // Automatically fetch farmers on page load

// You can also trigger this when you display the "View Farmers" section

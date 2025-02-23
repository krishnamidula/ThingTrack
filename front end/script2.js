function loadOrders() {
    let userType = document.getElementById("userType").value;
    let ordersList = document.getElementById("ordersList");

    if (!ordersList) return;
    ordersList.innerHTML = ""; // Clear previous orders

    if (userType === "customer") {
        let customerOrders = [
            { company: "Amazon", item: "Laptop", arrival: "March 5, 2025", status: "Shipped", tracking: "#12345", eta: "2 hours" },
            { company: "eBay", item: "Smartphone", arrival: "March 10, 2025", status: "Out for Delivery", tracking: "#67890", eta: "30 minutes" }
        ];

        customerOrders.forEach(order => {
            let orderItem = document.createElement("div");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
                <p><strong>Company:</strong> ${order.company}</p>
                <p><strong>Item:</strong> ${order.item}</p>
                <p><strong>Estimated Arrival:</strong> ${order.arrival} (${order.eta})</p>
                <p><strong>Status:</strong> ${order.status}</p>
                <p><strong>Tracking:</strong> <button onclick="showMap()">Track Here</button></p>
                <button onclick="cancelOrder('${order.tracking}')">Cancel Order</button>
            `;
            ordersList.appendChild(orderItem);
        });
    } else if (userType === "agent") {
        let agentOrders = [
            { company: "DHL", deliveryTo: "John Doe", deliveryDate: "March 6, 2025", priority: "High", contact: "+1 234 567 890", earnings: "$50" },
            { company: "FedEx", deliveryTo: "Alice Smith", deliveryDate: "March 12, 2025", priority: "Normal", contact: "+1 987 654 321", earnings: "$40" }
        ];

        agentOrders.forEach(order => {
            let orderItem = document.createElement("div");
            orderItem.classList.add("order-item");
            orderItem.innerHTML = `
                <p><strong>Company:</strong> ${order.company}</p>
                <p><strong>Deliver To:</strong> ${order.deliveryTo}</p>
                <p><strong>Delivery Date:</strong> ${order.deliveryDate}</p>
                <p><strong>Priority:</strong> ${order.priority}</p>
                <p><strong>Contact:</strong> ${order.contact}</p>
                <p><strong>Earnings:</strong> ${order.earnings}</p>
                <button onclick="markDelivered('${order.deliveryTo}')">Mark as Delivered</button>
            `;
            ordersList.appendChild(orderItem);
        });
    }
}

function showMap() {
    window.location.href = "live_tracking.html";
}

function cancelOrder(trackingId) {
    alert(`Order with Tracking ID ${trackingId} has been canceled.`);
}

function markDelivered(customerName) {
    alert(`Order for ${customerName} has been marked as delivered.`);
}

function openChat() {
    document.getElementById("chatBox").classList.toggle("hidden");
}

function sendMessage() {
    let input = document.getElementById("chatInput");
    let chatMessages = document.getElementById("chatMessages");
    if (input.value.trim() === "") return;
    
    let message = document.createElement("p");
    message.textContent = `You: ${input.value}`;
    chatMessages.appendChild(message);
    input.value = "";
}

window.onload = function () {
    loadOrders();
};

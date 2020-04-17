let db;

const request = indexedDB.open("workout", 1);

request.onupgradeneeded = function(event) {
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true });
};

request.onsuccess = function(event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkDatabase();
    }
};

request.onerror = function(event) {
    console.log(`Not working: ${event.target.errorCode}`);
};

function saveRecord(record) {

};

function checkDatabase() {

};

getAll.onsuccess = function() {

};
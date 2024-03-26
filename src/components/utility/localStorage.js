export const savedLocalStorage = data => {
    let saveData = JSON.parse(localStorage.getItem("book")) || [];
    const existing = saveData.find(item => item.id === data.id);
    if (!existing) {
        saveData.push(data);
        localStorage.setItem("book", JSON.stringify(saveData));
        alert("Saving success");
    } else {
        alert("Donation already saved");
    }
}


export const getLocalStorage = () => {
    const saveData = JSON.parse(localStorage.getItem("book")) || [];
    return saveData;
}
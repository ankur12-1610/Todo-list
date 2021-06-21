import axios from "axios";
import { newElement } from "./main";
const API_BASE_URL = "https://todo-app-csoc.herokuapp.com/";

function getTasks() {
    /***
     * @todo Fetch the tasks created by the user and display them in the dom.
     */
    iziToast.info({
        title: "Info",
        message: "Loading all todos"
    });
    axios({
        headers: {
            Authorization: "Token " + localStorage.getItem("token")
        },
        url: API_BASE_URL + "todo/",
        method: "get"
    }).then(function (response) {
        const { data, status } = response;
        for (let task of data) {
            const taskNo = task.id;
            const todoText = task.title;
            newElement(todoText, taskNo);
            // localStorage.setItem("currentTaskNo", taskNo + 1);
        }
        iziToast.destroy();
    });
}

axios({
    headers: {
        Authorization: "Token " + localStorage.getItem("token")
    },
    url: API_BASE_URL + "auth/profile/",
    method: "get"
}).then(function ({ data, status }) {
    document.getElementById("avatar-image").src =
        "https://ui-avatars.com/api/?name=" + data.name + "&background=fff&size=33&color=007bff";
    document.getElementById("profile-name").innerHTML = data.name;
    getTasks();
});

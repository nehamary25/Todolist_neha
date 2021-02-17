function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        const html = data
          .map((todos) => {
            return `
              <tr>
                  <td>
                  <center>
                  <input type="checkbox" name="check" ${todos.completed ? "checked" : ""}  ${todos.completed ? "disabled" : ""}>
                  </center>
                  </td>
                  <td class="${todos.completed? "task-done" : ""}" id="title">${todos.title}</td>
              <tr>`;
          })
          .join("");
  
        document.querySelector("#todos").insertAdjacentHTML("afterbegin", html);
  
        
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  fetchData();
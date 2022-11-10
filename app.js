const expess = require("express");
const todocontroller = require("./controllers/todocontroller");


const app = expess();

app.use(expess.json());

app.get("/:todo_id", todocontroller.get_one);

app.get("/", todocontroller.get_all_todos); 

app.post("/", todocontroller.create_todo);

app.put("/", todocontroller.update_todo);

app.delete("/:todo_id", todocontroller.delete_todo);

app.listen(3001, () => {
    console.log("lintenig on port 3000...")
})
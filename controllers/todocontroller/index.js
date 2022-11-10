const Todo = require('../../models/Todo');

exports.get_all_todos = async (req, res) => {
    const todolist = await Todo.get_all_todos();
    if (!todolist.length){
        return res.status(404).json([]);
    }
    res.status(200).json(todolist);

}

exports.get_one = async (req, res) => {
    const {todo_id} = req.params
    const todo = await Todo.get_one(todo_id);
    res.json(todo);

}


exports.create_todo = async (req, res) => {

    const { title, discription } = req.body;

   await Todo.create_todo(title, discription);    

   res.status(201).send("todo created");
}


exports.update_todo = async (req, res) => {

    const {id, title, discription} = req.body
    const todo = await Todo.get_one(id) 
    if (!todo) {
        return res.status(404).send("task doesn't exist");
    }
    
    await Todo.update_todo(title, discription)

    res.status(201).send("task updated");
}


exports.delete_todo = async (req, res) => {

    const {todo_id} = req.params
    const todo = await Todo.get_one(todo_id) 
    if (!todo) {
        return res.status(404).send("task doesn't exist");
    }
    
    await Todo.delete_todo(todo_id)

    res.status(201).send("task deleted");
}
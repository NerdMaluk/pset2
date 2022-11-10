const { Pool } = require("pg");
const pool = require("../comfig/db");

class Todo {

    static async get_all_todos() {
        try {
            const todos = await pool.query("SELECT * FROM todos");

            return todos.rows;
        } catch (error) {
            console.error(error.message);
        }
    }
    


    static async get_one(id) {
        try {
            const todo = await pool.query("SELECT * FROM todos WHERE id = $1",[id]);

            return todo.rows;
        } catch (error) {
            console.error(error.message);
        }
    }

    

    static async create_todo(title, discription) {
        try {
          await pool.query("INSERT INTO todos (title, discription) VALUES($1, $2) RETURNING *", [title, discription]);  
        } catch (error) {
            console.error(error.message);
        }
    }

    static async update_todo(title, discription) {
        try {

            if(title) {
                await pool.query("UPDATE todos SET  title = $1", [title]);
            }
            if (discription) {
                 await pool.query("UPDATE todos SET  discription = $1", [discription]);;
                
            }
           
        } catch (error) {
            console.error(error.message);
        }
    }

    static async delete_todo(id) {
        try {
                await pool.query("DELETE FROM todos WHERE id = $1", [id]); 
            
        } catch (error) {
            console.error(error.message);
        }

    }
}
module.exports = Todo;
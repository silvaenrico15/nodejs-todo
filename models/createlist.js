const db = require('../utils/database');

module.exports = class Todolist {
    constructor(id, date, message) {
        this.id = id;
        this.date = date;    
        this.message = message;
    }

    save() {
        return db.execute(
            'INSERT INTO listtable (date, message) VALUES (?,?)',
            [this.date, this.message]
          );
    }

    update() {
        return db.execute(
            'UPDATE listtable SET date = ?, message = ? WHERE id = ?',
            [this.date, this.message, this.id] 
          );
    }
    static deleteTask(id) 
    {
        return db.execute('DELETE FROM listtable WHERE listtable.id = ?', [id]);
    }
    static fetchAll() {
        return db.execute('SELECT * FROM listtable');
    }

    static findById(id) {
        return db.execute('SELECT * FROM listtable WHERE listtable.id = ?', [id]);
    }
}
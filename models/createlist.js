const db = require('../utils/database');

module.exports = class Todolist {
    constructor(message) {    
        this.message = message;
    }

    save() {
        return db.execute(
            'INSERT INTO todoTable (message) VALUES (?)',
            [this.message]
          );
    }

    static deleteById(id) {}

    static fetchAll() {
        return db.execute('SELECT * FROM todoTable');
    }

  //  static findById(id) {
      //  return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  //  }
}
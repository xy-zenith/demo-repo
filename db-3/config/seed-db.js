import { pool } from './database.js';

const dropTables = async () => {
    try {
        console.log('dropping tables...');
        const dropTablesQuery = `
        DROP TABLE IF EXISTS toys;
        DROP TABLE IF EXISTS cats;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('creating cats and toys...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS cats (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                color TEXT NOT NULL,
                human TEXT NOT NULL,
                photo TEXT
            );
            CREATE TABLE IF NOT EXISTS toys (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,

                
            );
        `;
        await pool.query(createQuery);
        console.log('created cats and toys');

    } catch (error) {
        console.log(error)
    }
}

const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
        INSERT INTO cats (name, color, human, photo) VALUES 
            ('Jiji', 'black', 'Kiki', '/images/jiji.png');

        INSERT INTO cats (name, color, human, photo) VALUES 
            ('Lion', 'pink', 'Steven', '/images/lion.png');
            
        INSERT INTO cats (name, color, human, photo) VALUES 
            ('Hobbes', 'orange and black', 'Calvin', '/images/hobbes.png');

        INSERT INTO toys (name, cat_id) VALUES ('Laser Pointer', 1);
        INSERT INTO toys (name, cat_id) VALUES ('Broomstick', 1);
        INSERT INTO toys (name, cat_id) VALUES ('Blanket', 2);
        INSERT INTO toys (name, cat_id) VALUES ('Wagon', 3);   
        INSERT INTO toys (name, cat_id) VALUES ('Imagination', 3);            
        `;
        await pool.query(insertQuery);
    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();

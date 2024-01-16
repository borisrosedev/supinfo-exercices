BEGIN;
CREATE EXTENSION hstore ;
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    address hstore
);


INSERT INTO students (address) VALUES
    ('"street" => "1 rue des dockers", "city" => "Paris", "code_postal" => "75019"'),
    ('"street" => "2 rue des kubers", "ville" => "Londre", "code_postal" => "75011"'),
    ('"street" => "3 rue des hackers", "ville" => "New-York", "code_postal" => "6789"');
COMMIT;
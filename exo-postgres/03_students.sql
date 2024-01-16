BEGIN;


CREATE TABLE IF NOT EXISTS users(
    id SERIAL,
    data JSON
);




COMMIT;
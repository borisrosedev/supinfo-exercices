
CREATE ROLE teacher LOGIN PASSWORD 'caroline' CREATEDB;

GRANT ALL PRIVILEGES ON DATABASE students TO teacher;
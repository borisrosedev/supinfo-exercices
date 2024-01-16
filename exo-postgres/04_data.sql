BEGIN;
INSERT INTO users(data) VALUES
('{"firstname": "Olivier", "lastname": "Dupont"}'),
('{"firstname": "Sarah", "lastname": "Ben"}'),
('{"firstname": "Lise", "lastname": "Marche"}');
COMMIT;
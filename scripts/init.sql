-- scripts/init.sql
CREATE TABLE TestTable (
    ID INT PRIMARY KEY,
    Name NVARCHAR(100)
);

INSERT INTO TestTable (ID, Name) VALUES (1, 'Sample');
USE bxnrhuezpwxm1lfrim6o;

DROP TABLE IF EXISTS vehiculos;
DROP TABLE IF EXISTS modelo;
DROP TABLE IF EXISTS tipo_linea;
DROP TABLE IF EXISTS tipo_marca;
DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS shows;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS music_venue;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    city VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(30) NOT NULL,
    confirm_password VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE music_venue(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
    venue_name VARCHAR(30) UNIQUE NOT NULL, 
    city VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    capacity INT NOT NULL,  
    PRIMARY KEY(id)
);


CREATE TABLE bands(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT, 
    band_name VARCHAR(30) UNIQUE NOT NULL,
    band_category VARCHAR(30) NOT NULL,
    band_description TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE shows(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_band INT UNSIGNED NOT NULL,
    id_music_venue INT UNSIGNED NOT NULL,
    show_date DATE NOT NULL,
    available_seats INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_band) REFERENCES bands(id),
    FOREIGN KEY(id_music_venue) REFERENCES music_venue(id)
);

CREATE TABLE reservations(
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    id_user INT UNSIGNED NOT NULL,
    id_show INT UNSIGNED NOT NULL,
    tickets_amount INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_show) REFERENCES shows(id)
    );

INSERT INTO users (id, username, lastname, email, city, user_password, confirm_password) VALUES
(1,'Aria', 'Montgomery', 'aria@test.com', 'Rosewood', 'AriaMont11@', 'AriaMont11@');
INSERT INTO users (id, username, lastname, email, city, user_password, confirm_password) VALUES
(2,'Ezra', 'Fitz', 'ezra@test.com', 'Rosewood', 'Fitzra14#', 'Fitzra14#');


INSERT INTO music_venue (id, venue_name, city, country, capacity) VALUES
(1, 'Royal Albert Hall', 'London', 'UK', 5272);
INSERT INTO music_venue (id, venue_name, city, country, capacity) VALUES
(2, 'Sydney Opera House', 'Sydney', 'Australia', 2679);
INSERT INTO music_venue (id, venue_name, city, country, capacity) VALUES
(3, 'Radio City Music Hall', 'New York', 'USA', 5960);


INSERT INTO bands (id, band_name, band_description, band_category) VALUES
(1, 'Coldplay', 'Is a British rock band formed in London in 1996. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and creative director Phil Harvey.', 'Alternaive/Indie');
INSERT INTO bands (id,band_name, band_description, band_category) VALUES
(2, 'The War On Drugs', 'Is an American indie rock band from Philadelphia, Pennsylvania, formed in 2005. The band consists of Adam Granduciel (vocals, guitar), David Hartley (bass guitar), Robbie Bennett (keyboards), Charlie Hall (drums), Jon Natchez (saxophone, keyboards), Anthony LaMarca (guitar) and Eliza Hardy Jones (keyboards).', 'Indie Rock');
INSERT INTO bands (id,band_name, band_description, band_category) VALUES
(3, 'Companyon', 'Is a band started by frontman Bryan Wehrkamp and brought to life by Jim Joels Jr., Jay Alexander, and Zack Hutchinson. The group brings a high energy performance with hopes of cultivating an atmosphere for the listener in which they might feel all of the feelings.', 'Alternaive/Indie');
INSERT INTO bands (id,band_name, band_description, band_category) VALUES
(4, 'Freedom Call', 'Is a German power metal band formed in 1998. The band tours regularly and the current line-up includes two original members including lead vocalist and songwriter, Chris Bay. Freedom Call has released 12 albums in total, nine of these studio albums.', 'Power Metal');

INSERT INTO shows (id, id_band, id_music_venue, show_date, available_seats) VALUES
(1, 1, 1, '2022-08-05', 0);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(2, 1, 2, '2022-09-17', 2);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(3, 1, 3, '2022-10-10', 150);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(4, 2, 1, '2022-08-25', 0);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(5, 2, 3, '2022-09-18', 75);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(6,3, 3, '2022-09-05', 20);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(7,3, 2, '2022-10-07', 0);
INSERT INTO shows (id,id_band, id_music_venue, show_date, available_seats) VALUES
(8,4, 3, '2022-09-15', 10);

INSERT INTO reservations (id,id_user, id_show, tickets_amount) VALUES
(1, 1, 1, 2);
INSERT INTO reservations (id,id_user, id_show, tickets_amount) VALUES
(2, 1, 8, 4);
INSERT INTO reservations (id,id_user, id_show, tickets_amount) VALUES
(3, 2, 5, 2);
INSERT INTO reservations (id,id_user, id_show, tickets_amount) VALUES
(4, 2, 7, 4);

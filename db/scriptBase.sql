CREATE DATABASE viresland_concerts;
USE viresland_concerts;

DROP TABLE IF EXISTS reservations;
DROP TABLE IF EXISTS shows;
DROP TABLE IF EXISTS bands;
DROP TABLE IF EXISTS bands_images;
DROP TABLE IF EXISTS music_venue;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id SERIAL NOT NULL,
    username VARCHAR(30) NOT NULL,
    lastname VARCHAR(30) NOT NULL,
    city VARCHAR(50) NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(30) NOT NULL,
    confirm_password VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE music_venue(
    id SERIAL NOT NULL, 
    venue_name VARCHAR(30) UNIQUE NOT NULL, 
    city VARCHAR(30) NOT NULL,
    country VARCHAR(30) NOT NULL,
    capacity INT NOT NULL,  
    PRIMARY KEY(id)
);

/* CREATE TABLE bands_images(
    id INT UNSIGNED AUTO_INCREMENT,
    author VARCHAR(30) UNIQUE NOT NULL, 
    author_link TEXT NOT NULL,
    PRIMARY KEY(id)
); */

CREATE TABLE bands(
    id SERIAL NOT NULL, 
    band_name VARCHAR(30) UNIQUE NOT NULL,
    band_category VARCHAR(30) NOT NULL,
    band_description TEXT NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE shows(
    id SERIAL NOT NULL,
    id_band BIGINT NOT NULL,
    id_music_venue BIGINT NOT NULL,
    show_date DATE NOT NULL,
    available_seats INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_band) REFERENCES bands(id),
    FOREIGN KEY(id_music_venue) REFERENCES music_venue(id)
);

CREATE TABLE reservations(
    id SERIAL NOT NULL,
    id_user BIGINT NOT NULL,
    id_show BIGINT NOT NULL,
    tickets_amount INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY(id_user) REFERENCES users(id),
    FOREIGN KEY(id_show) REFERENCES shows(id)
    );

INSERT INTO users (username, lastname, email, city, user_password, confirm_password) VALUES
('Aria', 'Montgomery', 'aria@test.com', 'Rosewood', 'AriaMont11@', 'AriaMont11@');
INSERT INTO users (username, lastname, email, city, user_password, confirm_password) VALUES
('Ezra', 'Fitz', 'ezra@test.com', 'Rosewood', 'Fitzra14#', 'Fitzra14#');
/* INSERT INTO users (username, lastname, email, city, user_password, confirm_password) VALUES
('Hanna', 'Marin', 'aria@test.com', 'Rosewood', 'HanBan@', 'HanBan@'); */

INSERT INTO music_venue (venue_name, city, country, capacity) VALUES
('Royal Albert Hall', 'London', 'UK', 5272);
INSERT INTO music_venue (venue_name, city, country, capacity) VALUES
('Sydney Opera House', 'Sydney', 'Australia', 2679);
INSERT INTO music_venue (venue_name, city, country, capacity) VALUES
('Radio City Music Hall', 'New York', 'USA', 5960);

/* INSERT INTO bands_images (author, city, country, capacity) VALUES
('Royal Albert Hall', 'London', 'UK', 5272);
INSERT INTO bands_images (venue_name, city, country, capacity) VALUES
('Sydney Opera House', 'Sydney', 'Australia', 2679);
INSERT INTO bands_images (venue_name, city, country, capacity) VALUES
('Radio City Music Hall', 'New York', 'USA', 5960); */

INSERT INTO bands (band_name, band_description, band_category) VALUES
('Coldplay', 'Is a British rock band formed in London in 1996. They consist of vocalist and pianist Chris Martin, guitarist Jonny Buckland, bassist Guy Berryman, drummer Will Champion and creative director Phil Harvey.', 'Alternaive/Indie');
INSERT INTO bands (band_name, band_description, band_category) VALUES
('The War On Drugs', 'Is an American indie rock band from Philadelphia, Pennsylvania, formed in 2005. The band consists of Adam Granduciel (vocals, guitar), David Hartley (bass guitar), Robbie Bennett (keyboards), Charlie Hall (drums), Jon Natchez (saxophone, keyboards), Anthony LaMarca (guitar) and Eliza Hardy Jones (keyboards).', 'Indie Rock');
INSERT INTO bands (band_name, band_description, band_category) VALUES
('Companyon', 'Is a band started by frontman Bryan Wehrkamp and brought to life by Jim Joels Jr., Jay Alexander, and Zack Hutchinson. The group brings a high energy performance with hopes of cultivating an atmosphere for the listener in which they might feel all of the feelings.', 'Alternaive/Indie');
INSERT INTO bands (band_name, band_description, band_category) VALUES
('Freedom Call', 'Is a German power metal band formed in 1998. The band tours regularly and the current line-up includes two original members including lead vocalist and songwriter, Chris Bay. Freedom Call has released 12 albums in total, nine of these studio albums.', 'Power Metal');

INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(1, 1, '2022-08-05', 0);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(1, 2, '2022-09-17', 2);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(1, 3, '2022-10-10', 150);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(2, 1, '2022-08-25', 0);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(2, 3, '2022-09-18', 75);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(3, 3, '2022-09-05', 20);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(3, 2, '2022-10-07', 0);
INSERT INTO shows (id_band, id_music_venue, show_date, available_seats) VALUES
(4, 3, '2022-09-15', 10);

INSERT INTO reservations (id_user, id_show, tickets_amount) VALUES
(1, 1, 2);
INSERT INTO reservations (id_user, id_show, tickets_amount) VALUES
(1, 8, 4);
INSERT INTO reservations (id_user, id_show, tickets_amount) VALUES
(2, 5, 2);
INSERT INTO reservations (id_user, id_show, tickets_amount) VALUES
(2, 7, 4);

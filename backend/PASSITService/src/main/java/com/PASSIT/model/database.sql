CREATE TABLE IF NOT EXISTS Users (
    id                      INT NOT NULL AUTO_INCREMENT,
    username                VARCHAR(255) NOT NULL,
    passwordx               VARCHAR(255) NOT NULL,
    email                   VARCHAR(255) NOT NULL,
    namex                   VARCHAR(255) NOT NULL,
    rolex                   VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS Fan(
    fan_id                  INT REFERENCES Users(id) NOT NULL,
    PRIMARY KEY (fan_id)
);



CREATE TABLE IF NOT EXISTS Player (
    player_id               INT REFERENCES Users(id) NOT NULL,
    positionx               VARCHAR(100) NOT NULL,
    teamx                   INT REFERENCES Team(id) NOT NULL,
    age                     INT NOT NULL,
    height                  INT NOT NULL,
    weightx                 INT NOT NULL,
    numberx                 INT NOT NULL,
    last_stamina            FLOAT NOT NULL,
    last_game_date          DATE,

    PRIMARY KEY (player_id)
);

CREATE TABLE IF NOT EXISTS Coach (
    coach_id                INT REFERENCES Users(id) NOT NULL,
    teamx                   INT NOT NULL,
    PRIMARY KEY (coach_id)
);

CREATE TABLE IF NOT EXISTS Team (
    id                      INT NOT NULL,
    team_name               VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);




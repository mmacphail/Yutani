CREATE TABLE game (
	id uuid NOT NULL,
	"data" jsonb NOT NULL,
	creation_date timestamptz NOT NULL,
	completed bool NOT NULL,
	"version" varchar(4) NOT NULL,
	CONSTRAINT game_pk PRIMARY KEY (id)
);

CREATE TABLE player (
	id varchar(128) NOT NULL,
	pseudo varchar(128) NOT NULL,
	CONSTRAINT player_pk PRIMARY KEY (id)
);


CREATE TABLE game_player_list (
	game_id uuid NOT NULL,
	player_id varchar(128) NOT NULL,
	CONSTRAINT game_player_list_un UNIQUE (game_id, player_id)
);

ALTER TABLE game_player_list ADD CONSTRAINT game_player_list_fk FOREIGN KEY (game_id) REFERENCES game(id);
ALTER TABLE game_player_list ADD CONSTRAINT game_player_list_fk_1 FOREIGN KEY (player_id) REFERENCES player(id);
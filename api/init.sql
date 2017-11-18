/* scspace DB 초기화 SQL */

CREATE TABLE "event_type"
(
"event_type_id" SERIAL,
"event_type_name" TEXT,
CONSTRAINT "event_type_pkey" PRIMARY KEY ("event_type_id")
);

CREATE TABLE calendar
(
"event_id" SERIAL,
"reservation_id" INTEGER,
"event_type_id" INTEGER,
title TEXT,
"event_start" TIMESTAMP,
"event_end" TIMESTAMP,
CONSTRAINT "calendar_pkey" PRIMARY KEY ("event_id")
);

CREATE TABLE "article_state"
(
"article_state_id" SERIAL,
"article_state_name" TEXT,
CONSTRAINT "article_state_pkey" PRIMARY KEY ("article_state_id")
);

CREATE TABLE boards
(
"board_id" SERIAL,
"board_name" TEXT,
CONSTRAINT "boards_pkey" PRIMARY KEY ("board_id")
);

CREATE TABLE settings
(
id SERIAL,
name TEXT NOT NULL UNIQUE ,
value JSONB NOT NULL,
CONSTRAINT "settings_pkey" PRIMARY KEY (id)
);

CREATE TABLE spaces
(
"space_id" SERIAL,
"space_name" TEXT,
CONSTRAINT "spaces_pkey" PRIMARY KEY ("space_id")
);

CREATE TABLE states
(
"state_id" SERIAL,
"state_name" TEXT,
CONSTRAINT "states_pkey" PRIMARY KEY ("state_id")
);

CREATE TABLE "team_member"
(
"team_member_id" SERIAL NOT NULL,
"team_id" INTEGER NOT NULL,
"student_id" INTEGER NOT NULL,
name TEXT NOT NULL,
CONSTRAINT "team_member_pkey" PRIMARY KEY ("team_member_id")
);

CREATE TABLE notification
(
"notification_id" SERIAL,
"user_id" INTEGER,
message TEXT,
"did_read" BOOLEAN,
CONSTRAINT "notification_pkey" PRIMARY KEY ("notification_id")
);

CREATE TABLE "user_type"
(
"user_type_id" SERIAL,
"user_type_name" TEXT,
CONSTRAINT "user_type_pkey" PRIMARY KEY ("user_type_id")
);

CREATE TABLE reservation
(
"reservation_id" SERIAL,
"user_id" INTEGER,
"space_id" INTEGER,
"state_id" INTEGER,
content JSONB,
"reject_reason" TEXT,
"time_request" TIMESTAMP,
"time_last_edit" TIMESTAMP,
"time_decide" TIMESTAMP,
CONSTRAINT "reservation_pkey" PRIMARY KEY ("reservation_id")
);

CREATE TABLE board
(
"article_id" SERIAL,
"user_id" INTEGER,
"board_id" INTEGER,
"article_state_id" INTEGER,
content JSONB,
hit INTEGER,
"time_post" INTEGER,
"time_last_edit" INTEGER,
CONSTRAINT "board_pkey" PRIMARY KEY ("article_id")
);

CREATE TABLE team
(
"team_id" SERIAL NOT NULL,
name TEXT NOT NULL UNIQUE ,
"user_id" INTEGER,
"time_register" TIMESTAMP NOT NULL,
refund TEXT NOT NULL,
CONSTRAINT "team_pkey" PRIMARY KEY ("team_id")
);

CREATE TABLE comment
(
"comment_id" SERIAL,
"article_id" INTEGER,
"user_id" INTEGER,
"article_state_id" INTEGER,
content INTEGER,
"time_post" INTEGER,
"time_last_edit" INTEGER,
CONSTRAINT "comment_pkey" PRIMARY KEY ("comment_id")
);

CREATE TABLE "user"
(
"user_id" SERIAL,
"type_id" INTEGER,
"kaist_uid" TEXT UNIQUE ,
"student_id" TEXT UNIQUE ,
name TEXT,
email TEXT,
"phone_number" TEXT,
CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

CREATE TABLE worker
(
"worker_id" SERIAL,
CONSTRAINT "worker_pkey" PRIMARY KEY ("worker_id")
);

CREATE TABLE "reservation_worker"
(
"reservation_worker_id" SERIAL,
"worker_id" INTEGER,
"reservation_id" INTEGER,
"is_band" BOOLEAN,
CONSTRAINT "reservation_worker_pkey" PRIMARY KEY ("reservation_worker_id")
);

ALTER TABLE calendar ADD FOREIGN KEY ("reservation_id") REFERENCES reservation ("reservation_id");

ALTER TABLE calendar ADD FOREIGN KEY ("event_type_id") REFERENCES "event_type" ("event_type_id");

ALTER TABLE "team_member" ADD FOREIGN KEY ("team_id") REFERENCES team ("team_id");

ALTER TABLE notification ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE reservation ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE reservation ADD FOREIGN KEY ("space_id") REFERENCES spaces ("space_id");

ALTER TABLE reservation ADD FOREIGN KEY ("state_id") REFERENCES states ("state_id");

ALTER TABLE board ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE board ADD FOREIGN KEY ("board_id") REFERENCES boards ("board_id");

ALTER TABLE board ADD FOREIGN KEY ("article_state_id") REFERENCES "article_state" ("article_state_id");

ALTER TABLE team ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE comment ADD FOREIGN KEY ("article_id") REFERENCES board ("article_id");

ALTER TABLE comment ADD FOREIGN KEY ("user_id") REFERENCES "user" ("user_id");

ALTER TABLE comment ADD FOREIGN KEY ("article_state_id") REFERENCES "article_state" ("article_state_id");

ALTER TABLE "user" ADD FOREIGN KEY ("type_id") REFERENCES "user_type" ("user_type_id");

ALTER TABLE worker ADD FOREIGN KEY ("worker_id") REFERENCES "user" ("user_id");

ALTER TABLE "reservation_worker" ADD FOREIGN KEY ("worker_id") REFERENCES worker ("worker_id");

ALTER TABLE "reservation_worker" ADD FOREIGN KEY ("reservation_id") REFERENCES reservation ("reservation_id");

INSERT INTO event_type(event_type_name)
VALUES
	('Practice'),
	('Event'),
	('Rehearsal'),
	('Clean');
	
INSERT INTO article_state(article_state_name)
VALUES
	('Wait'),
	('Accept'),
	('Resolve'),
	('Delete');
	
INSERT INTO boards(board_name)
VALUES
	('Ask'),
	('Notice');

INSERT INTO settings(name, value)
VALUES
	('deposit', '{
		"bank": "",
		"account": "",
		"holder": ""
	}');

INSERT INTO spaces(space_name)
VALUES
	('piano-room-1'),
	('piano-room-2'),
	('individual-practice-room-1'),
	('individual-practice-room-2'),
	('individual-practice-room-3'),
	('group-practice-room'),
	('dance-studio'),
	('multipurpose-room'),
	('seminar-room-1'),
	('seminar-room-2'),
	('ullim-hall'),
	('mirae-hall'),
	('exhibition-stairs'),
	('community-yard'),
	('gathering-place'),
	('media-space'),
	('rooftop'),
	('1f-lobby'),
	('2f-lobby');
	
INSERT INTO states(state_name)
VALUES
	('Wait'),
	('Accept'),
	('Reject'),
	('Delete');
	
INSERT INTO user_type(user_type_name)
VALUES
	('Administrator'),
	('User');

create table Game (
  title varchar(255) primary key,
  subtitle varchar(255),
  bios boolean not null default false,

  -- from gamerankings.com
  publisher varchar(255),
  year integer,
  gameranking decimal,
  gameranking_reviews integer,

  -- from giantbomb
  deck varchar(255),
  description text,
  giantbomb_id integer
);

-- from giantbomb
create table Artwork (
  url varchar(255) primary key,
  game varchar(255) not null,

  foreign key (game) references Game(title)
);

-- from no-intro
create table ROM (
  file_name varchar(255) primary key,
  size integer not null,
  md5 binary(16) not null,
  crc  binary(4) not null,
  sha1 binary(20) not null,

  region varchar(255),
  console varchar(255) not null,
  game varchar(255) not null,
  long_name varchar(255) not null,

  foreign key (console) references Console(name),
  foreign key (game) references Game(title),
  foreign key (region) references Region(name)
);

create table Region (
  name varchar(255) primary key
);

create table Company (
  name varchar(255) primary key
);

create table Console (
  name varchar(255) primary key,
  company varchar(255) not null,
  long_name varchar(255) not null,
  foreign key (company) references Company(name)
);

drop database if exists rest;
create database rest;
use rest;

drop table item;
drop table category;
drop table restaurant;

create table restaurant(
rid int(5) AUTO_INCREMENT,
rname varchar(25) NOT NULL,
rtype varchar(25),
rarea varchar(25),
PRIMARY KEY(rid) 
);

create table category(
cid int(3) AUTO_INCREMENT,
cname varchar(25) NOT NULL,
resid int(5) NOT NULL,
PRIMARY KEY(cid),
FOREIGN KEY (resid) REFERENCES restaurant(rid) 
);

create table item(
itid int(3) AUTO_INCREMENT,
itname varchar(25) NOT NULL,
catid int(3) NOT NULL,
PRIMARY KEY(itid),
FOREIGN KEY (catid) REFERENCES category(cid) 
);

insert into restaurant(rname) values ("Gaucho Parrilla Argentina");

insert into category(cname,resid) values("Pequeños",1);
insert into category(cname,resid) values("Accompañamientos",1);
insert into category(cname,resid) values("Ensaladas",1);
insert into category(cname,resid) values("Con pan",1);
insert into category(cname,resid) values("Vaca",1);
insert into category(cname,resid) values("Exclusivos",1);
insert into category(cname,resid) values("Suplemento",1);

insert into item(itname,catid) values("Empanadas",1);
insert into item(itname,catid) values("Caldo del Mar",1);
insert into item(itname,catid) values("Provoletta",1);
insert into item(itname,catid) values("Papas Cuna",1);
insert into item(itname,catid) values("Vegetales",2);
insert into item(itname,catid) values("Gaucho Papas",2);
insert into item(itname,catid) values("Arroz",2);
insert into item(itname,catid) values("Maíz",2);
insert into item(itname,catid) values("Humita",2);
insert into item(itname,catid) values("La Casa",3);
insert into item(itname,catid) values("El Gaucho",3);
insert into item(itname,catid) values("Argentino",3);
insert into item(itname,catid) values("Pomelo",3);
insert into item(itname,catid) values("Remolachas Asada",3);
insert into item(itname,catid) values("Con Carne - Add Meat",3);
insert into item(itname,catid) values("Carne",4);
insert into item(itname,catid) values("Rosemary Braised Beef",4);
insert into item(itname,catid) values("Pollo",4);
insert into item(itname,catid) values("Vegetale",4);
insert into item(itname,catid) values("Bondiola",4);
insert into item(itname,catid) values("Pescado",4);
insert into item(itname,catid) values("Steak Burger",4);
insert into item(itname,catid) values("Chory Pan",4);
insert into item(itname,catid) values("Arrechera",5);
insert into item(itname,catid) values("Bife de Chorizo",5);
insert into item(itname,catid) values("Bife de Gaucho",5);
insert into item(itname,catid) values("Lomo",5);
insert into item(itname,catid) values("Vacio",5);
insert into item(itname,catid) values("Cedro",6);
insert into item(itname,catid) values("Cordero",6);
insert into item(itname,catid) values("Chorizos Argentino",6);
insert into item(itname,catid) values("Pollo ala Parrilla",6);
insert into item(itname,catid) values("Camarones",6);
insert into item(itname,catid) values("Pescado",6);
insert into item(itname,catid) values("Parrilloda Mixta",6);
insert into item(itname,catid) values("Asado Plate",6);
insert into item(itname,catid) values("Chuletas Cochino",6);
insert into item(itname,catid) values("Tostado",7);
insert into item(itname,catid) values("Hueso",7);
insert into item(itname,catid) values("Extras",7);
insert into item(itname,catid) values("BYOB",7);
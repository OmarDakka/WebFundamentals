-- question 1
select customer.first_name, customer.last_name, customer.email, address.address
from customer 
join address on customer.address_id = address.address_id
where address.city_id = 312;
--

-- question 2
use sakila;
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film
JOIN film_category ON film_category.film_id = film.film_id
JOIN category ON film_category.category_id = category.category_id
where category.name="comedy";
-- 
-- question 3
select actor.actor_id, actor.first_name, film.title, film.description, film.release_year
from  actor
join film_actor on film_actor.actor_id = actor.actor_id
join film on film_actor.film_id = film.film_id
where actor.actor_id = 5;
--
-- question 4 
select customer.first_name, customer.last_name, customer.email, address.address ,address.city_id,store.store_id
from customer
join store on customer.store_id = store.store_id
join address on customer.address_id = address.address_id
where address.city_id in (42, 1, 312,459)
and store.store_id = 1;
-- 

-- question 5 
select film.title, film.description, film.release_year, film.rating, film.special_features ,film_actor.actor_id
from film 
join film_actor on film_actor.film_id = film.film_id
where film_actor.actor_id = 15
and film.special_features like "Behind the Scenes"
--

-- question 6
select film.film_id, film.title, actor.first_name, actor.last_name
from film 
join film_actor on film_actor.film_id = film.film_id
join actor on actor.actor_id = film_actor.actor_id
where film.film_id = 369;
-- 

-- question 7
select film.title, film.description, film.release_year, film.rating, film.special_features, category.name
from film 
join film_category on film_category.film_id = film.film_id
join category on film_category.category_id = category.category_id
where category.name = "drama"
and film.rental_rate = 2.99;
-- 

-- question 8 
select film.title, film.description, film.release_year, film.rating, film.special_features,  actor.first_name, actor.last_name, category.name as Category
from film 
join film_category on film_category.film_id = film.film_id
join category on film_category.category_id = category.category_id
join film_actor on film_actor.film_id = film.film_id
join actor on actor.actor_id = film_actor.actor_id
where actor.first_name = "Sandra"
and actor.last_name = "Kilmer";
--

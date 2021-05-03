-- question 1
select countries.name, languages.language, languages.percentage
FROM countries
JOIN languages on countries.id = languages.country_id
where language = "Slovene"
order by percentage desc;    -- question 1

-- question 2
select countries.name as country_name, count(cities.name) as city_name 
FROM countries
join cities on countries.id = cities.country_id
group by countries.name
order by city_name desc; -- question 2

-- question 3
select cities.name, cities.population
from cities
join countries on countries.id = cities.country_id
where countries.name = "Mexico"
and cities.population > 500000
order by cities.population desc; -- question 3

-- question 4
select countries.name, languages.language, languages.percentage
from countries
join languages on countries.id = languages.country_id
where languages.percentage > 89
order by languages.percentage desc;
--

-- question 5
select countries.name, countries.surface_area, countries.population
from countries
where countries.surface_area < 501
and countries.population > 100000;
-- 

-- question 6
select countries.name, countries.capital, countries.government_form , countries.life_expectancy
from countries
where countries.government_form = "Constitutional Monarchy"
and countries.capital > 200 
and countries.life_expectancy > 75;
--

-- question 7
select cities.name, cities.district, cities.population
from cities
join countries on countries.id = cities.country_id
where countries.name = "Argentina"
and cities.district = "Buenos Aires"
and cities.population > 500000;
-- 
-- question 8
select countries.region, count(countries.name) as countries_region
from countries
group by countries.region
order by countries_region desc;
--




-- question 1
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name , users2.last_name AS friend_last_name
FROM users
JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON friendships.friend_id = users2.id
WHERE friendships.user_id = '4' OR friendships.friend_id = '4';
-- 

-- question 2
select count(friendships.user_id) as number_of_friendships
from friendships;
-- 

-- question 3
SELECT users.first_name, users.last_name, COUNT(users.id) AS number_of_friendships
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON friendships.friend_id = users2.id
group by users.id;
-- WHERE users.id = '1';
-- 

-- question 4
INSERT INTO users (first_name, last_name, created_at)
VALUES ('Matty', 'Calimbas', NOW());

INSERT INTO friendships (user_id, friend_id, created_at)
VALUES ('6', '2', NOW()), ('6', '4', NOW()), ('6', '5', NOW());
-- 

-- question 5 
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name, users2.last_name AS friend_last_name  
FROM users
LEFT JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON friendships.friend_id = users2.id
WHERE users.id = '2' OR users2.id = '2'
ORDER BY friend_last_name ASC;
    -- 
-- question 6 
DELETE FROM friendships 
WHERE user_id = '2'AND friend_id = '5';
-- 

-- question 7 
SELECT users.first_name, users.last_name, users2.first_name AS friend_first_name , users2.last_name AS friend_last_name
FROM users
JOIN friendships ON users.id = friendships.user_id
LEFT JOIN users AS users2 ON friendships.friend_id = users2.id;
-- 
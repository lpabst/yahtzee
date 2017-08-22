
select * from highscores
where gameplay = $1
order by score desc
limit 5


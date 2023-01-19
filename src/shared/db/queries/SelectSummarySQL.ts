export const SELECT_SUMMARY = `
		SELECT 
			D.id,
		       	D.date,
			(
				SELECT 
					cast(count(*) as float)
				FROM day_habits DH
				WHERE DH.day_id = D.id

			) as completed,
			(
				SELECT
					cast(count(*) as float)
				FROM habit_week_days HWD
				JOIN habits H
					ON H.id = HWD.habit_id
				WHERE
					HWD.week_day = cast(strftime('%w', D.date/1000, 'unixepoch') as int)
					AND H.created_at <= D.date
			) as ammount
	       	FROM days D`


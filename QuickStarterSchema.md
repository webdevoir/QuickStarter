
## projects
| **column name**  	| **data type** 	| **details**                    	|
|------------------	|---------------	|--------------------------------	|
| id               	| integer       	| not null, primary key          	|
| title            	| string        	| not null                       	|
| author_id        	| integer       	| not null, indexed, foreign key 	|
| backer_count     	| integer       	|                                	|
| funding_deadline 	| datetime      	| not null                       	|
| funding_goal     	| integer       	| not null                       	|
| total_funded     	| integer       	|                                	|
| blurb            	| string        	|                                	|
| description      	| text          	| not null                       	|
| title_image      	| string        	| not null                       	|
| category         	| string        	|                                	|
| created_at        | datetime        | not null                        |
| updated_at        | datetime        | not null                        |

## users
| **column name** | **data type** | **details**               |
|-----------------|---------------|---------------------------|
| id              | integer       | not null, primary key     |
| username        | string        | not null, indexed         |
| email           | string        | not null, indexed, unique |
| img_url         | string        |                           |
| password_digest | string        | not null                  |
| session_token   | string        | not null, indexed, unique |
| created_at      | datetime      | not null                  |
| updated_at      | datetime      | not null                  |

## rewards
| **column name**  | **data type** | **details**                    |
|------------------|---------------|--------------------------------|
| id               | integer       | not null, primary key          |
| project_id       | integer       | not null, indexed, foreign key |
| pledge_amount    | integer       | not null                       |
| gift             | string        | not null                       |
| gift_description | string        |                                |
| created_at       | datetime      | not null                       |
| updated_at       | datetime      | not null                       |














<!--  -->

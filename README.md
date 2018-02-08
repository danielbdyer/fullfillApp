# fullfillApp

#### See our YouTube demo here!

https://www.youtube.com/watch?v=4yHnL0zcra8

## Intro

While there are many applications out there for tracking a habit, Fullfill is a reddit-style content network meant to invite users to collectively collaborate on their process of building one.

## What We Used

| Built with:
| ------------|
| Javascript |
| HTML5/CSS3 |
| SASS |
| Node.JS |
| Express.JS |
| Mustache-Express |
| Express-Session |
| Body-Parser |
| PostgreSQL |
| Sequelize |
| Gulp |

## Using the App

Users can sign up using the account creation tool, or alternately log in if they already exist within the database. From there, currently, they will be presented with a screen where they are able to see all posts that are available in the database. Subsequent versions of the web app will work to incorporate the user’s topical/tag choices into the database query that produces the tags they are wishing to see, so that users can further personalize their experience on the web app.

## Our Design Process

#### Original Mockup Idea

![mockupIdea](https://i.imgur.com/oyeSzBj.png)

We worked to design the app from the top-down, starting with our big ideas about what we wanted to implement. We decided that, in our full vision of the site, we’d need several tables to form our PostgreSQL back-end:

* Tags
* Posts
* Users
* Comments

And that they might be joined in one-to-many, many-to-one, and many-to-many relationships:

* A user can have many posts (but a post cannot have many users) is one-to-many.
* A user can have many comments (a comment cannot have many users) is one-to-many.
* A user can have many tags they’d prefer to see, and a tag might have many users that subscribe to it, which is many-to-many.
* A user can have many favorited/saved comments or posts, a single comment or post can have many users which save/favorite them, which is many-to-many.
* A post or a comment can have many votes on it from users, and users can vote on many posts or many comments, which is many-to-many.

The many-to-many relationships require join tables from a database perspective, and so we created a few more tables meant to keep track of the relationships between:

* Posts and votes (table: postvote)
* Comments and votes (table: commentvote)
* Tags and posts (table: posts_tags)
* Users and saved comments (table: users_favcomments)
* Users and saved posts (table: users_favposts)
* Users and their preferred tags (table: users_favtags)

Using Sequelize, we then seeded some beginning activity to some of these tables, to get some content available on the site. The alpha content can be found within the ‘/seeders’ subdirectory.

From there, we worked to establish the flow of activity within the site. We asked ourselves, “What would a traditional progression of events look like for a user, using our web app?”

We imagined that an individual would join the site, sign up for the tags they wished to see, and would begin interacting with the site, which would now be reduced in scope to the topics that appealed to them personally. We imagined they would have the potential to add and remove topics as they pleased. We also envisioned them interacting with the posts, adding comments, up-voting or down-voting content as it was helpful or not helpful to them.

We also foresaw that we wished to have some restriction on the users with regards to making posts – for example, only when they had established themselves as reputable users – and we planned to implement a restrictor that checked to see either how long they had been active, or their ‘karma’ score thus far, in order to ascertain whether they’d be allowed to create a new post.

## Our Challenges

We found that our approach of designing from the top-down was an accurate way of thinking about a project of this scope, but given our time constraint of about a week, our manner of implementation had to also be to implement from the top-down – that is to say, everything at once. We believe the better route, however, in a project of this magnitude, is to develop from the bottom-up, incrementally adding features that build and leverage upon one another, and that was something that the both of us took from this project.

Going forwards, we are also faced with the notion of moderation and quality-assurance in a crowdsource model like this, which relies on its users to collectively develop good resources. We envisioned some sort of Wikipedia model, with version-control and tracking, but were unable to implement something of that scope within the given-time frame. Still, we believe this is our preferred approach, along with a moderation team, and a written set of standards for our users.

## Future Goals

Our intention is to do any number of things in continuing to develop this web app, as we believe this is a viable, standalone, marketable idea that deserves to come to fruition. They are:

* Register as a new user (complete)
* Log in as an existing user (complete)
* Display all posts (complete)
* Sort posts by tags (complete)
* Showing all posts within multiple tags (complete)
* To allow the user to select many topics upon sign-up so that they can see only the topics they are interested in on their homepage, similar perhaps to Flipboard in nature
* Creation of a form that allows them to create a new post, with multiple internal sections within it, including subsections like “Getting Started,” “Challenges,” “Resources,” etc.
* Post creation within a certain topic page by a user (i.e., creating the post with that associated topic and that user ID automatically linked to it)
* Adding other related tags manually during post creation
* Auto-completing the related tags from a list (stretch)
* Comment creation within a certain post
* Showing all posts by a user
* Showing all comments by a user
* Develop a voting mechanism that links in to both comments and posts
* Weighting votes depending upon how good of a reputation the user has within the site (stretch)


## Authors

* **Daniel Dyer** - [danielbdyer](https://github.com/danielbdyer)
* **Nydia Segura** - [ninikat](https://github.com/ninikat)

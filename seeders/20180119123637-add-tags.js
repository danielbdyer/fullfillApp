"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "tags",
      [
        {
          id: "1",
          name: "Habit-forming",
          uri: "habits",
          description: "doing _____ more frequently",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "2",
          name: "Communication",
          uri: "oration",
          description: "public speaking and rhetorically expressing myself",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "3",
          name: "Self-expression",
          uri: "selfexpression",
          description: "being more confident in emotionally expressing myself",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "4",
          name: "Maintaining positive regard",
          uri: "lovingkindness",
          description: "being more empathetic, and navigating conflicts",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "5",
          name: "Self-awareness",
          uri: "selfawareness",
          description: "the power of self-observation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "6",
          name: "Good friendships",
          uri: "friendships",
          description: "having satisfying connections in friendships",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "7",
          name: "Romantic relationships",
          uri: "relational-merger",
          description: "relational mergers including dating, intimacy, and romantic relationships",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "8",
          name: "Independence",
          uri: "relational-independence",
          description: "relational independence, and freedom from unhealthy expectations",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "9",
          name: "Parenting and family",
          uri: "family",
          description: "better parenting and family relationships",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "10",
          name: "Happiness",
          uri: "happiness",
          description: "being happier or more optimistic",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "11",
          name: "Feeling contented",
          uri: "mindfulness",
          description: "being more mindful or peaceful",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "12",
          name: "Feeling less stressed",
          uri: "realistic-beliefs",
          description: "being less stressed by setting the right expectations and beliefs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "13",
          name: "Productivity",
          uri: "productivity",
          description: "getting a lot done when I want to",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "14",
          name: "Organization",
          uri: "organization",
          description: "having ways of getting more organized",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "15",
          name: "Being creative",
          uri: "creativity",
          description: "feeling and being creative, and trusting the creative process",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "16",
          name: "Strategic thinking",
          uri: "problem-solving",
          description: "being able to approach a complex problem and solve it effectively",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "17",
          name: "Dealing with 'bad habits'",
          uri: "clearing",
          description: "Being able to free myself of unhelpful patterns of behavior",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "18",
          name: "Having a morning routine",
          uri: "morning-routine",
          description: "getting every day off to a good start",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "19",
          name: "Having more of a vision",
          uri: "vision",
          description: "getting very clear about where I want to be and go",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "20",
          name: "Motivation",
          uri: "motivation",
          description: "discovering the source of willpower and motivation",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "21",
          name: "Inspiration",
          uri: "inspiration",
          description: "discovering the source of passion, volition, and inspiration",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "22",
          name: "Actions and goal-setting",
          uri: "assertiveness",
          description: "making choices, setting goals, and taking action",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "23",
          name: "Self-image",
          uri: "self-image",
          description: "paying attention to how I see and think of myself",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "24",
          name: "A meaningful existence",
          uri: "faith-in-meaning",
          description: "awareness of what I believe in: existential meaning, purpose, spirituality",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "25",
          name: "Feeling generally well",
          uri: "wellness-and-health",
          description: "being and feeling overall a healthier person",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "26",
          name: "Feeling well-rested",
          uri: "energy",
          description: "being able to sleep, rest and recharge, and wake up well",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "27",
          name: "Eating well and cooking healthy",
          uri: "nutrition",
          description: "being aware of what I eat, what's in it, and cooking for myself",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "28",
          name: "Being more in shape",
          uri: "weight-management",
          description: "being focused upon weight-loss, toning, or athletics",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "29",
          name: "Working out more",
          uri: "fitness",
          description: "getting clear on resources available to me as I work out",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "30",
          name: "Saving money",
          uri: "budgeting",
          description: "being good at defining a reasonable budget and keeping to it",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: "31",
          name: "Making money",
          uri: "entrepreneurship",
          description: "side hustles, creating streams of income, changing perspectives on money",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete("tags", null, {});
  }
};

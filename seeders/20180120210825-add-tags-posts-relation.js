"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert(
      "posts_tags",
      [
        {
      		id : "1",
      		postId : "18",
      		tagId : "1",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "2",
      		postId : "19",
      		tagId : "1",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "3",
      		postId : "26",
      		tagId : "3",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "4",
      		postId : "24",
      		tagId : "5",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "5",
      		postId : "31",
      		tagId : "5",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "6",
      		postId : "37",
      		tagId : "5",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "7",
      		postId : "14",
      		tagId : "6",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "8",
      		postId : "15",
      		tagId : "6",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "9",
      		postId : "16",
      		tagId : "6",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "10",
      		postId : "27",
      		tagId : "6",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "11",
      		postId : "14",
      		tagId : "7",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "12",
      		postId : "15",
      		tagId : "7",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "13",
      		postId : "16",
      		tagId : "7",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "14",
      		postId : "17",
      		tagId : "7",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "15",
      		postId : "27",
      		tagId : "7",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "16",
      		postId : "29",
      		tagId : "7",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "17",
      		postId : "13",
      		tagId : "8",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "18",
      		postId : "15",
      		tagId : "8",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "19",
      		postId : "21",
      		tagId : "8",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "20",
      		postId : "14",
      		tagId : "9",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "21",
      		postId : "3",
      		tagId : "10",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "22",
      		postId : "20",
      		tagId : "10",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "23",
      		postId : "28",
      		tagId : "10",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "24",
      		postId : "25",
      		tagId : "11",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "25",
      		postId : "2",
      		tagId : "12",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "26",
      		postId : "4",
      		tagId : "12",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "27",
      		postId : "13",
      		tagId : "12",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "28",
      		postId : "15",
      		tagId : "12",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "29",
      		postId : "28",
      		tagId : "12",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "30",
      		postId : "33",
      		tagId : "12",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "31",
      		postId : "10",
      		tagId : "13",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "32",
      		postId : "17",
      		tagId : "13",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "33",
      		postId : "20",
      		tagId : "13",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "34",
      		postId : "28",
      		tagId : "13",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "35",
      		postId : "32",
      		tagId : "14",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "36",
      		postId : "20",
      		tagId : "15",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "37",
      		postId : "24",
      		tagId : "15",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "38",
      		postId : "28",
      		tagId : "15",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "39",
      		postId : "20",
      		tagId : "16",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "40",
      		postId : "17",
      		tagId : "17",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "41",
      		postId : "32",
      		tagId : "17",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "42",
      		postId : "21",
      		tagId : "18",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "43",
      		postId : "22",
      		tagId : "18",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "44",
      		postId : "23",
      		tagId : "18",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "45",
      		postId : "24",
      		tagId : "18",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "46",
      		postId : "25",
      		tagId : "18",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "47",
      		postId : "16",
      		tagId : "19",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "48",
      		postId : "25",
      		tagId : "19",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "49",
      		postId : "30",
      		tagId : "19",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "50",
      		postId : "31",
      		tagId : "19",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "51",
      		postId : "36",
      		tagId : "19",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "52",
      		postId : "5",
      		tagId : "20",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "53",
      		postId : "25",
      		tagId : "20",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "54",
      		postId : "32",
      		tagId : "20",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "55",
      		postId : "16",
      		tagId : "21",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "56",
      		postId : "22",
      		tagId : "21",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "57",
      		postId : "2",
      		tagId : "22",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "58",
      		postId : "4",
      		tagId : "22",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "59",
      		postId : "13",
      		tagId : "22",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "60",
      		postId : "26",
      		tagId : "22",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "61",
      		postId : "30",
      		tagId : "22",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "62",
      		postId : "31",
      		tagId : "22",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "63",
      		postId : "16",
      		tagId : "23",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "64",
      		postId : "21",
      		tagId : "23",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "65",
      		postId : "27",
      		tagId : "23",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "66",
      		postId : "29",
      		tagId : "23",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "67",
      		postId : "36",
      		tagId : "23",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "68",
      		postId : "1",
      		tagId : "24",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "69",
      		postId : "22",
      		tagId : "24",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "70",
      		postId : "27",
      		tagId : "24",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "71",
      		postId : "29",
      		tagId : "24",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "72",
      		postId : "34",
      		tagId : "24",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "73",
      		postId : "10",
      		tagId : "25",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "74",
      		postId : "20",
      		tagId : "25",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "75",
      		postId : "33",
      		tagId : "25",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "76",
      		postId : "5",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "77",
      		postId : "7",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "78",
      		postId : "8",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "79",
      		postId : "9",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "80",
      		postId : "10",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "81",
      		postId : "11",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "82",
      		postId : "12",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "83",
      		postId : "20",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "84",
      		postId : "28",
      		tagId : "26",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "85",
      		postId : "6",
      		tagId : "27",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "86",
      		postId : "7",
      		tagId : "27",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "87",
      		postId : "8",
      		tagId : "27",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "88",
      		postId : "9",
      		tagId : "27",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "89",
      		postId : "11",
      		tagId : "27",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "90",
      		postId : "12",
      		tagId : "27",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "91",
      		postId : "9",
      		tagId : "28",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "92",
      		postId : "11",
      		tagId : "28",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "93",
      		postId : "33",
      		tagId : "30",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "94",
      		postId : "35",
      		tagId : "30",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "95",
      		postId : "3",
      		tagId : "31",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "96",
      		postId : "16",
      		tagId : "31",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "97",
      		postId : "34",
      		tagId : "31",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "98",
      		postId : "37",
      		tagId : "31",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "99",
      		postId : "38",
      		tagId : "31",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	},
      	{
      		id : "100",
      		postId : "39",
      		tagId : "31",
      		createdAt : new Date(),
      		updatedAt : new Date()
      	}
      ],{});
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.bulkDelete("posts_tags", null, {});
  }
};

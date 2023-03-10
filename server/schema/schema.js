const { golfcourses, scorecards } = require("./sampleData");
const GolfCourse = require("../models/GolfCourse");

const { Kind } = require("graphql/language");
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLScalarType,
} = require("graphql");

// Golf Course Type
const GolfCourseType = new GraphQLObjectType({
  name: "GolfCourse",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    location: { type: LocationType },
    holes: { type: GraphQLList(HoleType) },
  }),
});

const LocationType = new GraphQLObjectType({
  name: "Location",
  fields: () => ({
    city: { type: GraphQLString },
    state: { type: GraphQLString },
    zip: { type: GraphQLString },
  }),
});

const HoleType = new GraphQLObjectType({
  name: "Hole",
  fields: () => ({
    number: { type: GraphQLInt },
    par: { type: GraphQLInt },
    distance: { type: GraphQLInt },
  }),
});

// Scorecard Type
const ScorecardType = new GraphQLObjectType({
  name: "Scorecard",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    golfCourse: {
      type: GolfCourseType,
      resolve(parent, args) {
        return golfcourses.find(
          (golfcourse) => golfcourse.id === parent.golfCourseId
        );
      },
    },
    players: { type: GraphQLList(PlayerType) },
  }),
});

const PlayerType = new GraphQLObjectType({
  name: "Player",
  fields: () => ({
    name: { type: GraphQLString },
    scores: { type: GraphQLList(ScoreType) },
  }),
});

const ScoreType = new GraphQLObjectType({
  name: "Score",
  fields: () => ({
    hole: { type: GraphQLInt },
    strokes: { type: GraphQLInt },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RooQueryType",
  fields: {
    // Golf course by id
    golfcourse: {
      type: GolfCourseType,
      args: { id: { type: GraphQLID } },
      resolve(parentVal, args) {
        return golfcourses.find((course) => course.id === args.id);
      },
    },
    // All golf courses
    golfcourses: {
      type: new GraphQLList(GolfCourseType),
      resolve(parentVal, args) {
        return golfcourses;
      },
    },
    // Scorecard by id
    scorecard: {
      type: ScorecardType,
      args: { id: { type: GraphQLID } },
      resolve(parentVal, args) {
        return scorecards.find((scorecard) => scorecard.id === args.id);
      },
    },
    // All Scorecards
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
});
